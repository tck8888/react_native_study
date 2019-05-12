import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createAppContainer,
    createSwitchNavigator
} from "react-navigation"

import {connect} from 'react-redux';

import {
    createReactNavigationReduxMiddleware,
    createNavigationReducer, createReduxContainer
} from 'react-navigation-redux-helpers'

import WelcomePage from '../page/WelcomePage'
import HomePage from '../page/HomePage'
import DetailPage from '../page/DetailPage'

//根路由
export const rootCom = "Init";

const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            header: null,
        }
    }
});

const MainNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            header: null,
        }
    },
    DetailPage: {
        screen: DetailPage,
        navigationOptions: {
            // header: null,
        }
    }
});

export const RootNavigator = createAppContainer(createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
}, {
    navigationOptions: {
        header: null,
    }
}));

export const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root'
);

const AppWithNavigationSate = createReduxContainer(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationSate);