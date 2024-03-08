import { StyleSheet } from "react-native";
export const s = StyleSheet.create({
    clock: {
        alignItems: "flex-end",
        marginRight: 10,

    },
    interpretation: {
        alignSelf: "flex-end",
        transform: [{ rotate: "-90deg" }]

    },
    temperature: {
        fontSize: 130,

    },
    temperature_box: {
        alignItems: "baseline",
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 20,


    },
    interpretation_txt: {
        fontSize: 25,
    },
    image: {
        height: 90,
        width: 90,
    }
});