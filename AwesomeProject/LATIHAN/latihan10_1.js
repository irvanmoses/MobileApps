import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';

export default class latihan10_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
      height: 400,
      images: [],
    };
  }

  resizeImageKeepAspectRatio = (e, i) => {
    let widthScreen = Dimensions.get('window').width;
    let widthOrigin = e.nativeEvent.source.width;
    let heightOrigin = e.nativeEvent.source.height;
    let aspectRatio = widthOrigin / heightOrigin;
    var items = this.state.images;
    items[i].width = widthScreen;
    items[i].height = widthScreen / aspectRatio;
    this.setState({
      images: items,
    });
  };

  getDataImages() {
    fetch('http://192.168.1.2:8000/data')
      .then(response => response.json())
      .then(res => {
        console.log(res);
        this.setState({
          images: res,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getDataImages();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.images.map((item, index) => {
          return (
            <Image
              key={index}
              onLoad={e => this.resizeImageKeepAspectRatio(e, index)}
              style={{width: item.width, height: item.height}}
              source={{uri: 'http://192.168.1.2:8000/images/' + item.image}}
            />
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
