import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 10,
    padding: 10,
    
  },
  text: {
    color: 'rgba(0,0,0,0.4)',
    fontSize: 30,
    marginLeft: 10
  }
});

function HomeScreen(props) {
  const listToData = () => {
    return props.list.map((video, idx) => ({key: video.name,idx}));
  }
  const onPressHandle = (idx) => {
    props.dispatch({type: 'SELECT_VIDEO', idx});
    setTimeout(Actions.player, 0)
  }
  const renderItems = (item) => (
    <TouchableHighlight 
      key={item.idx}
      style={styles.item}
      onPress={()=>{onPressHandle(item.idx)}}
      underlayColor="rgba(0,0,0,0.1)">
      <Text style={styles.text}>{item.key}</Text>
    </TouchableHighlight>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={listToData()}
        renderItem={
          ({item}) => renderItems(item)
        }
      />
    </View>
  );
}

function mapStateToProps (state) {
  return ({
    list: state.videoList
  })
}

export default connect(mapStateToProps)(HomeScreen);