import Barra from './components/Barra';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';

function App() {
  return (
    <main>
      <Barra />
      <Header />
      <div className="cuerpo">
        <HomeScreen />
      </div>
    </main>
  );
}

export default App;
