import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';

import produk from './data/produk';

const ListProduk = ({route, navigation}) => {
  const {kategori} = route.params;
  const data = produk;

  return (
    <View>
      <Text>Hello World</Text>
      {data.map(x => (
        <View key={x.id}>
          <Text>{x.kategori}</Text>
        </View>
      ))}
    </View>
  );
};

export default ListProduk;
