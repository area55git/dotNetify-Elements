import React from 'react';
import styled from 'styled-components';
import { Frame, Markdown, NumberField, Panel, Tab, TabItem, VMContext, withTheme } from 'dotnetify-elements';
import { TabsArticle, RenderCustomize, RenderExample } from '../../components';

const FormNumberField = props => (
   <TabsArticle vm="FormNumberField" id="Overview">
      <TabItem label="Overview" name="Overview">
         <Markdown id="Overview">
            <NumberFieldExample />
         </Markdown>
      </TabItem>
      <TabItem label="API" name="API">
         <Markdown id="API" />
      </TabItem>
      <TabItem label="Customize">
         <NumberFieldCustomize />
      </TabItem>
   </TabsArticle>
);

class NumberFieldExample extends React.Component {
   render() {
      const buildCode = props => `
\`\`\`jsx
import React from 'react';
import { VMContext, Panel, NumberField } from 'dotnetify-elements';

const MyApp = _ => (
   <VMContext vm="NumberFieldExample">
      <Panel horizontal childProps={{css: "min-width: 14rem; max-width: 20rem; white-space: nowrap"}}>   
         <NumberField id="HeightFeet" ${props}/>
         <NumberField id="HeightInches" ${props}/>
      </Panel>      
   </VMContext>
);
\`\`\``;
      const setState = state => this.setState(state);
      const css = 'min-width: 14rem; max-width: 20rem; white-space: nowrap';
      return (
         <RenderExample vm="NumberFieldExample" propTypes={NumberField.propTypes} buildCode={buildCode} onChange={setState}>
            <Panel horizontal css="min-height: 7rem; align-items: flex-start" childProps={{ css: css }}>
               <NumberField id="HeightFeet" {...this.state} />
               <NumberField id="HeightInches" {...this.state} />
            </Panel>
         </RenderExample>
      );
   }
}

class NumberFieldCustomize extends React.Component {
   state = { plainText: false, validationMessages: null };

   render() {
      const { plainText, validationMessages } = this.state;
      const componentTypes = NumberField.componentTypes;
      const handleSelected = state => this.setState(state);
      const select = value => ({
         plainText: value === 'PlainTextComponent',
         validationMessages: value === 'ValidationMessageComponent' ? [ 'Validation message' ] : null
      });
      return (
         <RenderCustomize vm="NumberFieldCustomize" name="NumberField" componentTypes={componentTypes} select={select} onSelected={handleSelected}>
            <NumberField id="MyNumberField" prefix="Prefix-" suffix="-Suffix" plainText={plainText} validationMessages={validationMessages} />
         </RenderCustomize>
      );
   }
}

export default withTheme(FormNumberField);
