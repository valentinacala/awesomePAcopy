/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import React, {Component} from 'react';

import {Body, Button, Grid, H2, Icon, Left, List, ListItem, Right, Row, Text} from "native-base";
import AweTabsLayout from "../components/tabslayout";
import Styles from "../styles";
import type {CreditCard} from "../types/CreditCard";
import type {Operation} from "../types/Operation";

import type {NavigationScreenProp, NavigationState} from "react-navigation";
import PortfolioAPI from "../mocked-api/portfolio";

type Props = {
    navigation: NavigationScreenProp<NavigationState>,
    card: CreditCard
};

const unknownCard: CreditCard = {
    id: -1,
    text: 'Unknows',
    name: '???',
    number: '0',
    image: null
};

class TransactionsPage extends Component<Props>
{

    renderDate(operation: Operation)
    {
        if (operation.isNew)
        {
            return (
                <Row>
                    <Icon type="FontAwesome" name="circle" active
                          style={{marginTop: 6, fontSize: 10, color: '#0066CC'}}/>
                    <Text note>{operation.date}</Text>
                </Row>
            )
        }
        return <Row><Text note>{operation.date}</Text></Row>
    }

    renderOperations(operations: Array<Operation>)
    {
        if (operations === undefined || operations.length === 0)
        {
            return <Text>Non ci sono operazioni.</Text>
        }

        return (

            <List style={{marginTop: 20}} dataArray={operations} renderRow={item =>

                <ListItem>
                    <Body>
                    <Grid>
                        {this.renderDate(item)}
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
        )
    }

    render()
    {
        const {navigate} = this.props.navigation;
        const {params} = this.props.navigation.state;
        const card: CreditCard = params ? params.card : unknownCard;
        const operations: Array<Operation> = PortfolioAPI.getOperations(card.id);
        const TITLE: string = 'OPERAZIONI';

        return (

            <AweTabsLayout title={TITLE}>

                <Grid>
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
                        {this.renderOperations(operations)}
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
