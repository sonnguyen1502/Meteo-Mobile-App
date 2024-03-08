import { View } from "react-native";
import { Txt } from "../TxT/Txt";
import { s, StyledContainer, StyledValue } from "./MeteoAdvanced.style.js"
export function MeteoAdvanced({ sunrise, sunset, windspeed }) {
    return (
        <View style={s.container}>
            <StyledContainer>
                <StyledValue>{sunrise}</StyledValue>
                <StyledValue>Sunrise</StyledValue>
            </StyledContainer>
            <StyledContainer>
                <StyledValue>{sunset}</StyledValue>
                <StyledValue>Sunset</StyledValue>
            </StyledContainer>
            <StyledContainer>
                <StyledValue>{windspeed}</StyledValue>
                <StyledValue>Windspeed</StyledValue>
            </StyledContainer>
        </View>
    );
}