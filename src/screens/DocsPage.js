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

class DocumentsPage extends React.Component<Props>
{
    render(): React.Node
    {
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
