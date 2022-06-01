import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

export class latihan10_2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data_kontak: [],
      show_modal: false,
      nama_depan: '',
      nama_belakang: '',
      nomor_hp: '',
      email: '',
    };
  }

  simpanData = () => {
    axios
      .post('http://192.168.1.2:8000/kontak', {
        nama_depan: this.state.nama_depan,
        nama_belakang: this.state.nama_belakang,
        nomor_hp: this.state.nomor_hp,
        email: this.state.email,
      })
      .then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        },
      );
    this.getDataKontak();
  };

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
          <TouchableOpacity onPress={() => this.setState({show_modal: true})}>
            <Ionicons size={24} color="white" name="md-add" />
          </TouchableOpacity>
        </View>

        <Modal visible={this.state.show_modal} animationType="slide">
          <View style={styles.toolbarContainer}>
            <Text style={{color: 'white'}}>Tambah Kontak</Text>
            <TouchableOpacity
              onPress={() => this.setState({show_modal: false})}>
              <Text style={{color: 'white'}}>Tutup</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={{marginTop: 50, marginHorizontal: 15}}>
            <TextInput
              style={styles.textInput}
              placeholder="Nama Depan"
              onChangeText={nama_depan => this.setState({nama_depan})}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Nama Belakang"
              onChangeText={nama_belakang => this.setState({nama_belakang})}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Nomor Hp"
              onChangeText={nomor_hp => this.setState({nomor_hp})}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              onChangeText={email => this.setState({email})}
            />

            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15,
                backgroundColor: '#f5365c',
                marginHorizontal: 8,
                paddingVertical: 10,
              }}
              onPress={this.simpanData.bind(this)}>
              <Text style={{color: 'white'}}>Simpan</Text>
            </TouchableOpacity>
          </ScrollView>
        </Modal>

        <SafeAreaView style={{marginTop: 10, flex: 1}}>
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
        </SafeAreaView>
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
  textInput: {
    backgroundColor: '#fafafa',
    marginBottom: 10,
    paddingLeft: 12,
  },
});
