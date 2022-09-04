import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {useTheme} from '../contexts/ThemeProvider';

const movieURL = 'https://reactnative.dev/movies.json';

const SearchScreen = () => {
  // managing state with 'useState'
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  const {theme, updateTheme} = useTheme();

  // similar to 'componentDidMount', gets called once
  useEffect(() => {
    fetch(movieURL)
      .then(response => response.json()) // get response, convert to json
      .then(json => {
        setData(json.movies);
        setTitle(json.title);
        setDescription(json.description);
      })
      .catch(error => alert(error)) // display errors
      .finally(() => setLoading(false)); // change loading state
  }, []);

  // Also get call asynchronous function
  async function getMoviesAsync() {
    try {
      let response = await fetch(movieURL);
      let json = await response.json();
      setData(json.movies);
      setTitle(json.title);
      setDescription(json.description);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      {/* While fetching show the indicator, else show response*/}
      {isLoading ? (
        <ActivityIndicator size="large" color="#f00" />
      ) : (
        <View>
          {/* Title from URL */}
          <Text style={[styles.title, {color: theme.textColor}]}>
            Movies List
          </Text>
          {/* Display each movie */}
          <View style={{borderBottomWidth: 1, marginBottom: 12}}></View>
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <View style={{paddingBottom: 10}}>
                <Text style={[styles.movieText, {color: theme.textColor}]}>
                  {item.id}. {item.title}, {item.releaseYear}
                </Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieText: {
    fontSize: 26,
    fontWeight: '400',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  description: {
    textAlign: 'center',
    marginBottom: 18,
    fontWeight: '200',
    color: 'green',
  },
});

export default SearchScreen;
