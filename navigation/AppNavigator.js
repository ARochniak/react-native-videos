import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Scene,
  Router,
  Tabs,
  Stack
} from 'react-native-router-flux';
import { connect } from 'react-redux';
import List from '../screens/List';
import Player from '../screens/Player';

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#eee'
  },
  tabBarLabel: {
    fontSize: 20, 
    padding:10
  },
  playerTitle: {
    fontSize: 25,
    flex: 1,
    textAlign: 'center'
  },
  listTitle: {
    fontSize: 20
  }
});

const AppNavigator = (props) => (
  <Router>
          <Stack key="root" hideNavBar>
              <Scene hideNavBar>
                <Tabs
                  key="tabbar"
                  labelStyle={styles.tabBarLabel}
                  backToInitial
                  swipeEnabled
                  tabBarStyle={styles.tabBar}
                  activeBackgroundColor="white"
                  inactiveBackgroundColor="rgba(0, 0, 0, 0.1)">
                  <Scene
                    key="list"
                    component={List}
                    title="Choose the video from the list:"
                    titleStyle={styles.listTitle}
                    tabBarLabel="Playlist"
                  />
                  <Scene
                    key="player"
                    component={Player}
                    title={props.list[props.curentVideo].name}
                    titleStyle={styles.playerTitle}
                    tabBarLabel="Player"
                  />
                </Tabs>
              </Scene>
          </Stack>
  </Router>
);

function mapStateToProps (state) {
  return ({
    list: state.videoList,
    curentVideo: state.curentVideo
  })
}

export default connect(mapStateToProps)(AppNavigator);