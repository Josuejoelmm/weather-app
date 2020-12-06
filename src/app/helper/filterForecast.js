export default function filterForecast(state) {
    let target = state[0].dt_txt.substring(8,10);
    return state.filter(singleForecast => {
        if (singleForecast.dt_txt.slice(-8) === "12:00:00") {
            target = singleForecast.dt_txt.substring(8,10);
            return true; 
        }
    })
}