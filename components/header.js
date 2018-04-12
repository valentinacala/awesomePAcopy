import React, {Component} from 'react';
import {Body, Button, Header, Icon, Left, Right, Title} from "native-base";


class AweHeader extends Component<Props>
{
    constructor(props)
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
