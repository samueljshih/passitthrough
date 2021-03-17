import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/Lists/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/Lists/ListItemSeparator";
import ListItemDeleteAction from "../components/Lists/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Samuel Shih",
    description: "How's it going I am trying to buy something",
    image: require("../assets/imgs/mosh.jpg"),
  },
  {
    id: 2,
    title: "John Shih",
    description: "Whatsup guys how's it going",
    image: require("../assets/imgs/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            showChevron
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/imgs/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
