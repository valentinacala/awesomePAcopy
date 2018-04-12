import React, {Component} from 'react';
import {Button, Container, Content, Form, Input, Item, StyleProvider, Text} from "native-base";
import AweHeader from "../components/header";
import AweFooter from "../components/footer";
import material from "../native-base-theme/variables/material";
import getTheme from "../native-base-theme/components";


class FakeLogin extends Component<Props>
{

    render()
    {

        const {navigate} = this.props.navigation;
        const TITLE = 'LOGIN';

        return (

            <StyleProvider style={getTheme(material)}>
                <Container>
                    <AweHeader title={TITLE}/>

                    <Content padder={true}>

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


                    </Content>
                    <AweFooter/>
                </Container>
            </StyleProvider>
        );
    }
}

export default FakeLogin;


