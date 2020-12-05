import Weather from './pages/home/Weather';
import { GlobalProvider } from './state/Contex';

function App() {
    return (
        <GlobalProvider>
            <Weather />
        </GlobalProvider>
    );
}

export default App;