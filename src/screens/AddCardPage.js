/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import * as React from "react";
import{Button, Container, List,ListItem, Content, Grid, Row, Col, Text, Form, Item,  Left, Right, Input, Label} from "native-base";
import {FlatList, Image,TextInput, View} from "react-native";
import type {NavigationScreenProp, NavigationState} from "react-navigation";
import AweTabsLayout from "../components/tabslayout";
import GridView from 'react-native-gridview';
import Icon from 'react-native-vector-icons/FontAwesome';


type Props = {
    navigation: NavigationScreenProp<NavigationState>
};

class AddCardPage extends React.Component<Props>
{
    render():React.Node
    {
        const {navigate} = this.props.navigation;
        const TITLE: string = 'Dati carta';
        const PROCEED: string = "Continua";
        const CANCEL: string = "Annulla";

        const cardItems = [
            {name:'amexIcon', source:require("../img/cardtypes/amex.png")},
            {name:'dinersIcon', source:require("../img/cardtypes/diners.png")},
            {name:'maestroIcon', source:require("../img/cardtypes/maestro.png")},
            {name:'mastercardIcon', source:require("../img/cardtypes/mastercard.png")},
            {name:'postepayIcon', source:require("../img/cardtypes/postepay.png")},
            {name:'visaIcon', source:require("../img/cardtypes/visa.png")},
            {name:'visaEIcon', source:require("../img/cardtypes/visa-electron.png")},
        ];

        return(
        <AweTabsLayout title={TITLE} navigation={navigate}>  
            <Item>
                <Text>Titolare</Text>
            </Item>
            <Item>
                <Icon name='user' type='Feather'/>
                <Input placeholder='Mario Rossi'/>
            </Item>
            <Item>
                <Text>Numero della Carta</Text>
            </Item>
            <Item>
                <Icon name='credit-card' type='Feather'/>
                <Input placeholder='0000000000000000'/>
            </Item>
            <Item>
            <Grid>
                <Col>
                    <Item>
                        <Text>Data di scadenza</Text>
                    </Item>
                    <Item>
                        <Icon name='calendar' type='Feather'/>
                        <Input placeholder='12/12'/>
                    </Item>
                </Col>
                <Col>
                    <Item>
                        <Text>Codice di sicurezza</Text>
                    </Item>
                    <Item>
                        <Icon name='lock' type='Feather'/>
                        <Input secureTextEntry={true} placeholder='****'/>
                    </Item>
                </Col>
            </Grid>
            </Item>

            <Item>
                <Text>Carte accettate:</Text>
            </Item>

            <Item>
            <FlatList 
                data={cardItems}
                numColumns={4}
                renderItem={
                    ({item,key}) => <Image style={{width: 80, height: 60, resizeMode:'contain'}} source={item.source}/>
                }
                keyExtractor={item => item.name}
                
            />
            </Item>

            <Button  block title={PROCEED}  onPress={() => navigate('Portfolio')}>
                <Text>{PROCEED}</Text>
            </Button> 
            <Button light block title={CANCEL}  onPress={() => navigate('AddPaymentMethod')}>
                <Text>{CANCEL}</Text>
            </Button>            

        </AweTabsLayout>

        );
    }
}

export default AddCardPage;