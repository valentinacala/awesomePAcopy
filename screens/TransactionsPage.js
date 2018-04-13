/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import React, {Component} from 'react';

import {Button, H2, List, ListItem, Text, Thumbnail} from "native-base";
import type {NavigationScreenProp, NavigationState} from "react-navigation";
import AweTabsLayout from "../components/tabslayout";
import Styles from "../styles";

type CreditCard = {
    text: string,
    name: string,
    number: string,
    image: any
};

type Props = {
    navigation: NavigationScreenProp<NavigationState>,
    card: CreditCard
};

class TransactionsPage extends Component<Props>
{
    render()
    {
        const {navigate} = this.props.navigation;
        const {params} = this.props.navigation.state;
        const card: CreditCard = params ? params.card : "";
        const TITLE: string = 'Transazioni carta ';

        return (

            <AweTabsLayout title={TITLE}>
                <Thumbnail source={card.image}/>
                <H2 style={Styles.titleStyle}>{TITLE}</H2>
                <Text>{card.text}</Text>
                <List style={{marginTop: 20}}>
                    <ListItem>
                        <Text>12.01.18 - Pranzo da Babette - Eur.120,00</Text>
                    </ListItem>
                    <ListItem>
                        <Text>10.01.18 - Bonifico Marozzi - Eur.1.120,00</Text>
                    </ListItem>
                    <ListItem>
                        <Text>10.01.18 - Esselunga Supermkt - Eur.25,50</Text>
                    </ListItem>
                </List>
                <Button style={{marginTop: 40}} success title="Back" onPress={() => navigate('Home')}>
                    <Text>Torna</Text>
                </Button>
            </AweTabsLayout>

        );
    }
}

export default TransactionsPage;
