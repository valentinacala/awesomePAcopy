/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import * as React from 'react';
import {View, Button, Container, StyleProvider, Grid, Row, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from "native-base";
import {Image,TouchableHighlight} from 'react-native';
import type {NavigationScreenProp, NavigationState} from "react-navigation";
import AweTabsLayout from "../components/tabslayout";
import Styles from "../styles";
import CustomLayout from "../components/custom-layout";


type Props = {
    navigation: NavigationScreenProp<NavigationState>
};

class AddPaymentMethodPage extends React.Component<Props>
{
    render(): React.Node
    {
        const {navigate} = this.props.navigation;
        const TITLE: string = 'Aggiungi metodo di pagamento';
        const creditCardImage = require('../img/creditCardBlueIcon.png');
        const bankImage = require('../img/BankIcon.png');
        const mobileIcon = require('../img/MobileIcon.png');
        const CANCEL: string = "Annulla";

        return (
            
            <AweTabsLayout title={TITLE} navigation={navigate}>                
                
                    <List style={{padding:0, margin:0}}>
                        <ListItem style={{marginLeft: 0, flex:1, paddingRight: 0}} onPress={()=> navigate('AddCard')} >
                                        <Left>
                                            <Grid>
                                                <Row>
                                                    <Text style={Styles.payBoldStyle}>Carta di credito/debito</Text>
                                                </Row>
                                                <Row>
                                                    <Text style={Styles.payLightStyle}>Commissione max € 0,50</Text>
                                                </Row>
                                            </Grid>
                                        </Left>
                                        <Right style={{alignItems:"center"}}>
                                            <Image source={creditCardImage} style={{resizeMode:"contain"}}/>
                                        </Right>
                        </ListItem>
                        <ListItem style={{marginLeft: 0, flex:1, paddingRight: 0}} onPress={()=> navigate('NavigationTest')}>
                                        <Left>
                                            <Grid>
                                                <Row>
                                                    <Text style={Styles.payBoldStyle}>Conto corrente</Text>
                                                </Row>
                                                <Row>
                                                    <Text style={Styles.payLightStyle}>Commissione max € 0,50</Text>
                                                </Row>
                                            </Grid>
                                        </Left>
                                        <Right style={{alignItems:"center"}}>
                                            <Image source={bankImage} style={{resizeMode:"contain"}}/>
                                        </Right>         
                        </ListItem>
                        <ListItem style={{marginLeft: 0, flex:1, paddingRight: 0}}  onPress={()=>navigate('NavigationTest')}>
                                        <Left>
                                            <Grid>
                                                <Row>
                                                    <Text style={Styles.payBoldStyle}>Altri metodi di pagamento</Text>
                                                </Row>
                                                <Row>
                                                    <Text style={Styles.payLightStyle}>Commissione max € 0,50</Text>
                                                </Row>
                                            </Grid>
                                        </Left>
                                        <Right style={{alignItems:"center"}}>
                                            <Image source={mobileIcon} style={{resizeMode:"contain"}}/>
                                        </Right>
                        </ListItem>
                    </List>

                    <Text style={Styles.linkStyle} onPress={()=>navigate('NavigationTest')}>Perchè la commissione? </Text>
             
                    <Button light block title={CANCEL} justifyItem={'end'} onPress={() => navigate('Portfolio')}>
                            <Text>{CANCEL}</Text>
                    </Button>     

            </AweTabsLayout>
        );           
                 
    }
}

export default AddPaymentMethodPage;
