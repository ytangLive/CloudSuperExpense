/**
 * Created by ytang on 2018/9/10.
 */

 import React, {Component} from 'react'
 import PropTypes from 'prop-types'
 import FontAwesome from 'react-native-vector-icons/FontAwesome'
 import {IconFont} from './IconFont'

const iconMap = {
    fontAwesome: FontAwesome,
    YIcon: IconFont
}

class Icon extends Component {
    render(){
        const {name ,size, color} = this.props
        if (!name.includes('|')) {
            throw new Error('name 解析错误！')
        }
        let nameArr = name.split('|')
        let fontlib = nameArr[0]
        let font = nameArr[1]
        let CustomIcon = iconMap[fontlib]
        if (!CustomIcon) throw new Error('没有找到匹配的font库！')

        return (
            <CustomIcon name={font} size={size} color={color}/>
        )
    }
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
}

export {Icon}