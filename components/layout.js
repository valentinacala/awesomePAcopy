/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import * as React from 'react';

import {Container, Content, StyleProvider} from "native-base";
import getTheme from "../native-base-theme/components";
import material from "../native-base-theme/variables/material";
import AweHeader from "./header";
import AweFooter from "./footer";

type Props = {
    children?: React.Node,
    title?: string
};

class AweLayout extends React.Component<Props>
{
    constructor(props: Props)
    {
        super(props);
        this.props.title = 'TITLE';
    }

    render()
    {
        return (

            <StyleProvider style={getTheme(material)}>
                <Container>
                    <AweHeader title={this.props.title}/>

                    <Content padder={true}>
                        {this.props.children}
                    </Content>

                    <AweFooter/>
                </Container>
            </StyleProvider>

        );
    }
}

export default AweLayout;
