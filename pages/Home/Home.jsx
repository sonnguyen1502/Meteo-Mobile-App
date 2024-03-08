import { Text, View } from "react-native"
import { s } from "./Home.style"
import { Txt } from "../../components/TxT/Txt"
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../../utils/meteo-untils";
import { MeteoAdvanced } from "../../components/MeteoAdvanced/MeteoAdvanced";
export function Home({ weather, city }) {
    const currentWeather = weather.current_weather
    const currentInterpretation = getWeatherInterpretation(currentWeather.weathercode)
    return (
        <>
            <View style={s.meteo_basic}>
                <MeteoBasic city={city}
                    interpretation={currentInterpretation}
                    temperature={Math.round(currentWeather.temperature)} />
            </View>
            <View style={s.searchbar_container}>
                <Txt style={s.txt} >Search Bar</Txt>
            </View>
            <View style={s.meteo_advanced}>
                <MeteoAdvanced />
            </View>

        </>
    );
}