/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import * as React from 'react'

import {Button, Grid, H2, Left, Right, Row, Text} from "native-base";
import AweTabsLayout from "../components/tabslayout";
import Styles from "../styles";
import type {CreditCard} from "../types/CreditCard";
import type {Operation} from "../types/Operation";

import type {NavigationScreenProp, NavigationState} from "react-navigation";
import PortfolioAPI from "../mocked-api/portfolio";
import OperationsList from "../components/operations";

type Props = {
    navigation: NavigationScreenProp<NavigationState>,
    card: CreditCard
};

const unknownCard: CreditCard = {
    id: -1,
    brand: 'Unknows',
    lastUsage: '???',
    number: '0',
    image: null
};

class TransactionsPage extends React.Component<Props>
{
    
    render(): React.Node
    {
        const {navigate} = this.props.navigation;
        const {params} = this.props.navigation.state;
        const card: CreditCard = params ? params.card : unknownCard;
        const operations: Array<Operation> = PortfolioAPI.getOperations(card.id);
        const TITLE: string = 'OPERAZIONI';

        return (

            <AweTabsLayout title='Portafoglio'>

                <Grid>
                    <Row size={1}>
                        <Text note>{card.brand} - {card.number}</Text>
                    </Row>
                    <Row size={1}>
                        <Left>
                            <H2 style={Styles.titleStyle}>{TITLE}</H2>
                        </Left>
                        <Right>
                            <Text note>Totale</Text>
                        </Right>
                    </Row>
                    <Row size={4}>
                        <OperationsList parent='Transactions' operations={operations}/>
                    </Row>
                    <Row size={1}>
                        <Button style={{marginTop: 40}} success title="Back" onPress={() => navigate('Portfolio')}>
                            <Text>Torna</Text>
                        </Button>
                    </Row>
                </Grid>


            </AweTabsLayout>

        );
    }
}

export default TransactionsPage;
