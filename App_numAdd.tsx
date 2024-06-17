import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from './page/components/Header';
import Generator from './page/components/Generator';
import NumList from './page/components/NumList';

const App = () => {
  const [mainTitle, setMainTitle] = useState('my world');
  const [random, setRandom] = useState([]);

  const pressView = () => {
    alert('view');
  };
  const onAddRandom = () => {
    // Alert.alert('add');
    const randomNum = Math.floor(Math.random() * 100) + 1; // 0~1사이 값이 나오니까 0.111.. 이런식으로나오는건데, *100하고 +1해서 1~100사이의 숫자를 구함
    // alert(randomNum);
    setRandom(prevRandom => [...prevRandom, randomNum]);
  };

  const listDeleteNum = delNum => {
    // alert(num);
    const newArray = random.filter((num, index) => {
      return delNum != index;
    });
    setRandom(newArray);
  };
  const onChangeText = text => {
    console.log(text);
  };
  return (
    //View가 div? Text가 span태그?
    <View style={styles.container}>
      <Header title={mainTitle} onPressView={pressView} />

      {/* <View style={styles.btnCon}>
        <Button title="test" />
        <Button title="test" />
      </View>
      <Text>App</Text> */}
      <View style={styles.inputWrap}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          //  maxLength={3}
          // multiline={true} // 엔터 사용 가능하도록 해주는 기능
          returnKeyType="done"
        />
      </View>
      <Generator add={onAddRandom} />
      <ScrollView>
        <NumList data={random} listDelete={listDeleteNum} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },

  btnCon: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  inputWrap: {
    width: '100%',
    // backgroundColor: '#efefef',
    paddingHorizontal: 16,
    marginTop: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#efefef',
    borderRadius: 10,
    paddingHorizontal: 16,
  },
});
export default App;
