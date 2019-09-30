import { View, Platform, StatusBar, StyleSheet  } from 'react-native';
import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import AppNavigator from './navigation/AppNavigator';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const initialState = {
  videoList: [
    {
      name: 'Cats',
      file: require('./assets/videos/cats.mp4')
    },
    {
      name: 'Dogs',
      file: require('./assets/videos/dogs.mp4')
    },
    {
      name: 'Pandas',
      file: require('./assets/videos/pandas.mp4')
    }
  ],
  curentVideo: 0
}

const store = createStore(reducer, initialState);

export default function App (props) {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      </Provider>)
}