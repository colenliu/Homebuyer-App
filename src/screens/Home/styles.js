import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        // image will cover whole viewing area on where it's displayed
        resizeMode: 'cover',
        // display text center of image vertically (parent component) 
        // (horizontal = alignItems)
        justifyContent: 'center',
        // position: 'absolute',
        // zIndex: -1
    },
    title: {
        fontSize: 75,
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        color: 'yellow',
        // how much letters go can across screen
        width: '75%',
        marginLeft: 25
    },
    button: {
        backgroundColor: 'white',
        width: 260,
        height: 40,
        marginLeft: 25,
        marginTop: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    searchBar: {
        backgroundColor: 'white',
        // width: Dimensions.get('screen').width - 40,
        // borderRadius: 20,
        // display icon and text side-by-side
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: 20,
        // marginRight: 20,
        // display on top of image and on top of everything else
        // position: 'absolute',
        // display 50 pixels from the top
        // top: 50,
        // make sure display on top of anything else 
        // zIndex: 1,
        // position: 'absolute'
    },
    searchBarText: {

    }
});

export default styles;