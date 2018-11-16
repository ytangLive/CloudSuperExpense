/**
 * Created by ytang on 2018/9/25.
 */

import React, { Component } from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'
import {Icon} from '../../utils/icon'
import deviceInfo from '../../utils/deviceInfo'
import commonStyle from '../../utils/commonStyle'

const ButtonWidth  = 50

export default  class TabBarCustomButton extends Component {

    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Icon name={'YIcon|se_addition_fill'} size={ButtonWidth} color={commonStyle.tabBarBottomBtnColor}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: ButtonWidth,
        height: ButtonWidth,
        position: 'absolute',
        left : deviceInfo.deviceWidth/2 - ButtonWidth/2,
        bottom : deviceInfo.isIphoneX ? 36 : 2
    }
})
