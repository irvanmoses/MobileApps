import React, {useState} from 'react';
import {
  View,
  Text,
  LayoutAnimation,
  Platform,
  StyleSheet,
  TouchableOpacity,
  UIManager,
} from 'react-native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const latihan9_3 = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
          setExpanded(!expanded);
        }}>
        <Text style={{fontSize: 18}}>
          Press me to {expanded ? 'collapse' : 'expand'}!
        </Text>
      </TouchableOpacity>
      {expanded && (
        <View>
          <Text style={styles.title}>I disappear sometimes!</Text>
        </View>
      )}
    </View>
  );
};

export default latihan9_3;

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'lightgrey',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
