import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './screens/SearchScreen';
import DetailsScreen from './screens/DetailsScreen';

const AppNavigator = createStackNavigator(
  {
    SearchMovies: SearchScreen,
    MovieDetails: DetailsScreen,
  },
  {
    initialRouteName: 'SearchMovies',
  }
);

const App = createAppContainer(AppNavigator);

export default App;