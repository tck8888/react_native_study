import React, {Component} from 'react';
import {StyleSheet, Text, View,} from 'react-native';

import {
    createAppContainer,
    createBottomTabNavigator
} from "react-navigation";

import MyPage from "./MyPage";
import FavoritePage from "./FavoritePage";
import PopularPage from "./PopularPage";
import TrendingPage from "./TrendingPage";

import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"

type Props = {};
export default class HomePage extends Component<Props> {

    _tabNavigator() {
        return createAppContainer(createBottomTabNavigator({
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
        }));
    }

    render() {
        const Tab = this._tabNavigator();
        return <Tab/>
    }
}
