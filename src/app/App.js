import Weather from './pages/home/Weather';
import { GlobalProvider } from './state/Contex';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <GlobalProvider>
            <Layout>
                <Weather />
            </Layout>
        </GlobalProvider>
    );
}

export default App;