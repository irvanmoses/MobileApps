import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import kategori from './data/kategori';

const Browse = ({navigation}) => {
  return (
    <ScrollView style={style.container}>
      <Text style={style.title}>Pilih Kategori</Text>
      {kategori.map(item => (
        <TouchableOpacity
          key={item.id}
          style={style.card}
          onPress={() =>
            navigation.navigate('ListProduk', {
              kategori: item.name,
            })
          }>
          <Image
            source={item.image}
            style={{width: '100%', height: 200, borderRadius: 15}}
          />
          <Text
            style={{
              marginTop: 10,
              paddingBottom: 5,
              fontSize: 18,
              color: '#000',
              textAlign: 'center',
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 20,
    marginBottom: 20,
    elevation: 2,
  },
});

export default Browse;
