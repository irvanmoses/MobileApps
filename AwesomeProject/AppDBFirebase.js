import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import database from '@react-native-firebase/database';

const AppDBFirebase = () => {
  const writeData = () => {
    database()
      .ref('/users/1')
      .set({
        name: 'Ada Lovelace',
        age: 31,
      })
      .then(() => console.log('Data set.'));
  };

  return (
    <View>
      <Text>AppDBFirebase</Text>

      <Button title="Write Data" onPress={writeData} />
    </View>
  );
};

export default AppDBFirebase;
