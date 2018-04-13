/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */


import React, {Component} from 'react';
import {Button, Footer, FooterTab, Text} from "native-base";

type Props = {
};

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
