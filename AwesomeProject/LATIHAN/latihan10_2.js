import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class latihan10_2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data_kontak: [],
    };
  }

  getDataKontak() {
    this.setState({isLoading: true});
    fetch('http://192.168.1.2:8000/kontak')
      .then(response => response.json())
      .then(res => {
        this.setState({
          data_kontak: res,
          isLoading: false,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getDataKontak();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbarContainer}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
            }}>
            Daftar Kontak
          </Text>
          <TouchableOpacity>
            <Ionicons size={24} color="white" name="md-add" />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10}}>
          {this.state.isLoading ? (
            <ActivityIndicator color="f5365c" size={30} />
          ) : null}
          <FlatList
            data={this.state.data_kontak}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <TouchableOpacity style={styles.itemList} key={index}>
                <View style={styles.avatarContainer}>
                  <Text style={{fontSize: 18, color: 'white'}}>
                    {item.nama_depan[0]}
                  </Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{fontSize: 16}}>
                    {item.nama_depan} {item.nama_belakang}
                  </Text>
                  <Text style={{color: '#999', fontSize: 11}}>
                    {item.email}
                  </Text>
                  <Text style={{color: '#999', fontSize: 11}}>
                    {item.nomor_hp}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
}

export default latihan10_2;

const styles = StyleSheet.create({
  itemList: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toolbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    height: 56,
    backgroundColor: '#f5365c',
    width: '100%',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fb6340',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
});
