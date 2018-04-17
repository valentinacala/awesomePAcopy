/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import * as React from 'react';

import Styles from "../styles";
import {Button, Form, H2, Input, Item, Text, Thumbnail} from "native-base";
import AweLayout from "../components/layout";
import {
    type NavigationScreenProp,
    type NavigationState
} from 'react-navigation'
import {Col, Grid} from "react-native-easy-grid";


type Props = {
    navigation: NavigationScreenProp<NavigationState>
};

class FakeLogin extends React.Component<Props>
{

    render(): React.Node
    {

        const {navigate} = this.props.navigation;
        const TITLE = 'LOGIN';
        const LOGO = require('../img/logo-it.png');

        console.log('Rendering FakeLogin');
        console.log('Nav:' + JSON.stringify(navigate.state));

        return (

            <AweLayout title={TITLE} navigation={navigate}>

                <Grid style={{marginTop: 30}}>
                    <Col size={2}/>
                    <Col size={1}>
                        <Thumbnail square large source={LOGO}/>
                    </Col>
                    <Col size={2}/>
                </Grid>

                <H2 style={Styles.titleStyle}>Accedi</H2>
                <Form style={{marginTop: 30}}>
                    <Item>
                        <Input placeholder="Nome Utente o eMail"/>
                    </Item>
                    <Item last>
                        <Input secureTextEntry placeholder="Password"/>
                    </Item>
                </Form>

                <Button style={{marginTop: 50}} block title="Login" onPress={() => navigate('Home')}>
                    <Text>Continua</Text>
                </Button>
                <Button style={{marginTop: 10}} light block title="Login">
                    <Text>Annulla</Text>
                </Button>


            </AweLayout>
        );
    }
}

export default FakeLogin;


