import React from 'react';

import TextField from '.';
import notes from '../README.md';

export default {
  title: 'Components/Text-Field',
  parameters: { notes }
};

export const BasicUsage = () => <TextField label="Hello" />;
export const NoLabel = () => <TextField />;
export const Required = () => <TextField required label="Required" />;
export const Disabled = () => <TextField disabled label="Disabled" />;
export const DefaultValue = () => (
  <TextField defaultValue="Default Value" label="Default Value" />
);
export const ReadOnly = () => (
  <TextField readOnly defaultValue="Read Only" label="Read Only" />
);
export const HelperText = () => (
  <TextField helperText="This is some helper text." label="Helper Text" />
);
export const Password = () => <TextField label="Password" type="password" />;
export const Number = () => <TextField label="Number" type="number" />;
export const Search = () => <TextField label="Search" type="search" />;
export const Error = () => (
  <TextField error defaultValue="Hello World" label="Error" type="search" />
);
export const ErrorWithHelperText = () => (
  <TextField
    error
    defaultValue="Hello World"
    helperText="Invalid input."
    label="Error With Helper Text"
    type="search"
  />
);
