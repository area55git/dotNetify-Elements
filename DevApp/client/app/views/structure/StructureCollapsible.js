import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Cell, Collapsible, Markdown, Panel, TabItem, withTheme } from 'dotnetify-elements';
import { TabsArticle, RenderCustomize, RenderExample } from '../../components';

const StructureCollapsible = props => (
   <TabsArticle vm="StructureCollapsible" id="Overview">
      <TabItem label="Overview" name="Overview">
         <Markdown id="Overview">
            <CollapsibleExample />
         </Markdown>
      </TabItem>
      <TabItem label="API" name="API">
         <Markdown id="API" />
      </TabItem>
      <TabItem label="Customize">
         <CollapsibleCustomize />
      </TabItem>
   </TabsArticle>
);

class CollapsibleExample extends React.Component {
   render() {
      const buildCode = props => `
\`\`\`jsx
import React from 'react';
import { Cell, Collapsible, VMContext } from 'dotnetify-elements';

const MyApp = _ => (
   <VMContext vm="CardExample">
      <Collapsible label={<b>Lorem Ipsum</b>} ${props}>
         <br/>
         <Cell>
            /* content */
         </Cell>
      </Collapsible>
   </VMContext>
);
\`\`\``;
      const setState = state => this.setState(state);
      return (
         <RenderExample propTypes={Collapsible.propTypes} buildCode={buildCode} onChange={setState}>
            <Panel css="padding-bottom: 2rem">
               <Collapsible label={<b>Lorem Ipsum</b>} {...this.state}>
               <br/>
               <Cell>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </Cell>
               </Collapsible>
            </Panel>
         </RenderExample>
      );
   }
}

class CollapsibleCustomize extends React.Component {
   state = {};

   render() {
      const componentTypes = Collapsible.componentTypes;
      const handleSelected = state => this.setState(state);
      const select = value => this.setState({collapsed: value === 'AngleExpandIcon'});
      return (
         <RenderCustomize name="Collapsible" componentTypes={componentTypes} select={select} onSelected={handleSelected}>
            <Collapsible label="Header" {...this.state}>
            Collapsible content
            </Collapsible>
         </RenderCustomize>
      );
   }
}

export default withTheme(StructureCollapsible);
