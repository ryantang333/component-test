import React from 'react';
import cn from 'classnames';
import InputField from '../../InputField/src';
import InputLabel from '../../InputLabel/src';
import style from './TextField.css';

interface TextFieldProps {
  /** User-provided components, each key corresponds to an associated inner component */
  components?: object;
  /** Default value */
  defaultValue?: string;
  /** Disabled */
  disabled?: boolean;
  /** Error boolean to change styles */
  error?: boolean;
  /** Helper text below the input */
  helperText?: string;
  /** ID for input and corresponding label */
  id?: string;
  /** Input label */
  label?: string;
  /** The onChange function */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Read only */
  readOnly?: boolean;
  /** Marks input as required (adds an asterisk) */
  required?: boolean;
  /** User-provided styles, each key corresponds to an associated inner component */
  styles?: object;
  /** Input type */
  type?: string;
}

/** A simple component. */
export const TextField = (props: TextFieldProps) => {
  const {
    components = {},
    defaultValue,
    disabled,
    error,
    helperText,
    id,
    onChange,
    readOnly,
    required,
    styles = {},
    type = 'text'
  } = props;
  const classNames = cn(
    style.textField,
    { [style.disabled]: disabled },
    { [style.error]: error }
  );
  const helperTextClasses = cn(style.helperText, { [style.error]: error });

  // user-provided custom components
  const InputFieldComponent = components?.InputField || InputField;
  const InputLabelComponent = components?.InputLabel || InputLabel;

  // user-provided custom styles
  const InputFieldStyles = styles?.InputField;
  const InputLabelStyles = styles?.InputLabel;

  let { label } = props;

  if (label && required) {
    label += ' *';
  }

  return (
    <>
      <div className={classNames}>
        {label && (
          <InputLabelComponent
            error={error}
            htmlFor={id}
            label={label}
            style={InputLabelStyles}
          />
        )}
        <InputFieldComponent
          defaultValue={defaultValue}
          disabled={disabled}
          id={id}
          readOnly={readOnly}
          required={required}
          style={InputFieldStyles}
          type={type}
          onChange={onChange}
        />
      </div>
      <p className={helperTextClasses}>{helperText}</p>
    </>
  );
};

export default TextField;
