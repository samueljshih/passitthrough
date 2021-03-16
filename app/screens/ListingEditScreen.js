import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/Forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.string().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const items = [
  { label: "Shoes", value: 1 },
  { label: "Jeans", value: 2 },
  { label: "T-Shirts", value: 3 },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        validationSchema={validationSchema}
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        <FormField name="title" placeholder="Title" maxLength={255} />
        <FormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
        />
        <Picker items={items} placeholder="Category" name="category" />
        <FormField
          name="description"
          placeholder="Description"
          maxLength={255}
          multiline
          numberOfLines={3}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
