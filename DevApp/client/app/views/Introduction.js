import React from 'react';
import styled from 'styled-components';
import { Frame, Markdown, Theme, VMContext } from 'elements';
import { Button, Collapsible, DropdownList, Element, Form, NumberField, TextField } from 'elements';
import Expander from '../components/Expander';

const Overview = props => (
   <VMContext vm="Introduction">
      <Theme>
         <Frame width="95%">
            <Markdown id="Intro">
               <Expander label={<SeeItLive />} content={<NameInput />} />
               <Expander label={<SeeItLive />} content={<NameGenderInput />} />
               <Expander label={<SeeItLive />} content={<PrimeInput />} />
            </Markdown>
         </Frame>
      </Theme>
   </VMContext>
);

const SeeItLive = _ => <b>See it Live!</b>;

const HelloWorld = _ => (
   <VMContext vm="HelloWorld">
      <div>
         <Element id="Greetings" />
      </div>
   </VMContext>
);

const NameInput = _ => (
   <VMContext vm="NameInput">
      <TextField id="Name" label="Name:" placeholder="Enter your name" />
      <br />
      You typed:{' '}
      <b>
         <Element id="Name" />
      </b>
   </VMContext>
);

const NameGenderInput = _ => (
   <VMContext vm="NameGenderInput">
      <TextField id="Name" />
      <DropdownList id="Gender" />
   </VMContext>
);

const PrimeInput = _ => (
   <VMContext vm="PrimeInput">
      <NumberField id="Prime" />
   </VMContext>
);

export default Overview;