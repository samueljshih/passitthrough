import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText/AppText";
import ListItem from "../components/Lists/ListItem";

import colors from "../config/colors";

function ListingDetailScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/imgs/jacket.jpg")}
      />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Red Jacket for Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Mosh"
            subTitle="5 Listings"
            image={require("../assets/imgs/mosh.jpg")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailScreen;
