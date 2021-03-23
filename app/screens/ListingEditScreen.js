import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import * as Location from "expo-location";

import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import {
  AppForm,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/Forms";
import FormImagePicker from "../components/Forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.string().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    label: "Furniture",
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    value: 1,
  },
  { label: "Cars", backgroundColor: "#fd9644", icon: "car", value: 2 },
  { label: "Cameras", backgroundColor: "#fed330", icon: "camera", value: 3 },
  { label: "Games", backgroundColor: "#26de81", icon: "cards", value: 4 },
  {
    label: "Clothing",
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    value: 5,
  },
  {
    label: "Sports",
    backgroundColor: "#45aaf2",
    icon: "basketball",
    value: 6,
  },
  {
    label: "Movies & Music",
    backgroundColor: "#4b7bec",
    icon: "headphones",
    value: 7,
  },
];

function ListingEditScreen(props) {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <AppForm
        validationSchema={validationSchema}
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
      >
        <FormImagePicker name="images" />
        <FormField name="title" placeholder="Title" maxLength={255} />
        <FormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
          width={120}
        />
        <Picker
          items={categories}
          placeholder="Category"
          name="category"
          width="50%"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
        />
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
