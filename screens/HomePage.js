import React, {Component} from 'react';
import {Platform} from 'react-native';

import {Button, Container, Content, StyleProvider, Text} from "native-base";
import AweHeader from "../components/header";
import AweFooter from "../components/footer";
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomePage extends Component<Props>
{
    render()
    {
        const {navigate} = this.props.navigation;
        const TITLE = 'HomePage';

        return (

            <StyleProvider style={getTheme(material)}>
                <Container>
                    <AweHeader title={TITLE}/>
                    <Content>
                        <Text>
                            AwesomePA
                        </Text>
                        <Text>
                            Home Page
                        </Text>
                        <Text>
                            {instructions}
                        </Text>
                        <Button title="Logout" onPress={() => navigate('Login')}>
                            <Text>Logout</Text>
                        </Button>
                    </Content>
                    <AweFooter/>
                </Container>
            </StyleProvider>

        );
    }
}

export default HomePage;


