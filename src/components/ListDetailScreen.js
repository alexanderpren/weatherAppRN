import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {Round} from '../utils/tools';
import ListItem from './ListItem';

const ListDetailScreen = ({navigation}) => {
  const {weatherData} = useSelector(state => state.weather);
  const [array, setArray] = useState([]);
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);

  const getData = () => {
    const end = counter + 10;
    if (end <= data.length) {
      const slice = data.slice(counter, end);
      setArray([...array, ...slice]);
      setCounter(end);
    }
  };

  useEffect(() => {
    setData(weatherData);
    const end = counter + 15;
    const slice = weatherData.slice(counter, end);
    setArray(slice);
    setCounter(end);
  }, []);

  return (
    <FlatList
      data={array}
      keyExtractor={(item, index) => index.toString()}
      onEndReached={getData}
      renderItem={({item, index}) => (
        <ListItem
          weatherName={item.weather?.[0].main}
          temp={Round(item.main?.temp)}
          onPress={() => navigation.navigate('DetailWeather', {_id: index})}
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default ListDetailScreen;
