/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */


import * as React from 'react'
import {Button, Footer, FooterTab, Text} from "native-base";


type Props = {
};

class AweFooter extends React.Component<Props>
{

    render(): React.Node
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
