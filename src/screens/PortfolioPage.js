/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import * as React from 'react'
import {Image, TouchableHighlight, StyleSheet} from 'react-native';
import {Button, Content, H2, Left, Row, Text, View} from "native-base";
import AweTabsLayout from "../components/tabslayout";
import Styles from "../styles";
import OperationsList from "../components/operations";

import type {NavigationScreenProp, NavigationState} from "react-navigation";
import PortfolioAPI from "../mocked-api/portfolio";
import {Grid} from "react-native-easy-grid";
import type {Operation} from "../types/Operation";
import CustomLayout from "../components/custom-layout";

type Props = {
    navigation: NavigationScreenProp<NavigationState>
};

class PortfolioPage extends React.Component<Props>
{
    constructor(props: Props)
    {
        super(props);
    }

    render(): React.Node
    {
        const {navigate} = this.props.navigation;
        const TITLE: string = 'Portafoglio';
        const ADDMETHOD: string = 'Aggiungi un metodo di pagamento';
        const cardsImage = require('../img/creditcards.jpg');
        const latestOperations: Array<Operation> = PortfolioAPI.getLatestOperations();

        return (

            <CustomLayout title={TITLE} navigation={navigate}>

                <Content padder>
                    <Grid>
                        <Row>
                            <H2 style={Styles.titleStyle}>Portafoglio</H2>
                        </Row>
                        <Row>
                            <Text style={Styles.titleStyle}>Metodi di pagamento</Text>
                        </Row>
                        <Row>
                            <View style={Styles.container}>
                                <TouchableHighlight onPress={() => navigate('CreditCards')}>
                                    <Image style={Styles.image}
                                           source={cardsImage}/>
                                </TouchableHighlight>
                            </View>
                        </Row>
                        <Row>
                            <OperationsList parent='Portfolio' operations={latestOperations}/>
                        </Row>
                    </Grid>
                </Content>

                <View
                    style={{
                      padding: 10,
                    }}>
                    <Button success block title={ADDMETHOD} onPress={() => navigate('Portfolio')}>
                        <Text>{ADDMETHOD}</Text>
                    </Button>
                </View>

            </CustomLayout>

        );
    }
}

export default PortfolioPage;


