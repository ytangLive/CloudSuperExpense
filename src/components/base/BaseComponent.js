/**
 * Created by ytang on 2018/9/11.
 */

import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'

import commonStyle from '../../utils/commonStyle'
import NavigationBar from './NavigationBar'
import { Actions } from 'react-native-router-flux';

class BaseComponent extends Component {

    constructor(props){
        super(props)
        this.navigationBarProps = this.navigationBarProps.bind(this)
        this._render = this._render.bind(this)
        this.onLeftPress = this.onLeftPress.bind(this)
        this.onRightPress = this.onRightPress.bind(this)
    }

    navigationBarProps(){
        return {
            title: null
        }
    }

    superFunc(data) {
        alert(`在子类中调用了父类的函数，${data}`)
    }

    renderNavigationBar(){
        let navigationBarProps = this.navigationBarProps()
        Object.assign(navigationBarProps, this.props)
        return (
            <NavigationBar 
               navigationBarProps={navigationBarProps}
               onLeftPress={this.onLeftPress}
               onRightPress={this.onRightPress}
            />
        )
    }

    onLeftPress(){
        Actions.pop()
    }

    onRightPress(){
        return null
    }

    _render(){
        return null
    }

    render(){
        return (
            <View style={styles.container}>
               {this.renderNavigationBar()}
               {this._render()}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: commonStyle.white
    }
})


export {BaseComponent}