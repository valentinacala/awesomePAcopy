import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    titleStyle: {
        fontFamily: "Titillium Web",
        fontWeight: "bold",
        color: "rgb(150,150,150)"
    },
    boldStyle: {
        fontFamily: "Titillium Web",
        fontWeight: "bold",
        color: "rgb(30,30,30)"
    },
    
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

    image: {
        height: 150,
        marginLeft: -120,
        resizeMode: 'contain'
    },

    payBoldStyle: {
        fontFamily: "Titillium Web",
        fontWeight: "bold",
        color: "rgb(30,30,30)"
    },

    payLightStyle: {
        fontFamily: "Titillium Web",
        fontSize: 12 ,
        color: "rgb(166, 166, 166)"
    },

    linkStyle: {
        marginTop:20,
        marginBottom:40,
        marginLeft:10,
        marginRight:10,
        fontFamily: "Titillium Web",
        fontWeight: "bold",
        color: "rgb(0, 0, 255)",

    },

});

export default Styles;

