import {View, Text, Button, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';

// Image
import bg from '../assets/images/bg.jpg';

const Home = ({navigation}) => {
  return (
    <ImageBackground source={bg} resizeMode="cover" style={style.bg}>
      <View style={style.container}>
        <Text style={style.heading}>Selamat Datang di Toko Kami</Text>
        <Text style={style.paragraph}>
          Silahkan Tap Browse Product untuk berbelanja
        </Text>
        <Button
          title="Browse Product"
          onPress={() => navigation.navigate('Browse')}
        />
      </View>
    </ImageBackground>
  );
};

export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 50,
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    color: '#000',
    marginBottom: 4,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 15,
    marginBottom: 8,
    textAlign: 'center',
  },
});

export default Home;
