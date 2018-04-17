import React, {Component} from 'react';

import {Button, H2, Text} from "native-base";
import type {NavigationScreenProp, NavigationState} from "react-navigation";
import AweTabsLayout from "../components/tabslayout";
import Styles from "../styles";


type Props = {
    navigation: NavigationScreenProp<NavigationState>
};


class NavigationTestPage extends Component<Props>
{
    render()
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
