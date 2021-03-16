import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";

import { AppForm, AppFormField, SubmitButton } from "../components/Forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email(4).label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        validationSchema={validationSchema}
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
          textContentType="name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          placeholder="Email"
          textContentType="email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="password"
          name="password"
          icon="lock"
          placeholder="Password"
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
