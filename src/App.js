import './App.css';
import Header from './components/header.js';
import Navigation from './components/navigation';
import Content from './components/content';



function App() {
  return (
    <div className="App">
      <Header />

      <div className="conteiner">

        <Navigation />

        <Content />

      </div>
    </div>
  );
}

export default App;