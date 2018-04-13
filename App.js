/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */


import {
  SwitchNavigator,
} from 'react-navigation';

import HomePage from "./screens/HomePage";
import FakeLogin from "./screens/FakeLogin";
import DocsPage from "./screens/DocsPage";
import SettingsPage from "./screens/SettingsPage";
import MessagesPage from "./screens/MessagesPage";
import ProfilePage from "./screens/ProfilePage";

const App = SwitchNavigator({
    Login: { screen: FakeLogin },
    Home: { screen: HomePage },
    Docs: { screen: DocsPage },
    Messages: { screen: MessagesPage },
    Profile: { screen: ProfilePage },
    Settings: { screen: SettingsPage },
});

export default App;
