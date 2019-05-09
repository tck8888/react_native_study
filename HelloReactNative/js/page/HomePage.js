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
import NavigationUtil from "../navigator/NavigationUtil";
import DynamicTabNavigator from "../navigator/DynamicTabNavigator";

type Props = {};


export default class HomePage extends Component<Props> {

    render() {
        NavigationUtil.navigation=this.props.navigation;
        return <DynamicTabNavigator/>
    }
}
