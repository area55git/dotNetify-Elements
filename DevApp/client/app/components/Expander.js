import React from 'react';
import styled from 'styled-components';
import { Collapsible } from 'dotnetify-elements';

const ExpanderPanel = styled.div`
   margin-bottom: 1rem;
   padding: .5rem;
   border-radius: 5px;
   border: 1px solid #ccc;
   background: #ddd;
`;

const ExpanderInnerPanel = styled.div`padding: 1rem .5rem;`;

class Expander extends React.Component {
   state = { expand: false };
   render() {
      const { label, content, connectOnExpand } = this.props;
      const handleToggled = toggled => this.setState({ expand: toggled });
      return (
         <ExpanderPanel>
            <Collapsible collapsed={true} label={label} onToggled={handleToggled}>
               {!connectOnExpand || this.state.expand ? <ExpanderInnerPanel>{content}</ExpanderInnerPanel> : null}
            </Collapsible>
         </ExpanderPanel>
      );
   }
}

export default Expander;
