/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import Reactotron from 'reactotron-react-native';
import App from './App';
import {name as appName} from './app.json';

if (__DEV__) {
  import('./ReactotronConfig').then(() => {
    console.tron = Reactotron;
  });
}

AppRegistry.registerComponent(appName, () => App);
