/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import * as React from 'react'

import {H2, Text} from "native-base";
import type {NavigationScreenProp, NavigationState} from "react-navigation";
import AweTabsLayout from "../components/tabslayout";
import Styles from "../styles";


type Props = {
    navigation: NavigationScreenProp<NavigationState>
};


class NavigationTestPage extends React.Component<Props>
{
    render(): React.Node
    {
        const {navigate} = this.props.navigation;
        const TITLE: string = 'Navigation Page';

        return (

            <AweTabsLayout title={TITLE} navigation={navigate}>
                <H2 style={Styles.titleStyle}>{TITLE}</H2>
                <Text>test effettuato con successo</Text>
            </AweTabsLayout>

        );
    }
}

export default NavigationTestPage;
