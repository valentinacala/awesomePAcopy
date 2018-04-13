/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import * as React from 'react';

import {Button, Form, Input, Item, Text} from "native-base";
import AweLayout from "../components/layout";
import {
  type NavigationScreenProp,
  type NavigationState
} from 'react-navigation'

type Props = {
    navigation: NavigationScreenProp<NavigationState>
};

class FakeLogin extends React.Component<Props>
{

    render()
    {

        const {navigate} = this.props.navigation;
        const TITLE = 'LOGIN';

        return (

            <AweLayout title={TITLE}>

                <Form style={{marginTop: 50}}>
                    <Item>
                        <Input placeholder="Username"/>
                    </Item>
                    <Item last>
                        <Input placeholder="Password"/>
                    </Item>
                </Form>

                <Button style={{marginTop: 30}} block title="Login" onPress={() => navigate('Home')}>
                    <Text>Login</Text>
                </Button>

            </AweLayout>
        );
    }
}

export default FakeLogin;


