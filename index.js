/**
 * @format
 */

import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  AppRegistry,
} from 'react-native';
import {PaperProvider, MD3DarkTheme as DefaultTheme} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {name as appName} from './app.json';
import App from './App';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

export default function Main() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <PaperProvider>
        <App />
      </PaperProvider>
    </SafeAreaView>
  );
}

AppRegistry.registerComponent(appName, () => App);
