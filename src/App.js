// Overall - 1
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
  TextInput,
} from 'react-native';

import productData from './product_data.json';
import MyData from './components/MyData';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    Alert.alert('talha shop', 'size iyi alış veriş dileriz');
  }, []);
  // Bu şekilde kullanıcı telefonu açtığında veya sayfaya girdiğinde mesaj çıkar. ensonunda boş kutu koyar iseniz her açılışta yazdırır
  useEffect(() => {
    setDisplayList(productData);
  }, []);

  useEffect(() => {
    const filteredValue = productData.filter((item) => {
      const text = searchValue.toUpperCase();
      const productTitle = item.title.toUpperCase();

      return productTitle.indexOf(text) > -1;
      // yukardaki üç satır bu bir kalıptır.  eksi bir diyerelk yani girilen harf liste de var ise o zamana değeri ger,i dön demektir.
    });
    setDisplayList(filteredValue);
  }, [searchValue]);

  const renderMyData = ({item}) => <MyData data={item} />;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={styles.empty}></View>
        <View style={{flexDirection :"row" , justifyContent :"space-around" ,backgroundColor: '#f06292', }}>
          <Text style={styles.banner1}>📱🛒</Text>
          <Text style={styles.banner}>Dilek Shop</Text>
          <Text style={styles.banner1}>🛒📱</Text>
        </View>
        <View style={styles.empty}></View>
        <View style={styles.search}>
          <TextInput
            onChangeText={(value) => setSearchValue(value)}
            placeholder="aramak istediğiniz ürünü girirniz"
          />
        </View>
        <FlatList
          keyExtractor={(item, index) => item.id.toString()}
          // yukarıdaki ezbere de yazılabilir. liste de ayrıştırma yapabilmek için tek benzersiz bir değer girmek laazım. o yüzden genelde listelere ıd numarası verilir.
          data={displayList}
          renderItem={renderMyData}
          numColumns={2}
          // bu şekilde kolon sayısı ekleyebeilriiz. ama width ayarlamak gerekiyor
          //   ListHeaderComponent={Banner}
          //   ListFooterComponent={Footer}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  banner: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    
    paddingVertical: 10,
  },
  banner1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    alignSelf : "center",
    paddingVertical: 10,
  },
  empty: {
    backgroundColor: 'black',
    paddingVertical: 2,
  },
  search: {
    backgroundColor: '#fce4ec',
    padding: 5,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});
