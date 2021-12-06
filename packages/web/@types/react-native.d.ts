declare module 'react-native' {
  namespace AppRegistry {
    function registerComponent(
      appKey: string,
      // eslint-disable-next-line no-undef
      componentProvider: () => React.ComponentType,
    ): void;
    function getApplication(appKey: string): { getStyleElement: () => string };
  }
}
