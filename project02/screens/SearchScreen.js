import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import SearchForm from "../components/SearchForm";
import SearchMovie from "../components/SearchMovie";

const URL_SEARCH = "https://www.omdbapi.com/?apikey=356350c0&s=";
const URL_MOVIE = "https://www.omdbapi.com/?apikey=356350c0&i=";

export default class SearchScreen extends Component {
  static navigationOptions = {
    headerTitle: "Movie Browser ",
  };

  constructor(props) {
    super(props);

    this.state = {
      oSearchMovies: [],
      countFilm: 0,
      oSelectedMovie: null,
    };
  }

  onSubmitSearchMoviesForm = (oFormState) => {
    this.searchMoviesForPage(oFormState.textSearch);
  };

  searchMoviesForPage = (sSearch) => {
    fetch(URL_SEARCH + sSearch)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.Response == "True") {
            this.setState({
              oSearchMovies: data.Search,
              countFilm: data.totalResults,
            });
        }
      });
  };

  onSelectSearchMovieItem = (oMovieItem) => {
    fetch(URL_MOVIE + oMovieItem.imdbID)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ oSelectedMovie: data });
        this.props.navigation.navigate("MovieDetails", {
          oSelectedMovie: this.state.oSelectedMovie,
        });
      });
  };

  renderSearchMovieItem = (oSearchMovie) => (
    <SearchMovie
      {...oSearchMovie.item}
      onSelect={this.onSelectSearchMovieItem}
    />

  );

  render() {
    return (
      <View style={Styles.container}>
        <SearchForm onSubmit={this.onSubmitSearchMoviesForm} />
        <Text style={Styles.results}>
          {"[ " + this.state.countFilm + " films found ]"}
        </Text>
        <FlatList
          renderItem={this.renderSearchMovieItem}
          data={this.state.oSearchMovies}
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 5,
  },
  results: {
    textAlign: "right",
    marginRight: 20,
  },
});
