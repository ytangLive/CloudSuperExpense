/**
 * Created by ytang on 2018/9/19.
 */

import React, {Component} from 'react'
import {View, ListView,Image, Text,ScrollView, TouchableOpacity,  StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux'
import {commonStyle} from '../../utils'
import HomeListCell from './homeCell/homeListCell'
import {Icon} from '../../utils/icon'

const HeaderItemWidth = 80

export default class HomeListView extends Component {

    constructor(props){
        super(props)
        this.renderHeader = this.renderHeader.bind(this)
        this.renderRow = this.renderRow.bind(this)
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
        }
    }

    renderAttentionList(){
        return this.props.attentionDatas.map((item, index) => (
             <TouchableOpacity 
                 style={styles.headerItem} 
                 key={index}
                 onPress={() => Actions.homeDetail()}
             >
                <Image style={styles.headerItemImage} source={{uri: item.image}}/>
                <Text style={styles.headerItemTitle} numberOfLines={1}>{item.title}</Text>
                <View style={styles.headerItemFavorite}>
                   <Text style={styles.headerFavoriteTitle}>{`${item.wantedCount}人想看`}</Text>
                   <Icon name={'YIcon|love_o'} size={15} color={'#F86728'}/>
                </View>
             </TouchableOpacity>
        ))
    }

    renderHeader(){
        return (
            <ScrollView 
               style={styles.headerScroll}
               horizontal={true}
               removeClippedSubviews={true}
               showsHorizontalScrollIndicator={false}>
                {this.renderAttentionList()}
            </ScrollView>
        )
    }

    renderRow(rowData, sectionId, rowId){
        return(
           <HomeListCell key={rowId} rowData={rowData}/>
        )
    }

    render(){
        let dataSource = this.state.dataSource.cloneWithRows(this.props.homeDatas)
        return (
            <ListView style={styles.content}
              renderHeader={this.renderHeader}
              renderRow={this.renderRow}
              enableEmptySections
              dataSource={dataSource}
            />
        )
    }

}

const styles = StyleSheet.create({
    content: {
        backgroundColor: commonStyle.white
    },
     headerScroll: {
        height: 160,
        margin: 10,
        marginLeft: 0
    },
    headerItem: {
        marginLeft: 10,
        width: HeaderItemWidth
    },
    headerItemImage: {
        width: HeaderItemWidth,
        height: 120
    },
    headerItemTitle: {
        fontSize: 12,
        marginVertical: 6,
        color: commonStyle.textBlackColor
    },
    headerItemFavorite: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerFavoriteTitle:{
        fontSize: 11,
        color: commonStyle.textGrayColor
    }
})