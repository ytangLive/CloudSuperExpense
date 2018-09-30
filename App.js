/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import {Scene, Router, Actions, Reducer, ActionConst, Modal, Stack, Lightbox} from "react-native-router-flux"
import {Provider, connect} from 'react-redux'
import store from './src/store'
import actionType from './src/utils/config/actionType'
import {dispatch} from './src/utils/venilog/dispatchLog'

import TabBar from './src/components/base/TabBarContainer'
import HomeDetail from './src/pages/home/homeDetail'

// const reducerCreate = params => {
//   const defaultReducer = new Reducer(params)
//   return (state, action) => {
//     action.type !== actionType.REACT_NATIVE_ROUTER_FLUX_SET_PARAMS ? dispatch(state)(action) : null
//     return defaultReducer(state, action)
//   }
// }

const getSceneStyle = () => ({
  backgroundColor: 'white',
  shadowOpacity : 1,
  shadowRadius : 3
})


const scenes = Actions.create(
  <Scene key="root">
    <Modal key="modal" hideNavBar>
       {/* 用于将组件渲染在当前Scene的组件上，多用于Loading、弹框等 */}
      <Lightbox key="lightbox" hideNavBar={true}>
        <Stack key="init">
          <Scene key="main" initial back={false} hideNavBar component={TabBar}/>
          <Scene key="homeDetail" hideNavBar component={HomeDetail}/>
        </Stack>
      </Lightbox>
    </Modal>
  </Scene>
)

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Router
          scenes={scenes}
          getSceneStyle={getSceneStyle}
        />
      </View>
    )
  }
}

const initApp = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

export default initApp