import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const oSearchMovieItem = (props) => (
  <View style={Styles.container}>
    <TouchableOpacity
      onPress={() => {
        props.onSelect(props);
      }}
    >
      <View style={Styles.separator} />
      <Text style={Styles.title}>{props.Title}</Text>
    </TouchableOpacity>
    <Image style={Styles.image} source={{ uri: props.Poster }} />
  </View>
);

const Styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 20,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  separator: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 466,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    color: "green",
    marginBottom: 5,
  },
});

export default oSearchMovieItem;
