import React from 'react';
import BasicInfoForm from './BasicInfoForm';
import AddressForm from './AddressForm';
import NewCustomerDialog from './NewCustomerDialog';
import { Button, DataGrid, Form, Frame, Panel, Tab, TabItem, VMContext, withTheme } from 'dotnetify-elements';

class CustomerInfoPage extends React.Component {
   state = { editable: false, edit: false, openDialog: false };

   handleSelect = value => this.setState({ editable: value ? true : false });
   toggleEdit = _ => this.setState({ edit: !this.state.edit });
   toggleDialog = _ => this.setState({ openDialog: !this.state.openDialog });

   render() {
      const { editable, edit, openDialog } = this.state;
      const canEdit = editable && !edit;
      return (
         <VMContext vm="CustomerInfoPage">
            <Frame>
               <h2>Customers</h2>
               <DataGrid id="Contacts" onSelect={this.handleSelect} enable={!edit} />
               <Form plainText={!edit}>
                  <Panel>
                     {/* Toolbar */}
                     <Panel horizontal>
                        <Panel horizontal flex>
                           <Button label="Edit" enable={canEdit} onClick={this.toggleEdit} />
                           <Button label="Update" id="Submit" submit show={edit} onClick={this.toggleEdit} />
                           <Button label="Cancel" cancel secondary show={edit} onClick={this.toggleEdit} />
                        </Panel>
                        <Panel right>
                           <Button label="New Customer" onClick={this.toggleDialog} enable={!edit} />
                        </Panel>
                     </Panel>
                     {/* Edit forms */}
                     <Tab>
                        <TabItem label="Basic Info">
                           <BasicInfoForm />
                        </TabItem>
                        <TabItem label="Address">
                           <AddressForm />
                        </TabItem>
                     </Tab>
                  </Panel>
               </Form>
            </Frame>
            <NewCustomerDialog open={openDialog} onClose={this.toggleDialog} />
         </VMContext>
      );
   }
}

export default withTheme(CustomerInfoPage);
