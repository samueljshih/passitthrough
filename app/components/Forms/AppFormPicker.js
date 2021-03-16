import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ items, name, ...otherProps }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={({ label }) => setFieldValue(name, label)}
        selectedItem={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
