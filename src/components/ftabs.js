/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import * as React from 'react'

import {Badge, Button, Footer, FooterTab, Icon, Text} from "native-base";
import type {NavigationScreenProp, NavigationState} from "react-navigation";
import { withNavigation } from "react-navigation";

type Props = {
    title: string,
    navigation: NavigationScreenProp<NavigationState>
};

class FTabs extends React.Component<Props>
{

    isActive(iconName: string): boolean
    {
        return this.props.title === iconName;
    }

    render(): React.Node
    {
        const {navigate} = this.props.navigation;
        const iconText = {fontSize: 9};

        return (
            <Footer>
                <FooterTab>
                    <Button style={{padding:0}} active={this.isActive('Messaggi')} title="Messages" vertical onPress={() => navigate('Messages')}>
                        <Icon active={this.isActive('Messaggi')} type="Feather" name="mail"/>
                        <Text style={iconText}>Messaggi</Text>
                    </Button>
                    <Button style={{padding:0}} active={this.isActive('Portafoglio')} title="Home" vertical onPress={() => navigate('Portfolio')}>
                        <Icon active={this.isActive('Portafoglio')} name="wallet"/>
                        <Text style={iconText}>Portafoglio</Text>
                    </Button>
                    <Button style={{padding:0}} active={this.isActive('Documenti')} title="Docs" vertical onPress={() => navigate('Docs')}>
                        <Icon active={this.isActive('Documenti')} type="Feather" name="file-text"/>
                        <Text style={iconText}>Documenti</Text>
                    </Button>
                    <Button style={{padding:0}} active={this.isActive('Preferenze')} title="Settings" vertical onPress={() => navigate('Settings')}>
                        <Icon active={this.isActive('Preferenze')} type="Feather" name="settings"/>
                        <Text style={iconText}>Preferenze</Text>
                    </Button>
                    <Button style={{padding:0}} active={this.isActive('Profilo')} title="Profile" vertical onPress={() => navigate('Profile')}>
                        <Icon active={this.isActive('Profilo')} type="Feather" name="user"/>
                        <Text style={iconText}>Profilo</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }

}

export default withNavigation(FTabs);
