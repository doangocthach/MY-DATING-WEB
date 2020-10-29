import React, { memo, useState } from "react";
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";
import moment, { Moment } from "moment";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { CalendarToday } from "@material-ui/icons";
interface Iprops {
  minDate?: object | number;
  onChangeDate: any;
  value: object | number;
  maxDate?: object | number;
  label?: string;
  required?: boolean;
  inputVariant?: "outlined" | "standard" | "filled" | undefined;
  variant?: "dialog" | "inline" | "static" | undefined;
  readOnly?: boolean;
}

const CustomDatePicker: React.FC<Iprops> = (props: Iprops) => {
  const {
    onChangeDate,
    minDate,
    value,
    maxDate,
    label,
    required,
    readOnly,
    variant,
    inputVariant,
    ...rest
  } = props;
  const [dateError, setDateError] = useState(false);

  const handleChangeDate = (date: any) => {
    if (onChangeDate) {
      onChangeDate(date);
    }
    if (
      !date ||
      (date && date.isValid && !date.isValid()) ||
      (date &&
        date.isValid &&
        date.isValid() &&
        ((minDate && date.isBefore(minDate)) ||
          (maxDate && date.isAfter(maxDate))))
    ) {
      setDateError(true);
    } else {
      setDateError(false);
    }
  };
  return (
    <KeyboardDatePicker
      autoOk
      format="DD/MM/yyyy"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button>
              <CalendarToday fontSize="small" />
            </Button>
          </InputAdornment>
        ),
      }}
      // rightArrowIcon={<CalendarToday fontSize="small" />}

      // TextFieldComponent={(textProps) => {
      //   return (
      //     <TextField
      //       {...textProps}
      //       required={required}
      //       margin="dense"
      //       error={dateError}
      //     />
      //   );
      // }}
      error={dateError}
      inputVariant={inputVariant}
      disableToolbar
      variant={variant}
      fullWidth
      minDate={minDate && minDate}
      label={label}
      disabled={readOnly}
      value={value}
      maxDate={maxDate && maxDate}
      onChange={handleChangeDate}
      {...rest}
    />
  );
};

CustomDatePicker.defaultProps = {
  inputVariant: "outlined",
  readOnly: false,
  variant: "inline",
};
export default memo(CustomDatePicker);
