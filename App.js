import {
  SwitchNavigator,
} from 'react-navigation';

import HomePage from "./screens/HomePage";
import FakeLogin from "./screens/FakeLogin";

const App = SwitchNavigator({
    Login: { screen: FakeLogin },
    Home: { screen: HomePage }
});

export default App;
