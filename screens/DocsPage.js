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

class DocumentsPage extends Component<Props>
{
    render()
    {
        const {navigate} = this.props.navigation;
        const TITLE: string = 'Documenti';

        return (

            <AweTabsLayout title={TITLE}>
                <H2 style={Styles.titleStyle}>{TITLE}</H2>
                <Text>Seleziona un documento dalla lista.</Text>
            </AweTabsLayout>

        );
    }
}

export default DocumentsPage;
