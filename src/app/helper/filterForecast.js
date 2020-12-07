export default function filterForecast(state) {
    return state.filter(singleForecast => singleForecast.dt_txt.slice(-8) === "12:00:00")
}