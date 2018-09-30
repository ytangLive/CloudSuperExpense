/**
 * Created by ytang on 2018/9/19.
 */

import React, {Component} from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Actions} from 'react-native-router-flux'
import {commonStyle} from '../../../utils'
import {Icon} from '../../../utils/icon'

const imageWidth = 60

export default class homeListCell extends Component {
    
    render() {
        let rowData = this.props.rowData
        return (
            <TouchableOpacity style={styles.container} onPress={() => Actions.homeDetail({id: rowData.id})}>
                <TouchableOpacity style={styles.leftContent}>
                   <Image  style={styles.imageStyle} source={{uri: rowData.image}}/>
                   <View style={{position: 'absolute'}}>
                      <Icon  name={'YIcon|play_cycle_o'} size={25} color={commonStyle.white}/>
                   </View>
                </TouchableOpacity>
                <View style={styles.rightContent}>
                   <View>
                       <Text style={styles.title}>{rowData.title}</Text>
                       <Text numberOfLines={1} style={styles.subTitle}>
                           {`${rowData.wantedCount}`}
                           <Text style={{color: commonStyle.textGrayColor, fontSize: 12}}>人想看</Text>
                           <Text style={{color: commonStyle.textGrayColor, fontSize: 12}}>{` - ${rowData.type}`}</Text>
                       </Text>
                       <Text numberOfLines={1} style={styles.actTitle}>{`${rowData.actor1} / ${rowData.actor2}`}</Text>
                   </View>
                   <View style={{justifyContent: 'space-around'}}>
                       {
                           rowData.isTicket ?
                           <TouchableOpacity style={[styles.rightBtn, {borderColor: '#6EA524'}]}> 
                               <Text style={{paddingVertical: 5, paddingHorizontal: 10, color: '#6EA524', fontSize: 13}}>预售</Text>
                           </TouchableOpacity> :
                           <TouchableOpacity style={[styles.rightBtn, styles.favoriteBtn]}>
                               <Icon name={'YIcon|love_o'} size={15} color={'#F9783F'}/>
                               <Text style={{marginLeft: 3, color: '#F9783F', fontSize: 13}}>想看</Text>
                           </TouchableOpacity>
                       }
                   </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: commonStyle.lineColor,
        marginTop: 10,
        marginLeft: 10,
        paddingBottom: 10
    },
    leftContent: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: commonStyle.clear
    },
    imageStyle: {
        width: imageWidth,
        height: 80
    },
    rightContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        width: deviceInfo.deviceWidth - imageWidth - 50,
        flex: 1
    },
    title:{
        color: commonStyle.textBlackColor,
        fontSize: 15,
        paddingVertical: 6
    },
    subTitle:{
        color: '#F9783F',
        fontSize: 13,
        paddingVertical: 6
    },
    actTitle:{
        color: commonStyle.textGrayColor,
        fontSize: 12,
        paddingVertical: 6
    },
    rightBtn: {
        borderWidth: 1,
        borderRadius: 2
    },
    favoriteBtn: {
        borderColor: '#F9783F', 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center', 
        paddingVertical: 5, 
        paddingHorizontal: 3
    }
})