/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */


import {
  SwitchNavigator,
} from 'react-navigation';

import PortfolioPage from "./screens/PortfolioPage";
import FakeLogin from "./screens/FakeLogin";
import DocsPage from "./screens/DocsPage";
import SettingsPage from "./screens/SettingsPage";
import MessagesPage from "./screens/MessagesPage";
import ProfilePage from "./screens/ProfilePage";
import TransactionsPage from "./screens/TransactionsPage";
import DetailsPage from "./screens/DetailsPage";

const App = SwitchNavigator({
    Login: { screen: FakeLogin },
    Home: { screen: PortfolioPage },
    Docs: { screen: DocsPage },
    Messages: { screen: MessagesPage },
    Profile: { screen: ProfilePage },
    Settings: { screen: SettingsPage },
    Transactions: { screen: TransactionsPage },
    Details: { screen: DetailsPage }
});

export default App;
