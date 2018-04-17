/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import * as React from 'react';

import {Container, Content, StyleProvider} from "native-base";
import getTheme from "../../native-base-theme/components";
import material from "../../native-base-theme/variables/material";
import AweHeader from "./header";
import FTabs from "./ftabs";
import type {NavigationScreenProp, NavigationState} from "react-navigation";
import { withNavigation } from "react-navigation";

type Props = {
    children?: React.Node,
    title?: string,
    navigation: NavigationScreenProp<NavigationState>
};

class AweTabsLayout extends React.Component<Props>
{
    constructor(props: Props)
    {
        super(props);
    }

    render(): React.Node
    {

        return (

            <StyleProvider style={getTheme(material)}>
                <Container>
                    <AweHeader title={this.props.title}/>

                    <Content padder={true}>
                        {this.props.children}
                    </Content>

                    <FTabs title={this.props.title} />
                </Container>
            </StyleProvider>

        );
    }
}

export default withNavigation(AweTabsLayout);
