import React, {Component} from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';

const MovieDetailsItem = (props) => (
   <View style={Styles.container}>
      <Text style={Styles.title}>{props.Title}</Text>
      
      <Image style={Styles.image} source={{uri: props.Poster}} />
      
      <View style={Styles.containerInfo}>
         <Text style={Styles.plot}>{props.Plot}</Text>
         
         <Text>{'imdbID: ' + props.imdbID}</Text>
         <Text>{'Year: ' + props.Year}</Text>
         
         <Text>{'Rated: ' + props.Rated}</Text>
         <Text>{'Released: ' + props.Released}</Text>
         <Text>{'Runtime: ' + props.Runtime}</Text>
         <Text>{'Genre: ' + props.Genre}</Text>
         <Text>{'Director: ' + props.Director}</Text>
         <Text>{'Writer: ' + props.Writer}</Text>
         <Text>{'Actors: ' + props.Actors}</Text>
         
         <Text>{'DVD: ' + props.DVD}</Text>
         <Text>{'BoxOffice: ' + props.BoxOffice}</Text>
         <Text>{'Production: ' + props.Production}</Text>
         
         <Text>{'Language: ' + props.Language}</Text>
         <Text>{'Country: ' + props.Country}</Text>

         <Text>{'Awards: ' + props.Awards}</Text>
         
         <Text>{'Metascore: ' + props.Metascore}</Text>
         <Text>{'imdbRating: ' + props.imdbRating}</Text>
         <Text>{'imdbVotes: ' + props.imdbVotes}</Text>
         <Text>{'Website: ' + props.Website}</Text>
      </View>
   </View>
)

const Styles = StyleSheet.create({
   container: {
      marginTop: 5,
      marginBottom: 20,
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
   },
   containerInfo: {
      marginTop: 10,
      marginHorizontal: 5
   },
   plot: {
      marginBottom: 10,
      fontWeight: 'bold',
      color: 'white'
   },
   image: {
      width: 300,
      height: 466   
   },
   title: {
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'green',
      marginBottom: 5
   }
});

export default MovieDetailsItem