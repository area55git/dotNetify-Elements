import defaultTheme from './elements/theme';
import { Alert } from './elements/display/Alert';
import { Button } from './elements/form/Button';
import { Card } from './elements/layout/Card';
import { Checkbox } from './elements/form/Checkbox';
import { CheckboxGroup } from './elements/form/CheckboxGroup';
import { Collapsible } from './elements/layout/Collapsible';
import { DropdownList } from './elements/form/DropdownList';
import { FieldPanel } from './elements/layout/FieldPanel';
import { Form } from './elements/form/Form';
import { Label } from './elements/display/Label';
import { Main, Header, Nav, Footer, Section, Theme } from './elements/layout/LayoutGrid';
import { NavHeader } from './elements/layout/NavHeader';
import { NavMenu, NavMenuTarget } from './elements/nav/NavMenu';
import { NavToggle } from './elements/nav/NavToggle';
import { Panel, Frame } from './elements/layout/Panel';
import { RadioGroup } from './elements/form/RadioGroup';
import { TextField, PasswordField, TextAreaField } from './elements/form/TextField';
import { VMContext, ContextTypes } from './elements/VMContext';

import 'bootstrap/dist/css/bootstrap.css';
import './elements/bootstrapOverride.css';
import * as rs from 'reactstrap';

Alert.componentTypes.AlertComponent = rs.Alert;
Button.componentTypes.ButtonComponent = rs.Button;

Object.assign(Card.componentTypes, {
    Container: rs.Card,
    HeaderContainer: rs.CardHeader,
    BodyContainer: rs.CardBody
});

Object.assign(Checkbox.componentTypes, {
    Container: rs.FormGroup,
    LabelComponent: rs.Label,
    InputComponent: rs.Input
});

Object.assign(CheckboxGroup.componentTypes, {
    CheckboxContainer: rs.FormGroup,
    CheckboxLabelComponent: rs.Label,
    InputComponent: rs.Input
});

Collapsible.componentTypes.CollapsePanel = rs.Collapse;
DropdownList.componentTypes.InputComponent = rs.Input;

Object.assign(RadioGroup.componentTypes, {
    RadioContainer: rs.FormGroup,
    RadioLabelComponent: rs.Label,
    InputComponent: rs.Input
});

Object.assign(TextField.componentTypes, {
    InputComponent: rs.Input
});

export {
    defaultTheme,
    Alert,
    Button,
    Card,
    Checkbox,
    CheckboxGroup,
    Collapsible,
    ContextTypes,
    DropdownList,
    FieldPanel,
    Form,
    Label,
    Main, Header, Nav, Footer, Section, Theme,
    NavHeader,
    NavMenu,
    NavMenuTarget,
    NavToggle,
    Panel, Frame,
    RadioGroup,
    TextField, PasswordField, TextAreaField,
    VMContext
};