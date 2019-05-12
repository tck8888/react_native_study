import React, {Component} from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import {
    createAppContainer,
    createBottomTabNavigator
} from "react-navigation";
import {connect} from 'react-redux';


import {
    BottomTabBar
} from 'react-navigation-tabs'

import MyPage from "../page/MyPage";
import FavoritePage from "../page/FavoritePage";
import PopularPage from "../page/PopularPage";
import TrendingPage from "../page/TrendingPage";

import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import NavigationUtil from "./NavigationUtil";

const TABS = {//在这里配置路由的页面
    PopularPage: {
        screen: PopularPage,
        navigationOptions: {
            tabBarLabel: "最热",
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons name={'whatshot'}
                               size={26}
                               style={{color: tintColor}}/>
            )
        }
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel: "趋势",
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons name={'md-trending-up'}
                          size={26}
                          style={{color: tintColor}}/>
            )
        }
    },
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
            tabBarLabel: "收藏",
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons name={'favorite'}
                               size={26}
                               style={{color: tintColor}}/>
            )
        }
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: "我的",
            tabBarIcon: ({tintColor, focused}) => (
                <Entypo name={'user'}
                        size={26}
                        style={{color: tintColor}}/>
            )
        }
    },
}

class DynamicTabNavigator extends Component<Props> {
    constructor(pros) {
        super(pros)
        console.disableYellowBox = true;
    }

    _tabNavigator() {
        if (this.Tabs) {
            return this.Tabs;
        }
        const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
        PopularPage.navigationOptions.tabBarLabel = '最热';//动态配置tab属性
        const tabs = {
            PopularPage, TrendingPage, FavoritePage, MyPage
        };
        return this.Tabs = createAppContainer(createBottomTabNavigator(
            tabs, {
                tabBarComponent: props => {
                    return <TabBarComponent theme={this.props.theme} {...props}/>
                }
            }
        ));
    }

    render() {
        const Tab = this._tabNavigator();
        return <Tab/>
    }
}

class TabBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime(),
        }
    }

    render() {

        return <BottomTabBar {...this.props}
                             activeTintColor={this.props.theme}
        />
    }
}

const mapStateTopProps = state => ({
    theme: state.theme.theme,
});

export default connect(mapStateTopProps)(DynamicTabNavigator);