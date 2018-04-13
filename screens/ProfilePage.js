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

type Props = {
    navigation: NavigationScreenProp<NavigationState>
};

class ProfilePage extends Component<Props>
{
    render()
    {
        const {navigate} = this.props.navigation;
        const TITLE: string = 'Profilo';

        return (

            <AweTabsLayout title={TITLE} navigation={navigate}>
                <H2 style={Styles.titleStyle}>{TITLE}</H2>
                <Button style={{marginTop: 100}} small success title="Logout" onPress={() => navigate('Login')}>
                    <Text>Logout</Text>
                </Button>
            </AweTabsLayout>

        );
    }
}

export default ProfilePage;
