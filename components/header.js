/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import React, {Component} from 'react';
import {Body, Button, Header, Icon, Left, Right, Title} from "native-base";

type Props = {
    title?: string
};

class AweHeader extends Component<Props>
{
    constructor(props: Props)
    {
        super(props);
        this.props.title = 'TITLE';
    }

    render()
    {
        return (

            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu'/>
                    </Button>
                </Left>
                <Body>
                <Title>{this.props.title}</Title>
                </Body>
                <Right/>
            </Header>

        );
    }
}

export default AweHeader;
