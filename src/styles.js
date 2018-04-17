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
    }
});

export default Styles;

