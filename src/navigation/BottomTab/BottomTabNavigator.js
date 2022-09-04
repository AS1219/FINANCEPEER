import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/HomeScreen';
import SearchScreen from '../../screens/SearchScreen';
import CategoriesScreen from '../../screens/CategoriesScreen';
import ExploreScreen from '../../screens/ExploreScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../../contexts/ThemeProvider';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const {theme} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === 'Search') {
            iconName = focused ? 'magnify' : 'magnify';
          } else if (rn === 'Categories') {
            iconName = focused ? 'database' : 'database';
          } else if (rn === 'Explore') {
            iconName = focused ? 'compass' : 'compass';
          } else if (rn === 'Profile') {
            iconName = focused ? 'account' : 'account';
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        headerShown: false,
        tabBarShowLabel: false,
      })}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#c489bc',
        activeBackgroundColor: theme.nav.active,
        inactiveBackgroundColor: theme.nav.inActive,
        style: {
          backgroundColor: theme.nav.backgroundColor,
          paddingBottom: 3,
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
