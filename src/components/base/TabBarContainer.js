/**
 * Created by ytang on 2018/9/10.
 */

import React, {Component} from 'react'
import {StyleSheet, View, Image} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import commonStyle from '../../utils/commonStyle'
import deviceInfo from '../../utils/deviceInfo'
import {Icon} from '../../utils'

import TabBarCustomButton from './TabBarCustomButton'
import HomePage from '../../pages/home'

export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home'
        }
    }

    render(){
        return (
           <View style={styles.container}>
              <TabNavigator tabBarStyle={styles.tabBarStyle}>
                 <TabNavigator.Item 
                   selected={this.state.selectedTab === 'Home'}
                   title="账单"
                   titleStyle={styles.tabText}
                   selectedTitleStyle={styles.selectedTabText}
                   renderIcon={() => <Icon name={'YIcon|se_activity'} size={28} color={commonStyle.textGrayColor}/>}
                   renderSelectedIcon={() => <Icon name={'YIcon|se_activity'} size={28} color={commonStyle.tabBarBottomBtnColor}/>}
                   onPress={() => this.setState({selectedTab : 'Home'})}
                 >
                 <HomePage/>
                 </TabNavigator.Item>

                 <TabNavigator.Item />

                 <TabNavigator.Item 
                   selected={this.state.selectedTab === 'Me'}
                   title="我的"
                   titleStyle={styles.tabText}
                   selectedTitleStyle={styles.selectedTabText}
                   renderIcon={() => <Icon name={'YIcon|se_people'} size={30} color={commonStyle.textGrayColor}/>}
                   renderSelectedIcon={() => <Icon name={'YIcon|se_people_fill'} size={30} color={commonStyle.tabBarBottomBtnColor}/>}
                   onPress={() => this.setState({selectedTab : 'Me'})}
                 >
                 <HomePage/>
                 </TabNavigator.Item>
              </TabNavigator>
              <TabBarCustomButton />
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabBarStyle: {
        height: commonStyle.tabBarHeight
    },
    tabText: {
        fontSize: 11,
        color: commonStyle.textGrayColor,
        marginTop: 0,
        marginBottom: 3
    },
    selectedTabText: {
        fontSize: 11,
        color: commonStyle.tabBarBottomBtnColor,
        marginTop: 0,
        marginBottom: 3
    }
})