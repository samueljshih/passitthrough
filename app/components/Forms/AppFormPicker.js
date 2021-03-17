import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import PickerItem from "../PickerItem";

function AppFormPicker({
  items,
  name,
  width,
  PickerItemComponent,
  ...otherProps
}) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={({ label }) => setFieldValue(name, label)}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
