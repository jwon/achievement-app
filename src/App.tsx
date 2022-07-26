import './App.css';
import Counter, { CounterProps } from './components/Counter';
import About from './components/About'
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const counterProps: CounterProps = {
    startingCount: 2,
    countInterval: 100,
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to={"/counter"}>Counter</Link>
          <Link to={"/about"}>About</Link>
          <Routes>
            <Route path="/counter" element={<Counter {...counterProps} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
