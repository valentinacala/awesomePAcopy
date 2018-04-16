/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import React, {Component} from 'react';
import {Image} from 'react-native';

import {Body, Button, Card, CardItem, DeckSwiper, H2, Icon, Left, Text, Thumbnail, View} from "native-base";
import type {NavigationScreenProp, NavigationState} from "react-navigation";
import AweTabsLayout from "../components/tabslayout";
import Styles from "../styles";
import type {CreditCard} from "../types/CreditCard";

type Props = {
    navigation: NavigationScreenProp<NavigationState>
};

const cards: Array<CreditCard> = [
    {
        text: 'American Express',
        name: 'Nessuna transazione',
        number: '3759 876543 21001',
        image: require('../img/amex-cc.jpg')
    },
    {
        text: 'VISA',
        name: 'Ultimo utilizzo ieri alle 07.34',
        number: '4000 1234 5678 9010',
        image: require('../img/visa-cc.jpg')
    },
    {
        text: 'Mastercard',
        name: 'Ci sono due nuove transazioni',
        number: '5412 7556 7890 0000',
        image: require('../img/mastercard-cc.png')
    },
    {
        text: 'RedCard',
        name: 'Nessuna transazione',
        number: '4000 1234 5678 9010',
        image: require('../img/simple-cc.png')
    }
];

class PortfolioPage extends Component<Props>
{
    constructor(props: Props)
    {
        super(props);
    }

    render()
    {
        const {navigate} = this.props.navigation;
        const TITLE: string = 'Portafoglio';

        return (

            <AweTabsLayout title={TITLE} navigation={navigate}>
                <H2 style={Styles.titleStyle}>Portafoglio</H2>
                <Text style={Styles.titleStyle}>Metodi di pagamento</Text>
                <View style={{minHeight: 500}}>
                <DeckSwiper
                    dataSource={cards}
                    renderItem={item =>
                        <Card style={{elevation: 3}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={item.image}/>
                                    <Body>
                                    <Text>{item.text}</Text>
                                    <Text note>{item.number}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image style={{height: 200, flex: 1}} source={item.image}/>
                            </CardItem>
                            <CardItem>
                                <Icon name="arrow-right" type="Feather" style={{color: '#0066CC'}}/>
                                <Button transparent title="Transactions"
                                        onPress={() => navigate('Transactions', { card: item })} >
                                    <Text>{item.name}</Text>
                                </Button>
                            </CardItem>
                        </Card>
                    }
                />
                </View>
            </AweTabsLayout>

        );
    }
}

export default PortfolioPage;


