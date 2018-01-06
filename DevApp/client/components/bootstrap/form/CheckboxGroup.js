import React from 'react';
import { PropTypes } from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';
import { Field } from './Field';
import { ContextTypes } from '../../core/VMContext';

export class CheckboxGroup extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange = (event) => {
        let values = this.context.state[this.props.id] || [];
        values = event.target.checked ? values.concat([event.target.value]) : values.filter(value => value != event.target.value);
        this.context.setState({ [this.props.id]: values });
        this.context.dispatchState({ [this.props.id]: values });
    }

    render() {
        if (!this.context.state)
            return null;

        let vmId = this.context.vmId;
        let props = this.props;
        let values = this.context.state[props.id] || [];
        let attrs = this.context.getPropAttributes(props.id);
        let label = attrs.label || props.label;
        let checkboxes = (attrs.options || []).map(opt => (
            <FormGroup check key={opt.Key} id={`${vmId}.${props.id}`}>
                <Label check>
                    <Input type="checkbox" name={`${vmId}.${props.id}`} value={opt.Key} checked={values.includes(opt.Key)} onChange={this.handleChange} />
                    {opt.Value}
                </Label>
            </FormGroup>
        ));

        return (
            <Field horizontal={props.horizontal}>
                {label ? <Label for={props.id}>{label}</Label> : null}
                <section>{checkboxes}</section>
            </Field>
        );
    }
};

CheckboxGroup.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
};

CheckboxGroup.contextTypes = ContextTypes;