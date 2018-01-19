import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { ContextTypes } from '../VMContext';
import { Panel } from '../layout/Panel';
import { Collapsible } from '../layout/Collapsible';
import { RouteLink } from 'dotnetify/dist/dotnetify-react.router';
import * as utils from '../utils';

const Container = styled.div`
    padding: .75rem 0;
`;

const GroupContainer = props => (
    <Collapsible headerContainer={GroupHeaderContainer} {...props}>
        {props.children}
    </Collapsible>
);

const RouteContainer = styled.div`
    color: ${props => props.theme.navRoute.color};    
    background: ${props => props.theme.navRoute.background};  
    &:hover {
        color: ${props => props.theme.navRoute.hover.color};
        background: ${props => props.theme.navRoute.hover.background};
    }
    > a {
        color: ${props => props.theme.navRoute.color};   
        &:hover { color: ${props => props.theme.navRoute.hover.color}; } 
        &:active {color: ${props => props.theme.navRoute.active.color}; }
        &:focus {color: ${props => props.theme.navRoute.focus.color}; }
    }
`;

const GroupHeaderContainer = Collapsible.componentTypes.HeaderContainer.extend`
    color: ${props => props.theme.navGroup.color};
    background: ${props => props.theme.navGroup.background};
    &:hover {
        color: ${props => props.theme.navGroup.hover.color};
        background: ${props => props.theme.navGroup.hover.background};
    }        
`;

const GroupLabelContainer = styled.div`
    display: flex;
    align-items: center;
    padding: .75rem; 
`;

const GroupLabel = props => (
    <GroupLabelContainer>
        {props.icon ? <Icon name={props.icon} /> : null}
        <span>{props.children}</span>
    </GroupLabelContainer>
);

const RouteLabelContainer = styled.div`
    padding: .75rem;
    padding-left: ${props => props.indent ? '2.5rem' : '1rem'};        
`;

const RouteLabel = props => (
    <RouteLabelContainer indent={props.indent}>
        {props.icon ? <Icon name={props.icon} /> : null}
        <span>{props.children}</span>
    </RouteLabelContainer>
);

const Icon = styled.span.attrs({
    className: props => props.name
}) `
    padding-right: .5rem;
    font-size: x-large;
`;

export const NavMenuTarget = _ => (<div id="NavMenuTarget" />);

export class NavMenu extends React.Component {

    static contextTypes = ContextTypes;

    static propTypes = {
        id: PropTypes.string.isRequired
    };

    static componentTypes = {
        Container,
        GroupContainer,
        RouteContainer,
        GroupLabelComponent: GroupLabel,
        RouteLabelComponent: RouteLabel
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.context.vm)
            this.context.vm.onRouteEnter = (path, template) => template.Target = this.props.target || "NavMenuTarget";
    }

    buildRoute(navRoute, navGroup) {
        const [, , RouteContainer, , RouteLabel] = utils.resolveComponents(NavMenu, this.props);
        const indent = navGroup["Icon"] != null;
        return (
            <RouteContainer key={navRoute.Route.TemplateId}>
                <RouteLink vm={this.context.vm} route={navRoute.Route}>
                    <RouteLabel icon={navRoute.Icon} indent={indent}>{navRoute.Label}</RouteLabel>
                </RouteLink>
            </RouteContainer>
        );
    }

    render() {
        const [Container, GroupContainer, , GroupLabel] = utils.resolveComponents(NavMenu, this.props);

        const vmId = this.context.vmId;
        const props = this.props;
        const value = this.context.getState(props.id) || [];

        const navMenu = value.map((navItem, idx) => {
            const groupLabel = props => <GroupLabel icon={navItem.Icon} {...props} />;
            return navItem.Routes ? (
                <GroupContainer key={idx} label={navItem.Label} labelComponent={groupLabel}>
                    {navItem.Routes.map(navRoute => this.buildRoute(navRoute, navItem))}
                </GroupContainer>
            ) : buildRoute(navItem);
        });

        return <Container>{navMenu}</Container>;
    }
};