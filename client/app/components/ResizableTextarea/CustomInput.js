import Input from "@material-ui/core/Input";
import React, {Component} from "react";

class CustomInput extends React.Component {
  render() {
    const {
      classes,
      formControlProps,
      value,
      onChange,
      labelText,
      id,
      labelProps,
      inputRef,
      inputProps
    } = this.props;
    return (
      <div {...formControlProps}>
        {labelText !== undefined ? (
          <div htmlFor={id} {...labelProps}>
            {labelText}
          </div>
        ) : null}
        <Input
          classes={{
            root: labelText !== undefined ? "" : classes.marginTop
          }}
          id={id}
          value={value} ///////// Fixed ////////
          onChange={onChange}
          inputRef={inputRef}
          {...inputProps}
        />
      </div>
    );
  }
}

export default CustomInput;
