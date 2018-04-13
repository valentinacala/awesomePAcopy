/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import React, {Component} from 'react';
import {Platform} from 'react-native';

import {Button, Text} from "native-base";
import type {NavigationScreenProp, NavigationState} from "react-navigation";
import AweLayout from "../components/layout";


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {
    navigation: NavigationScreenProp<NavigationState>
};

class HomePage extends Component<Props>
{
    render()
    {
        const {navigate} = this.props.navigation;
        const TITLE = 'HomePage';

        return (

            <AweLayout title={TITLE}>
                <Text>
                    AwesomePA
                </Text>
                <Text>
                    Home Page
                </Text>
                <Text>
                    {instructions}
                </Text>
                <Button title="Logout" onPress={() => navigate('Login')}>
                    <Text>Logout</Text>
                </Button>
            </AweLayout>

        );
    }
}

export default HomePage;


