import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Buttons extends Component {
	state = {};

	//renders pause, play and reset buttons
	render() {
		if(this.props.running === true)
		{
			return (
				<View style={styles.container}>
					<TouchableOpacity style={styles.button} onPress={this.props.pause}>
						<Text style={styles.text}>Pause</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={this.props.reset}>
						<Text style={styles.text}>Reset</Text>
					</TouchableOpacity>
				</View>
			)
		}
		else
		{
			return(
				<View  style={styles.container}>
					<TouchableOpacity style={styles.button} onPress={this.props.play}>
						<Text style={styles.text}>Play</Text>
					</TouchableOpacity>
				</View>
			)
		}
	}
}

const styles=StyleSheet.create({
	container:{
		flex: 1,
		flexDirection: "row" ,
		marginLeft: 20, 
		justifyContent: 'space-evenly'
	},
	button:{
		alignItems: "center",
		backgroundColor: "#097879",
	    padding: 15,
	    flexDirection: "row" ,
	    borderRadius: 50,
	}, 
	text: {
	    color: "white",
	    fontSize: 25,
	    fontWeight: "300",
  	}
})

export default Buttons