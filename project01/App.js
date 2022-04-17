import React from "react";
import { ScrollView, StyleSheet} from "react-native";
import Pomodoro from "./src/components/Pomodoro";

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <Pomodoro />
      </ScrollView>
    );
  }
}
