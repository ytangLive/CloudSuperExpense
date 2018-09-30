/**
 * Created by ytang on 2018/9/11.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Icon} from '../../utils/icon'
import commonStyle from '../../utils/commonStyle'

const barBtnWidth = 40
const defaultNavigationBarProps = {
    hiddenNav : false,
    hiddenLeftItem : false,
    hiddenRightItem : false
}

/**
 * NavigationBar 配置项
 * @type {{navigationBarProps: (*), onLeftPress: *, onRightPress: *, hiddenNav: (*), navBarStyle, navContentStyle, hiddenLeftItem: (*), leftIcon, leftTitle, leftTitleStyle, leftItemStyle, titleStyle, title, subTitleStyle, subTitle, hiddenRightItem: (*), rightIcon, rightTitle, rightTitleStyle, rightItemStyle}}
 */
 const navBarConfig = {
    navigationBarProps : PropTypes.Object,
    onLeftPress: PropTypes.fun,
    onRightPress: PropTypes.fun,
    hiddenNav: PropTypes.bool,
    navBarStyle: PropTypes.Object,
    navContentStyle: PropTypes.Object,
    hiddenLeftItem: PropTypes.bool,
    leftIcon: PropTypes.Object,
    leftTitle: PropTypes.string,
    leftTitleStyle: PropTypes.Object,
    leftItemStyle: PropTypes.Object,
    titleStyle: PropTypes.Object,
    title: PropTypes.string,
    subTitleStyle: PropTypes.Object,
    subTitle: PropTypes.string,
    hiddenRightItem: PropTypes.bool,
    rightIcon: PropTypes.Object,
    rightTitle: PropTypes.string,
    rightTitleStyle: PropTypes.Object,
    rightItemStyle: PropTypes.Object
 }


export default class NavigationBar extends Component {

    constructor(props){
        super(props)
        this.navigationBarProps = Object.assign({}, defaultNavigationBarProps, props.navigationBarProps);
    }

    componentWillReceiveProps(nextProps){
        this.navigationBarProps = Object.assign({}, defaultNavigationBarProps, nextProps.navigationBarProps);
    }

    renderLeftItem(){
        let leftComponent
        if(this.navigationBarProps.hiddenLeftItem){
            return <View style={{width: barBtnWidth}} />
        }

        const {onLeftPress} = this.props
        if(this.navigationBarProps.leftIcon){
            let icon = this.navigationBarProps.leftIcon
            leftComponent = (
               <Icon name={`YIcon|${icon.name}`} size={icon.size} color={icon.color}/>
            )
        }else if (this.navigationBarProps.leftTitle && this.navigationBarProps.leftTitle !== '') {
            leftComponent = (
                <Text numberOfLines={1} style={[styles.leftTitleStyle, this.navigationBarProps.leftTitleStyle]} >
                   {this.navigationBarProps.leftTitle}
                </Text>
            )
        }else{
            leftComponent = (
                <Icon name={'YIcon|nav_back_o'} size={20} color={commonStyle.iconGray}/>
            )
        }

        return (
            <TouchableOpacity 
               style={[styles.leftItemStyle, this.navigationBarProps.leftItemStyle]}
               onPress={onLeftPress}>
                {leftComponent}
            </TouchableOpacity>
        )
    }

    renderTitle(){
        return (
           <View style={styles.titleContainer}>
               <Text style={[styles.titleStyle, this.navigationBarProps.titleStyle]}>
                   {this.navigationBarProps.title}
               </Text>
               {
                   this.navigationBarProps.subTitle ?  
                   <Text style={[styles.subTitleStyle, this.navigationBarProps.subTitleStyle]}>
                      {this.navigationBarProps.subTitle}
                   </Text> : null
               }
           </View>
        )
    }

    renderRightItem(){
        let rightComponent
        if(this.navigationBarProps.hiddenRightItem){
            return <View style={{width: barBtnWidth}}/>
        }

        const {onRightPress} = this.props
        if(this.navigationBarProps.rightIcon){
            let icon = this.navigationBarProps.rightIcon
            tempComponent = (
                <Icon name={`oneIcon|${icon.name}`} size={icon.size} color={icon.color}/>
            )
        }else if(this.navigationBarProps.rightTitle && this.navigationBarProps.rightTitle !== ''){
            tempComponent = (
                <Text numberOfLines={1} style={[styles.rightTitleStyle, this.navigationBarProps.rightTitleStyle]}>
                   {this.navigationBarProps.rightTitle}
                </Text>
            )
        }else{
            return <View style={{width: barBtnWidth}}/>
        }
    }


    render(){
        if(this.navigationBarProps.hiddenNav){
            return <View/>
        }

        return (
           <View style={[styles.navBarStyle, this.navigationBarProps.navBarStyle]}>
               <View style={[styles.navContentStyle, this.navigationBarProps.navContentStyle]}>
                  { this.renderLeftItem() }
                  { this.renderTitle() }
                  { this.renderRightItem() }
               </View>
           </View>
        )

    }
}

const styles = StyleSheet.create({
    navBarStyle: {
        height: commonStyle.navHeight,
        backgroundColor: commonStyle.navThemeColor,
        borderBottomWidth: 0.5,
        borderBottomColor: commonStyle.navBottomColor
    },
    navContentStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: commonStyle.navStatusBarHeight,
        height: commonStyle.navContentHeight,
        marginHorizontal:10
    },
    leftItemStyle: {
        justifyContent: 'center',
        width: barBtnWidth
    },
    leftTitleStyle: {
        fontSize:15,
        color: commonStyle.navLeftTitleColor
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    titleStyle: {
        fontSize: 17,
        color: commonStyle.navTitleColor,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    subTitleStyle: {
        fontSize: 11,
        marginTop: 5
    },
    rightItemStyle: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: barBtnWidth
    },
    rightTitleStyle: {
        fontSize:15,
        color: commonStyle.navRightTitleColor
    }
})