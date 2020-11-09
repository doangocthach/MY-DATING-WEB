import React, { ComponentType, memo } from "react";
import { TextField, InputAdornment, makeStyles } from "@material-ui/core";

interface Iprops {
  helperText?: string;
  readOnly?: boolean;
  endIcon?: ComponentType;
  startIcon?: ComponentType;
  onChange: Function;
  value: any;
  required?: boolean;
  variant?: "outlined" | "filled" | "standard" | undefined;
  type?: any;
  label?: string;
  autoFocus?: boolean;
  name?: string;
  autoComplete?: string;
  margin?: "normal" | "none" | "dense" | undefined;
}

const useStyle = makeStyles(() => ({
  input: {
    color: "rgba(0,0,0,0.87) !important",
  },
}));

const CustomTextField: React.FC<Iprops> = (props: Iprops) => {
  const {
    onChange,
    helperText,
    readOnly,
    endIcon,
    startIcon,
    value,
    variant,
    required,
    type,
    label,
    autoFocus,
    name,
    autoComplete,
    margin,
    ...rest
  } = props;
  const classes = useStyle();
  const inputClasses = readOnly ? classes.input : "";
  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <TextField
      value={value}
      helperText={helperText}
      variant="outlined"
      name={name}
      required={required}
      inputProps={{
        className: inputClasses,
        endAdornment: endIcon && (
          <InputAdornment position="end">{endIcon}</InputAdornment>
        ),
        startAdornment: startIcon && (
          <InputAdornment position="start">{startIcon}</InputAdornment>
        ),
      }}
      margin={margin}
      fullWidth
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      label={label}
      onChange={handleChange}
      disabled={readOnly}
      type={type}
      {...rest}
    />
  );
};
CustomTextField.defaultProps = {
  variant: "outlined",
  readOnly: false,
  required: false,
};

export default memo(CustomTextField);
