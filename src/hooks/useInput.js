import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [value, setValue] = useState(defaultValue);

  const [didEdit, setDidEdit] = useState(false);

  const isValid = validationFn(value);

  function handleChange(event) {
    setValue(event.target.value);
    setDidEdit(false);
  }

  function handleBlur() {
    setDidEdit(true);
  }

  function resetValue() {
    setValue(defaultValue);
    setDidEdit(false);
  }

  return {
    value,
    handleChange,
    handleBlur,
    resetValue,
    hasError: didEdit && !isValid,
  };
}
