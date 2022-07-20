import {Text, View, PermissionsAndroid} from 'react-native';
import React, {Component} from 'react';
import Geolocation from 'react-native-geolocation-service';

export default class latihan12_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLoc: '',
    };
  }

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
        Geolocation.getCurrentPosition(
          pos => {
            console.log(pos);
            let data = JSON.stringify(pos);
            this.setState({currentLoc: data});
          },
          err => {
            console.log(err.code, err.message);
          },
          {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 10000,
          },
          e => alert('Posisi tidak ditemukan! ', console.log(e)),
          {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000,
          },
        );
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
        <Text style={{textAlign: 'center', fontSize: 20}}>
          Current Location Info
        </Text>

        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 20, textAlign: 'justify'}}>
            {this.state.currentLoc}
          </Text>
        </View>
      </View>
    );
  }
}
