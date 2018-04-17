/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import React, {Component} from 'react';

import Styles from "../styles";
import {Button, Grid, H2, Left, Right, Row, Col, Text} from "native-base";
import AweTabsLayout from "../components/tabslayout";
import type {Operation} from "../types/Operation";
import type {CreditCard} from "../types/CreditCard";
import type {NavigationScreenProp, NavigationState} from "react-navigation";

const unknownOperation: Operation =
{
    cardId: -1,
    date: '',
    time: '',
    subject: 'UNKNOWN OPERATION',
    recipient: '',
    amount: 0,
    currency: '?',
    transactionCost: 0,
    isNew: false
};

const unknownCard: CreditCard = {
    id: -1,
    brand: 'Unknown',
    lastUsage: '???',
    number: '0',
    image: null
};

type Props = {
    navigation: NavigationScreenProp<NavigationState>,
    operation: Operation,
    card: CreditCard
};

class DetailsPage extends Component<Props>
{
    constructor(props: Props)
    {
        super(props);
    }

    render()
    {
        const {navigate} = this.props.navigation;
        const TITLE: string = 'Dettagli dell\'operazione';
        const {params} = this.props.navigation.state;
        const operation: Operation = params ? params.operation : unknownOperation;
        const card: CreditCard = params ? params.card : unknownCard;

        return (
            <AweTabsLayout title='Portafoglio' navigation={navigate}>
                <H2 style={Styles.titleStyle}>{TITLE}</H2>
                <Grid style={{marginTop: 50}}>
                    <Row>
                        <Left><Text>Totale {operation.currency}</Text></Left>
                        <Right><Text style={Styles.boldStyle}>{operation.amount}</Text></Right>
                    </Row>
                    <Row>
                        <Left><Text note>Importo da pagare</Text></Left>
                        <Right><Text>{operation.amount}</Text></Right>
                    </Row>
                    <Row>
                        <Left><Text note>Costo transazione</Text><Button transparent>Perché?</Button></Left>
                        <Right><Text>{operation.transactionCost}</Text></Right>
                    </Row>
                    <Row>
                        <Left><Text note>Causale</Text></Left>
                        <Right><Text style={Styles.boldStyle}>{operation.subject}</Text></Right>
                    </Row>
                    <Row>
                        <Left><Text note>Destinatario</Text></Left>
                        <Right><Text style={Styles.boldStyle}>{operation.recipient}</Text></Right>
                    </Row>
                    <Row>
                        <Left><Text note>Data</Text></Left>
                        <Right><Text>{operation.date}</Text></Right>
                    </Row>
                    <Row>
                        <Left><Text note>Ora</Text></Left>
                        <Right><Text>{operation.time}</Text></Right>
                    </Row>
                    <Row>
                        <Col size={5}>
                            <Button style={{marginTop: 40}} block success title="Receipt" onPress={() => navigate('Login')}>
                                <Text>Vedi la ricevuta</Text>
                            </Button>
                        </Col>
                        <Col size={1}/>
                        <Col size={5}>
                            <Button style={{marginTop: 40}} block title="Back"
                                    onPress={() => navigate('Transactions', { card: card })}>
                                <Text>Torna</Text>
                            </Button>
                        </Col>
                    </Row>
                </Grid>


            </AweTabsLayout>
        );
    }
}

export default DetailsPage;

