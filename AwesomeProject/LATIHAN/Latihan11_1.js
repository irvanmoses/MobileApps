import {
  Text,
  View,
  Button,
  Alert,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import database from '@react-native-firebase/database';

const styles = StyleSheet.create({
  input: {borderWidth: 2, borderColor: 'black', margin: 5, borderRadius: 5},
  footer: {fontSize: 16, textAlign: 'center', marginVertical: 5},
});

export default class Test extends Component {
  constructor(props) {
    super();
    this.state = {
      KodeBarang: '',
      MerkBarang: '',
      HargaBarang: 0,
      JumlahBarang: 0,
      DataBarang: [],
    };
  }

  componentDidMount() {
    database()
      .ref('/Akseoris')
      .on('value', snapshot => {
        console.log('Data : ', snapshot.val());
        const data = [];
        snapshot.forEach(childSnapshot => {
          const childkey = childSnapshot.key;
          const childData = childSnapshot.val();
          data.push(childData);
        });
        this.setState({DataBarang: data});
        console.log(this.state.DataBarang);
      });
  }

  TambahData() {
    const id = 'BRG' + Date.now();
    database()
      .ref('/Akseoris/' + id)
      .set({
        KodeBarang: id,
        MerkBarang: this.state.MerkBarang,
        HargaBarang: this.state.HargaBarang,
        JumlahBarang: this.state.JumlahBarang,
      })
      .then(() => {
        Alert.alert('Info', 'Berhasil Menambahkan Barang!', [{text: 'OK'}]);
      })
      .catch(e => console.log(e));

    console.log('Hi');
  }

  DeleteData({item}) {
    Alert.alert('Konfirmasi', `Hapus Barang ${item.MerkBarang}?`, [
      {
        text: 'Ya',
        onPress: () =>
          database()
            .ref('/Akseoris/' + item.KodeBarang)
            .remove()
            .then(() => {
              Alert.alert('Info', 'Berhasil Dihapus!', [{text: 'OK'}]);
              componentDidMount();
            })
            .catch(e => console.log(e)),
      },
      {text: 'Batal', onPress: () => console.log('Batal')},
    ]);
  }

  render() {
    return (
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            margin: 5,
            fontWeight: 'bold',
          }}>
          Daendel's Accessories Stock
        </Text>
        <Text style={{marginLeft: 10}}>'Silahkan kelola barang '</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Merk Barang"
          onChangeText={value => this.setState({MerkBarang: value})}
        />
        <TextInput
          style={styles.input}
          placeholder="Masukkan Harga Barang"
          onChangeText={value => this.setState({HargaBarang: value})}
        />
        <TextInput
          style={styles.input}
          placeholder="Masukkan Jumlah Barang"
          keyboardType="number-pad"
          onChangeText={value => this.setState({JumlahBarang: value})}
        />
        <View style={{margin: 10}}>
          <Button title="Tambah" onPress={this.TambahData.bind(this)} />
        </View>

        <FlatList
          data={this.state.DataBarang}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                margin: 5,
                borderWidth: 2,
                borderColor: 'blue',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  borderWidth: 2,
                  borderColor: 'blue',
                }}>
                <Text style={{margin: 5}}>{item.KodeBarang}</Text>
                <TouchableOpacity
                  onPress={this.DeleteData.bind(this, {item})}
                  style={{
                    borderWidth: 2,
                    borderRadius: 5,
                    margin: 3,
                    backgroundColor: '#f47c7c',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                    }}>
                    Hapus
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'column', marginLeft: 10}}>
                <Text>Merk : {item.MerkBarang}</Text>
                <Text>Harga : {item.HargaBarang}</Text>
                <Text>Jumlah : {item.JumlahBarang}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.KodeBarang}
        />
      </View>
    );
  }
}
