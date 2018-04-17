/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import * as React from 'react'
import {Body, Button, Header, Icon, Left, Right, Title} from "native-base";

type Props = {
    title?: string
};

class AweHeader extends React.Component<Props>
{
    constructor(props: Props)
    {
        super(props);
        this.props.title = 'TITLE';
    }

    render(): React.Node
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
