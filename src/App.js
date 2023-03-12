import logo from './logo.svg';

import './App.css';
import '../../my-app/src/style.css'
import '../src/custom.js'
import { Header } from './components/Buoi1/Header';
import { Section } from './components/Buoi1/Section';
import { Footer } from './components/Buoi1/Footer';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Section></Section>
        <Footer></Footer>
    </div>
  );
}

export default App;
