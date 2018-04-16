/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import React, {Component} from 'react';

import {Component} from "react";
import Styles from "../styles";
import {Button, H2, Text} from "native-base";
import AweTabsLayout from "../components/tabslayout";

class DetailsPage extends Component<Props>
{
    constructor(props: Props)
    {
        super(props);
    }

    render()
    {
        const {navigate} = this.props.navigation;
        const TITLE: string = 'Dettagli';

        return (
            <AweTabsLayout title={TITLE} navigation={navigate}>
                <H2 style={Styles.titleStyle}>{TITLE}</H2>
                <Text>xxx</Text>
                <Button style={{marginTop: 100}} small success title="Logout" onPress={() => navigate('Login')}>
                    <Text>Logout</Text>
                </Button>
            </AweTabsLayout>
        );
    }
}

export default DetailsPage;

