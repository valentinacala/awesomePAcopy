/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import React, {Component} from 'react';

import {Body, Button, Grid, H2, Icon, Left, List, ListItem, Right, Row, Text, Thumbnail} from "native-base";
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

type Operation = {
    date: string,
    subject: string,
    location: string,
    amount: number,
    isNew: boolean
}

const operations: Array<Operation> = [
    {
        date: 'Ieri alle 07.34',
        subject: 'Certificato di residenza',
        location: 'Comune di Gallarate',
        amount: -20.02,
        isNew: true
    },
    {
        date: '22/12/2018 - 07:34',
        subject: 'Rimborso TARI 2012',
        location: 'Comune di Gallarate',
        amount: -20.02,
        isNew: false
    },
    {
        date: '17/12/2018 - 22:23',
        subject: 'Ristorante I Pini',
        location: 'Busto Arsizio',
        amount: -134.00,
        isNew: false
    }];

class TransactionsPage extends Component<Props>
{


    renderRow(operation: Operation) {
      const isNew = operation.isNew;
      if (isNew) {
        return (
            <Row>
                <Icon type="FontAwesome" name="circle" active
                         style={{marginTop: 6, fontSize: 10, color: '#0066CC'}} />
                <Text note>{operation.date}</Text>
            </Row>
        )
      }
        return <Row><Text note>{operation.date}</Text></Row>
    }

    render()
    {
        const {navigate} = this.props.navigation;
        const {params} = this.props.navigation.state;
        const card: CreditCard = params ? params.card : "";
        const TITLE: string = 'OPERAZIONI';

        return (

            <AweTabsLayout title={TITLE}>

                <Grid >
                    <Row size={1}>
                        <Text note>{card.text} - {card.number}</Text>
                    </Row>
                    <Row size={1}>
                        <Left>
                            <H2 style={Styles.titleStyle}>{TITLE}</H2>
                        </Left>
                        <Right>
                            <Text note>Totale EUR</Text>
                        </Right>
                    </Row>

                    <Row size={4}>

                        <List style={{marginTop: 20}} dataArray={operations} renderRow={item =>

                            <ListItem>
                                <Body>
                                <Grid>
                                    {this.renderRow(item)}
                                    <Row>
                                        <Left>
                                            <Text>{item.subject}</Text>
                                        </Left>
                                        <Right>
                                            <Text>{item.amount}</Text>
                                        </Right>
                                    </Row>
                                    <Row>
                                        <Text note>{item.location}</Text>
                                    </Row>
                                </Grid>
                                </Body>
                            </ListItem>
                        }

                        />

                    </Row>
                    <Row size={1}>
                        <Button style={{marginTop: 40}} success title="Back" onPress={() => navigate('Home')}>
                            <Text>Torna</Text>
                        </Button>
                    </Row>
                </Grid>


            </AweTabsLayout>

        );
    }
}

export default TransactionsPage;
