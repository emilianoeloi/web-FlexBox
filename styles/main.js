import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "color": "#fff"
    },
    "html": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "color": "#fff"
    },
    "container": {
        "width": 320,
        "display": "flex",
        "backgroundColor": "purple",
        "flexDirection": "row",
        "flexWrap": "wrap"
    },
    "item1": {
        "backgroundColor": "red",
        "flexShrink": 1,
        "width": 50,
        "height": 50,
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
    },
    "item1-1": {
        "backgroundColor": "gray",
        "width": 34,
        "height": 34
    },
    "item2": {
        "backgroundColor": "green",
        "flexGrow": 1,
        "flexShrink": 1,
        "alignContent": "center",
        "alignSelf": "center"
    },
    "item3": {
        "backgroundColor": "blue",
        "flexGrow": 1,
        "flexShrink": 1,
        "flexBasis": "100%"
    }
});