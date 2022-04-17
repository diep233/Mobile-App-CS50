import React, {Component} from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

const MIN_LENGTH = 3;
const MAX_LENGTH = 60;

class SearchForm extends Component {

   constructor(props) {
      super(props);
      
      this.state = {
         textSearch: '',
         checkForm: false
      }
   }
   
   componentDidUpdate(prevProps, prevState) {
      if (this.state.textSearch !== prevState.textSearch) {
         this.validateForm()
      }
   }
   
   onChangeInputSearch = (textSearch) => {
      if (textSearch.length <= MAX_LENGTH) {
         this.setState({textSearch})
      }
   }
   
   validateForm = () => {
      if ((this.state.textSearch.length >= MIN_LENGTH) && (this.state.textSearch.length <= MAX_LENGTH)) {
         this.setState({checkForm: true})
      }       
      else {
         this.setState({checkForm: false})
      }
   }
   
   onSubmit = () => {
      this.props.onSubmit(this.state)
   }
   
   render() {
      return (
         <View>
            <TextInput style={styles.input} value={this.state.textSearch} onChangeText={this.onChangeInputSearch} placeholder="Enter movie's name for searching" />
            <View style={styles.button}>
               <Button title="Search" onPress={this.onSubmit} disabled={!this.state.checkForm} />
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   input: {
      borderWidth: 1,
      borderColor: 'black',
      minWidth: 100,
      marginTop: 20,
      marginBottom: 10,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 3
   },
   button: {
      marginBottom: 10,
      marginHorizontal: 20,
   }
});

export default SearchForm