import React, { ComponentType, memo } from "react";
import { TextField, InputAdornment, makeStyles } from "@material-ui/core";

interface Iprops {
  helperText?: string;
  readOnly?: boolean;
  endIcon?: ComponentType;
  startIcon?: ComponentType;
  onChange: Function;
  value: any;
  variant?: "filled" | "standard" | "outlined" | undefined;
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
      variant={variant}
      inputProps={{
        className: inputClasses,
        endAdornment: endIcon && (
          <InputAdornment position="end">{endIcon}</InputAdornment>
        ),
        startAdornment: startIcon && (
          <InputAdornment position="start">{startIcon}</InputAdornment>
        ),
      }}
      onChange={handleChange}
      disabled={readOnly}
      {...rest}
    />
  );
};
CustomTextField.defaultProps = {
  variant: "outlined",
  readOnly: false,
};

export default memo(CustomTextField);
