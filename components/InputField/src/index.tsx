import React from 'react';
import styles from './InputField.css';

interface InputFieldProps {
  /** Default value */
  defaultValue?: string;
  /** Disabled */
  disabled?: boolean;
  /** ID for input and corresponding label */
  id?: string;
  /** The onChange function */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Read only */
  readOnly?: boolean;
  /** Marks input as required (adds an asterisk) */
  required?: boolean;
  /** User-provided styles */
  style?: React.CSSProperties;
  /** Input type */
  type?: string;
}

/** A simple component. */
export const InputField = (props: InputFieldProps) => {
  const {
    defaultValue,
    disabled,
    id,
    onChange,
    readOnly,
    required,
    style,
    type = 'text'
  } = props;

  return (
    <input
      className={styles.inputField}
      defaultValue={defaultValue}
      disabled={disabled}
      id={id}
      readOnly={readOnly}
      required={required}
      style={style}
      type={type}
      onChange={onChange}
    />
  );
};

export default InputField;
