import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";

//Static data to display in list
const DATA = [
  "second row",
  "third row",
  "fourth row",
  "fifth row",
  "sixth row",
  "seventh row",
  "Eight row",
  "Nine row",
  "Nine row",
  "Nine row",
  "Nine row",
  "Nine row",
  "Tenth row",
];

export default function SocialHome() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.smallText}>Hello,</Text>
        <Text style={styles.boldText}>Alvarado!</Text>
        <Image
          style={styles.profileImage}
          source={require("./assets/zakerburg.jpg")}
        />
        <View style={styles.addFriendContainer}>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={24} style={styles.addIcon} />
          </TouchableOpacity>
          {/* SearchBar */}
      
          {/* scroll */}
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={DATA}
            renderItem={({ item }) => <Text style={styles.item_style}></Text>}
          />
        </View>

        {/* friend card */}
        <View style={styles.friendContainer}>
          <Image
            style={styles.cardBackgroundImage}
            source={require("./assets/babeComputer.jpg")}
          />

          <Text style={styles.smallTimeText}>32m ago</Text>
          <Text style={styles.mediumText}>Shane Robertson</Text>
          <Image
            style={styles.friendProfileImage}
            source={require("./assets/ladyCoder.jpg")}
          />
          <Entypo style={styles.menuIcon} name="dots-two-vertical" size={24} />
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    color: "#ECF3FC",
    padding: 16,
    marginTop: 40,
    marginBottom: 40,
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  friendContainer: {
    flex: 1,
    flexDirection: "column",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 8,
  },
  menuIcon: {
    color: "black",
    alignSelf: "flex-end",
  },
  profileImage: {
    width: 80,
    height: 80,
    alignSelf: "flex-end",
    borderRadius: 80 / 2,
    marginTop: -60,
  },

  smallText: {
    color: "#C8D1E4",
    marginTop: 20,
  },

  boldText: {
    fontWeight: "bold",
    marginTop: 2,
    fontSize: 24,
  },

  cardBackgroundImage: {
    width: 300,
    marginTop: 20,
    height: 200,
    alignSelf: "center",
  },
  friendProfileImage: {
    width: 50,
    height: 50,
    alignSelf: "flex-start",
    borderRadius: 50 / 2,
  },
  mediumText: {
    fontWeight: "bold",
    alignSelf: "center",

    fontSize: 16,
  },
  smallTimeText: {
    color: "#C8D1E4",
    marginTop: 20,
    alignSelf: "center",
  },
  addButton: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 80 / 2,

    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 16,
    marginEnd: 16,
    marginStart: 8,
  },
  addFriendContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  item_style: {
    backgroundColor: "#B591FF",
    width: 80,
    height: 80,
    marginBottom: 8,
    marginRight: 8,
    marginLeft: 8,
    borderRadius: 80 / 2,
    borderColor: "green",
    borderWidth: 2,
    alignSelf: "flex-end",
  },
  addIcon: {
    color: "black",
  },
});
