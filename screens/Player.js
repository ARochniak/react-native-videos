import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { connect } from 'react-redux';
import VideoPlayer from 'react-native-video-player';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    flex:0, 
    alignItems: 'flex-start'
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center'
  }
});

function LinksScreen (props) {
	return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
      <Icon.Button
        name="angle-left"
        size={30}
        backgroundColor="#3b5998"
        onPress={Actions.list}
      > back
      </Icon.Button>
      </View>
      <View style={styles.videoContainer}>
        <VideoPlayer
          video={props.list[props.curentVideo].file}
        />
      </View>
    </View>
  )
}

function mapStateToProps (state) {
  return ({
    list: state.videoList,
    curentVideo: state.curentVideo
  })
}

export default connect(mapStateToProps)(LinksScreen);