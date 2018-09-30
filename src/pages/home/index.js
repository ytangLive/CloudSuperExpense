/**
 * Created by ytang on 2018/9/10.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import Action from '../../actions'
import {BaseComponent} from '../../components/base/BaseComponent'
import {View} from 'react-native'

import HomeListView from './homeListView'

class Home extends BaseComponent {

    constructor(props){
         super(props)
         this.state = {
            refreshing: false,
            hasMore: true,
            showTimeList: [],
            comeingNewList: [],
            attentionList: []
         }
     }

    componentDidMount() {
        Promise.all([this.props.getMovieShowTimeList(), this.props.getMovieComeingNewList()]).then(response => {
            this.setState({
                showTimeList: response[0].value.ms,
                comeingNewList: response[1].value.moviecomings,
                attentionList: response[1].value.attention,
            })
        })
     }

    navigationBarProps(){
        return {
            title: '即将上映',
            hiddenLeftItem: true
        }
    }

    _render() {
        return (
            <View></View>
            // <HomeListView homeDatas={this.state.comeingNewList} attentionDatas={this.state.attentionList}/>
        )
     }
 }

const homeMain = connect(
     (state) => state.home.homeList, 
     Action.dispatch('home'))(Home)

export default homeMain