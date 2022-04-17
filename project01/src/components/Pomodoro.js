import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import Timer from './Timer'

class PomodoroTimer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			workTime: 25,
			breakTime: 5,
			intervalType : "Working",
		}
	}

	// handles completion of timer
	handleTimerCompleted = () => {
		if(this.state.intervalType === "Working")
		{
			this.setState({
				intervalType: "Break"
			})
		}
		else
		{
			this.setState({
				intervalType: "Working"
			})	
		}
	}

	// gets triggered on change of worktimer text
	handleWorkTime = (text) =>
	{
		if(text >= 0)
		{
			this.setState({
				workTime: text
			})
		}
		else{
			alert("Time invalid. Setting value to default. Please enter valid time")
			this.setState({
				workTime: 25
			})
		}
	}

	// gets triggered on change of breaktimer text
	handleBreakTime = (text) =>{
		if(text >= 0)
		{
			this.setState({
				breakTime:  text
			})
		}
		else
		{
			alert("Time invalid. Setting value to default. Please enter valid time")
			this.setState({
				breakTime: 5
			})
		}
	}

	// called to set the timer's time
	handleTime = () => {
		if(this.state.intervalType === "Working")
		{
			return this.state.workTime
		}
		else
		{
			return this.state.breakTime
		}
	}

	render() {
		let time= this.handleTime()
		return (
			<View>
				<View style={styles.top}>
					<View style={styles.wrap}>
						<Text style={styles.text}>Pomodoro</Text>
						<TextInput  style={styles.text}  keyboardType={"numeric"} defaultValue={''+this.state.workTime}  onChangeText={this.handleWorkTime} textAlign={'center'}/>
					</View>
					<View style={styles.wrap}>
						<Text style={styles.text}>Break</Text>
						<TextInput  style={styles.text}  keyboardType={"numeric"} defaultValue={''+this.state.breakTime} onChangeText={this.handleBreakTime} textAlign={'center'} />
					</View>
				</View>
				<Timer
					intervalType={this.state.intervalType}
					Oncomplete={this.handleTimerCompleted}
					period={time}
				/>
			</View>
		)
	}
}
export default PomodoroTimer;

const styles = StyleSheet.create({
  top: {
    flex: 1,
    flexDirection: "row",
	marginTop: "35%"
  },
  wrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: -20,
	alignItems: "center"
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
    letterSpacing: 1.5,
    fontFamily: Platform.OS == "android" ? "notoserif" : "system",
    marginTop: 40,
    padding: 20
  },
});