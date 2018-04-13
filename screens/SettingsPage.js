/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import React, {Component} from 'react';
import {Platform} from 'react-native';

import {Button, H2, Text} from "native-base";
import type {NavigationScreenProp, NavigationState} from "react-navigation";
import AweTabsLayout from "../components/tabslayout";
import Styles from "../styles";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {
    navigation: NavigationScreenProp<NavigationState>
};

class SettingsPage extends Component<Props>
{
    render()
    {
        const {navigate} = this.props.navigation;
        const TITLE: string = 'Preferenze';

        return (

            <AweTabsLayout title={TITLE} navigation={navigate}>
                <H2 style={Styles.titleStyle}>{TITLE}</H2>
                <Text>{instructions}</Text>
                <Button style={{marginTop: 100}} small success title="Logout" onPress={() => navigate('Login')}>
                    <Text>Logout</Text>
                </Button>
            </AweTabsLayout>

        );
    }
}

export default SettingsPage;
