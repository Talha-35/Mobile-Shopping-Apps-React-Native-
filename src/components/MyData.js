import React from 'react';
import {Image, Text, View, StyleSheet, Dimensions} from 'react-native';

const MyData = ({data}) => {
  function myFunction() {
    if (data.inStock) {
      return <Text>Mevcuttur</Text>;
    } else {
      return <Text style={styles.text4}>Stokta yok</Text>;
    }
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: data.imgURL}} style={styles.image} />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <Text style={styles.text1}>{data.title}</Text>
        <Text style={styles.text2}>{data.price}</Text>
        <Text style={styles.text3}>{myFunction()}</Text>
      </View>
    </View>
  );
};

export default MyData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: Dimensions.get('window').width,
    // justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#c4c4c4',
    margin: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#eceff1',
  },
  text1: {
    //   fontWeight: 'bold',
    fontSize: 15,
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  text3: {
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf : "flex-end"
  },
  text4: {
    color : 'red',
    textDecorationLine :"line-through"
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
  },
});
