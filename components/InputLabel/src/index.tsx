import React from 'react';
import cn from 'classnames';
import styles from './InputLabel.css';

interface InputLabelProps {
  /** Error boolean to change styles */
  error?: boolean;
  /** ID for corresponding input */
  htmlFor?: string;
  /** Input label */
  label?: string;
  /** User-provided styles */
  style?: React.CSSProperties;
}

/** Label component that accompanies input elements. */
export const InputLabel = (props: InputLabelProps) => {
  const { error, htmlFor, label, style } = props;
  const labelClasses = cn(styles.inputLabel, { [styles.error]: error });

  return (
    <label className={labelClasses} htmlFor={htmlFor} style={style}>
      {label}
    </label>
  );
};

export default InputLabel;
