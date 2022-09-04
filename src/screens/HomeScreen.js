import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';

import {ImageSlider} from 'react-native-image-slider-banner';

import {useTheme} from '../contexts/ThemeProvider';

const image = {
  uri: 'https://i.pinimg.com/236x/d8/d3/c2/d8d3c254a7e605d2bc40c8f763958f4c.jpg',
};

function HomeScreen(props) {
  const {theme, updateTheme} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ImageSlider
          data={[
            {
              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU',
            },
            {
              img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
            },
            {
              img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
            },
            {
              img: 'https://source.unsplash.com/1024x768/?nature',
            },
            {
              img: 'https://source.unsplash.com/1024x768/?water',
            },
          ]}
          autoPlay={true}
          //onItemChanged={item => console.log('item', item)}
          // closeIconColor="#fff"
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
