import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as data from '../constants/data.json';
import {Card} from 'react-native-paper';

import {useTheme} from '../contexts/ThemeProvider';

var Obj = data;

// const setLocalItem = async data => {
//   try {
//     const jsonValue = JSON.stringify(data);
//     await AsyncStorage.setItem('@storage_Key', jsonValue);
//   } catch (error) {}
// };

// const getLocalItem = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem('@storage_Key');
//     console.log('Anoop', jsonValue);
//     return jsonValue != null ? JSON.parse(jsonValue) : null;
//   } catch (e) {
//     // error reading value
//     console.log(e);
//   }
// };

function CategoriesScreen(props) {
  const {theme, updateTheme} = useTheme();

  // const [state, setState] = useState();
  const [shouldShow, setShouldShow] = useState(false);

  let jsonValue;

  const getLocalItem = async () => {
    try {
      jsonValue = await AsyncStorage.getItem('@storage_Key');
      console.log('Anoop', jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
      // setState(jsonValue);
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };
  // console.log('Anoop', jsonValue);

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <View
        style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              getLocalItem(data);
              setShouldShow(!shouldShow);
            }}
            style={[
              styles.getStyle,
              {backgroundColor: theme.nav.backgroundColor},
            ]}>
            <Text style={{color: '#fff'}}>Get file</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            marginBottom: 12,
            color: '#fff',
          }}></View>
        {shouldShow ? (
          <ScrollView>
            <FlatList
              data={Object.keys(Obj)}
              renderItem={({item}) => (
                <Card
                  style={{
                    backgroundColor: theme.nav.backgroundColor,
                    margin: 20,
                    borderRadius: 10,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      padding: 10,
                      marginLeft: 20,
                      justifyContent: 'space-evenly',
                    }}>
                    <Text style={{fontSize: 18}}>userId</Text>
                    <Text style={{fontSize: 18}}>:</Text>
                    <Text style={{fontSize: 18}}>{Obj[item].userId}</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      padding: 10,
                      marginLeft: 20,
                      justifyContent: 'space-evenly',
                    }}>
                    <Text style={{fontSize: 18}}>id</Text>
                    <Text style={{fontSize: 18}}>:</Text>
                    <Text style={{fontSize: 18}}>{Obj[item].id}</Text>
                  </View>
                </Card>
              )}
            />
          </ScrollView>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  getStyle: {
    borderColor: '#000',
    borderWidth: 1,
    height: 30,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoriesScreen;
