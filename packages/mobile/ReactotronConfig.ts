import { NativeModules } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron, { trackGlobalErrors } from 'reactotron-react-native';
// @ts-ignore
import ReactotronFlipper from 'reactotron-react-native/dist/flipper';

import { name } from './package.json';

const { scriptURL } = NativeModules.SourceCode;
const scriptHostname = scriptURL.split('://')[1].split(':')[0];

Reactotron.setAsyncStorageHandler?.(AsyncStorage)
  .configure({
    name,
    host: scriptHostname,
    createSocket: path => new ReactotronFlipper(path),
  })
  .use(trackGlobalErrors({}))
  .useReactNative({
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
  })
  .connect();
