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
                   title="电影"
                   titleStyle={styles.tabText}
                   selectedTitleStyle={styles.selectedTabText}
                   renderIcon={() => <Icon name={'YIcon|se_home'} size={20} color={commonStyle.textGrayColor}/>}
                   renderSelectedIcon={() => <Icon name={'YIcon|se_home'} size={20} color={commonStyle.black}/>}
                   onPress={() => this.setState({selectedTab : 'Home'})}
                 >
                 <HomePage/>
                 </TabNavigator.Item>

                 <TabNavigator.Item />

                 <TabNavigator.Item 
                   selected={this.state.selectedTab === 'Home1'}
                   title="电影"
                   titleStyle={styles.tabText}
                   selectedTitleStyle={styles.selectedTabText}
                   renderIcon={() => <Icon name={'YIcon|se_home'} size={20} color={commonStyle.textGrayColor}/>}
                   renderSelectedIcon={() => <Icon name={'YIcon|se_home'} size={20} color={commonStyle.black}/>}
                   onPress={() => this.setState({selectedTab : 'Home1'})}
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
        marginBottom: 5
    },
    selectedTabText: {
        fontSize: 11,
        color: commonStyle.black,
        marginBottom: 5
    }
})