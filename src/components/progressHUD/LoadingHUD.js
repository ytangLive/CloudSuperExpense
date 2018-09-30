/**
 * Created by ytang on 2018/9/18.
 */

import React, {Component} from 'react'
import {View, StyleSheet, ActivityIndicator} from 'react-native'
import {Actions} from 'react-native-router-flux'
import {deviceInfo} from '../../utils'

export default class LoadingHUD extends Component {

    render(){
        return(
            <View style={styles.maskStyle}>
               <View style={styles.backViewStyle}>
                  <ActivityIndicator size="large" color='white' />
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    maskStyle: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: deviceInfo.deviceWidth,
        height: deviceInfo.deviceHeight,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backViewStyle: {
        backgroundColor: '#111',
        width: 120,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    }
})