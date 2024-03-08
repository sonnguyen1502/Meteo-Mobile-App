import { StyleSheet, View } from "react-native";
import { Txt } from "../TxT/Txt";

const s = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#0000005c",
        flex: 2,
        alignItems: "center",
        justifyContent: "space-evenly",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 15,
        marginRight: 20,
        marginLeft: 20,
    }
});
export function StyledContainer({ children }) {
    return <View style={{ alignItems: "center" }}>{children}</View>;
}
export function StyledLabel({ children }) {
    return <Txt style={{ fontSize: 15, }}>{children}</Txt>;
}
export function StyledValue({ children }) {
    return <Txt style={{ fontSize: 20 }}>{children}</Txt>;
}
export { s };