import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Display extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {Math.floor(this.props.time/60).toString().padStart(2,"0") + ":" + 
					(this.props.time % 60).toString().padStart(2,"0")}
                </Text>
            </View>
        )
    }
}

export default Display;

const styles = StyleSheet.create(
    {
        container: {
            marginTop: "10%",
            marginBottom: "10%",
            marginLeft: "20%",
            marginRight: "20%",
            padding: "5%",
            borderColor: "white",
            borderRadius: 80,
            borderWidth: 5,
            alignItems: 'center',
            backgroundColor: "#097879",
        },
        text: {
            color: "white",
            fontSize: 50,
            fontWeight: "400",
        }
    }
)