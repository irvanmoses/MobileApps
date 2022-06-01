import React, {useEffect, useRef} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';

const latihan9_2 = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>AnimExp</Text>
      <Animated.View style={[{opacity: fadeAnim}, styles.views]}>
        <View>
          <Text style={styles.text}>Hello World</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default latihan9_2;

const styles = StyleSheet.create({
  views: {
    width: 250,
    height: 'auto',
    backgroundColor: 'powderblue',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
});
