// NPM Packages
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Project files
import './css/App.css';
import SearchPage from './pages/SearchPage';
import ResultPage from './pages/ResultPage';
import Header from './components/Header';
import Footer from './components/Footer';


export default function App() {
  return (

    <div className="App">
      @ APP @
      <BrowserRouter>

      <Switch>
        <Route component={SearchPage} path="/" exact/>
        <Route component={ResultPage} path="/result/:query" />
      </Switch>

      <Footer />
      </BrowserRouter>
      
      @ APP @
      
    </div>
  );
}
