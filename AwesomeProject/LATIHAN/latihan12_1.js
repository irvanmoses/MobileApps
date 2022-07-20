import {Text, View, PermissionsAndroid} from 'react-native';
import React, {Component} from 'react';
import Geolocation from 'react-native-geolocation-service';

export default class latihan12_1 extends Component {
  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Izinkan mengambil lokasi?',
          message: 'Izinkan mengambil data lokasi untuk kebutuhan lanjutan?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  componentDidMount() {
    this.requestLocationPermission();
  }

  render() {
    return (
      <View>
        <Text>latihan12_1</Text>
      </View>
    );
  }
}
