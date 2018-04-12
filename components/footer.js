import React, {Component} from 'react';
import {Button, Footer, FooterTab, Text} from "native-base";

class AweFooter extends Component<Props>
{

    render()
    {
        return (

            <Footer>
                <FooterTab>
                    <Button full>
                        <Text>AwesomePA</Text>
                    </Button>
                </FooterTab>
            </Footer>

        );
    }

}

export default AweFooter;
