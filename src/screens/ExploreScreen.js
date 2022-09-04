/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Linking} from 'react-native';
import RNLocation from 'react-native-location';

import {useTheme} from '../contexts/ThemeProvider';

RNLocation.configure({
  distanceFilter: null,
});

const ExploreScreen = ({url}) => {
  [viewLocation, isViewLocation] = useState([]);
  const {theme, updateTheme} = useTheme();

  const getLocation = async () => {
    let permission = await RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'coarse', // or 'fine'
      },
    });

    console.log(permission);

    let location;
    if (!permission) {
      permission = await RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'coarse',
          rationale: {
            title: 'We need to access your location',
            message: 'We use your location to show where you are on the map',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          },
        },
      });
      console.log(permission);
      location = await RNLocation.getLatestLocation({timeout: 100});
      console.log(location);
      isViewLocation(location);
    } else {
      location = await RNLocation.getLatestLocation({timeout: 100});
      console.log(location);
      isViewLocation(location);
      setTweet([viewLocation.longitude, viewLocation.latitude]);
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Text style={[styles.txtStyle, {color: theme.textColor}]}>
        User Location
      </Text>

      <Text style={[styles.lat, {color: theme.textColor}]}>
        Latitude: {viewLocation.latitude}{' '}
      </Text>
      <Text style={[styles.lat, {color: theme.textColor}]}>
        Longitude: {viewLocation.longitude}{' '}
      </Text>

      <View
        style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button
          title="Get Location"
          onPress={getLocation}
          color={theme.nav.backgroundColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtStyle: {
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  lat: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default ExploreScreen;
