/**
 * Created by ytang on 2018/9/10.
 */

import {Platform} from 'react-native'
import deviceInfo from './deviceInfo'

/** 公共样式表 **/

export default commonStyle = {
  /** color **/
  // 常用颜色
  red: '#FF0000',
  orange: '#FFA500',
  yellow: '#FFFF00',
  green: '#00FF00',
  cyan: '#00FFFF',
  blue: '#0000FF',
  purple: '#800080',
  black: '#000',
  white: '#FFF',
  gray: '#808080',
  drakGray: '#A9A9A9',
  lightGray: '#D3D3D3',
  tomato: '#FF6347',
  PeachPuff: '#FFDAB9',
  clear: 'transparent',

  /** 主题色 **/
  themeColor: '#e74c3c',
  // 默认灰色字体颜色
  textGrayColor: '#989898',
  // 默认黑色字体颜色
  textBlackColor: '#262626',
  // 默认背景颜色
  bgColor: '#E6E6E6',
  // 默认分割线颜色
  lineColor: '#E6E6E6',
  // 默认placeholder颜色
  placeholderTextColor: '#c8c8cd',
  // borderColor
  borderColor: '#808080',
  // 导航title 颜色
  navTitleColor: '#262626',
  // 导航左item title color
  navLeftTitleColor: '#333',
  // 导航右item title color
  navRightTitleColor: '#333',
  navThemeColor: '#FEFEFE',
  // 导航默认底部分割线颜色
  navBottomColor: '#E6E6E6',
  iconGray: '#989898',
  iconBlack: '#262626',

  /** height **/
  // 导航栏的高度
  navHeight: Platform.OS === 'ios' ? (deviceInfo.isIphoneX ? 88 : 64) : 56,
  // 导航栏顶部的状态栏高度
  navStatusBarHeight: Platform.OS === 'ios' ? (deviceInfo.isIphoneX ? 44 : 20) : 0,
  // 导航栏除掉状态栏的高度
  navContentHeight: Platform.OS === 'ios' ? 44 : 56,
  // tabBar的高度
  tabBarHeight: Platform.OS === 'ios' ? (deviceInfo.isIphoneX ? 83 : 49) : 49

}