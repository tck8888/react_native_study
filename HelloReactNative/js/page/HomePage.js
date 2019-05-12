import React, {Component} from 'react';
import {StyleSheet, Text, View, BackHandler} from 'react-native';

import {
    createAppContainer,
    createBottomTabNavigator,
    NavigationActions
} from "react-navigation";

import NavigationUtil from "../navigator/NavigationUtil";
import DynamicTabNavigator from "../navigator/DynamicTabNavigator";
import {connect} from "react-redux";

type Props = {};


class HomePage extends Component<Props> {
    componentDidMount(): void {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount(): void {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        const {dispatch, nav} = this.props;
        if (nav.routes[1].index === 0) {
            return false;
        }
        dispatch(NavigationActions.back());
        return true;

    };

    render() {
        NavigationUtil.navigation = this.props.navigation;
        return <DynamicTabNavigator/>
    }
}

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect(mapStateToProps)(HomePage);