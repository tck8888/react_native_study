/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AppNavigator from "./js/navigator/AppNavigator";
import WelcomePage from './js/page/WelcomePage';
import HomePage from './js/page/HomePage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => WelcomePage);
