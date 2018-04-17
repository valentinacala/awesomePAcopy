/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import * as React from 'react'
import {Body, Grid, Icon, Left, List, ListItem, Right, Row, Text} from "native-base";
import type {NavigationScreenProp, NavigationState} from "react-navigation";
import type {CreditCard} from "../types/CreditCard";
import type {Operation} from "../types/Operation";
import PortfolioAPI from "../mocked-api/portfolio";
import {withNavigation} from "react-navigation";

type Props = {
    parent: string,
    navigation: NavigationScreenProp<NavigationState>,
    operations: Array<Operation>
};

class OperationsList extends React.Component<Props>
{
    constructor(props: Props)
    {
        super(props);
    }

    renderDate(operation: Operation): React.Node
    {
        const datetime: string = `${operation.date} - ${operation.time}`;
        if (operation.isNew)
        {
            return (
                <Row>
                    <Icon type="FontAwesome" name="circle" active
                          style={{marginTop: 6, fontSize: 10, color: '#0066CC'}}/>
                    <Text note>{datetime}</Text>
                </Row>
            )
        }
        return <Row><Text note>{datetime}</Text></Row>
    }

    getCard(operation: Operation): ?CreditCard
    {
        return PortfolioAPI.getCreditCard(operation.cardId);
    }

    render(): React.Node
    {
        const {navigate} = this.props.navigation;
        const ops = this.props.operations;

        if (ops === null || ops === undefined)
        {
            return <Text>Operations non definito.</Text>
        }

        if (ops.length < 1)
        {
            return <Text>Non ci sono operazioni.</Text>
        }

        return (

            <List style={{marginTop: 20}} dataArray={ops} renderRow={item =>

                <ListItem onPress={() => navigate('Details', {
                    parent: this.props.parent,
                    operation: item,
                    card: this.getCard(item) })} >
                    <Body>
                    <Grid>
                        {this.renderDate(item)}
                        <Row>
                            <Left>
                                <Text>{item.subject}</Text>
                            </Left>
                            <Right>
                                <Text>{item.amount} {item.currency}</Text>
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
}

export default withNavigation(OperationsList);
