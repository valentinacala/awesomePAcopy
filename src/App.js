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
import LoginPage from "./screens/LoginPage";
import DocsPage from "./screens/DocsPage";
import SettingsPage from "./screens/SettingsPage";
import MessagesPage from "./screens/MessagesPage";
import ProfilePage from "./screens/ProfilePage";
import TransactionsPage from "./screens/TransactionsPage";
import NavigationTestPage from "./screens/NavigationTestPage";
import DetailsPage from "./screens/DetailsPage";
import CreditCardsPage from "./screens/CreditCardsPage";
import AddPaymentMethodPage from "./screens/AddPaymentMethodPage";
import AddCardPage from "./screens/AddCardPage";

const App = SwitchNavigator({
    
    AddPaymentMethod: { screen: AddPaymentMethodPage },
    Login: { screen: LoginPage },
    Portfolio: { screen: PortfolioPage },
    CreditCards: { screen: CreditCardsPage },
    Docs: { screen: DocsPage },
    Messages: { screen: MessagesPage },
    Profile: { screen: ProfilePage },
    Transactions: { screen: TransactionsPage },
    Settings: { screen: SettingsPage },
    NavigationTest: { screen: NavigationTestPage },
    Details: { screen: DetailsPage },
    AddPaymentMethod: { screen: AddPaymentMethodPage },
    AddCard: {screen: AddCardPage}

});

export default App;
