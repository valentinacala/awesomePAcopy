/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import * as React from 'react';

import {Container, StyleProvider} from "native-base";
import getTheme from "../../native-base-theme/components";
import material from "../../native-base-theme/variables/material";
import AweHeader from "./header";
import FTabs from "./ftabs";

type Props = {
    children?: React.Node,
    title?: string
};

class CustomLayout extends React.Component<Props>
{
    constructor(props: Props)
    {
        super(props);
        this.props.title = 'TITLE';
    }

    render(): React.Node
    {
        return (

            <StyleProvider style={getTheme(material)}>
                <Container>
                    <AweHeader title={this.props.title}/>

                        {this.props.children}

                    <FTabs title={this.props.title} />
                </Container>
            </StyleProvider>

        );
    }
}

export default CustomLayout;
