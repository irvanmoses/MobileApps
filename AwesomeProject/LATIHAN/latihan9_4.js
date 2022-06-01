import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';

const latihan9_4 = () => {
  const [progress, setProgress] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.example}>
        <Button
          onPress={() => setProgress(progress + 0.1)}
          title="Tambah Progress"
        />
        <Text>Klik untuk menambah progress</Text>
        <ProgressBar
          styleAttr="Horizontal"
          indeterminate={false}
          progress={progress}
        />
      </View>
    </View>
  );
};

export default latihan9_4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  example: {
    marginVertical: 24,
  },
});
