import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Button,
} from 'react-native';
// import {Avatar} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useTheme} from '../contexts/ThemeProvider';

function ProfileScreen(props) {
  const [image, setImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
  );
  const {theme, updateTheme} = useTheme();

  const changeTheme = () => updateTheme(theme.themeMode);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
      useFrontCamera: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <TouchableOpacity onPress={takePhotoFromCamera}>
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 50,
          }}>
          <ImageBackground
            source={{
              uri: image,
            }}
            style={{height: 100, width: 100}}
            imageStyle={{borderRadius: 50}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#000',
                  height: 23,
                  width: 23,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 65,
                  marginLeft: 60,
                }}>
                <MaterialCommunityIcons
                  name={'camera-plus'}
                  size={20}
                  style={styles.icon}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
      <View style={{marginTop: 70}}>
        <Button
          title="change Theme"
          onPress={changeTheme}
          color={theme.nav.backgroundColor}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default ProfileScreen;
