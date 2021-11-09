import logo from './logo.svg';
import './App.css';
import "./Layout/Layout.css"
import Header from "./Layout/Header";
import Main from "./Layout/Main"
import {useSelector} from "react-redux"
import Menu from "./Layout/Menu";
import {Switch, Route} from "react-router-dom";
import Modal from "./Common/Modal";
import Footer from "./Layout/Footer";
function App() {

    const count = useSelector(state => state.counter.clickCount)

  return (
    <div className="App">
        <Switch>
            <Route exact path="/:id?">
                <Header/>
                <Main/>
                <Modal/>
                <Footer/>
            </Route>
            <Route exact path={"/menu"}>
                <Header/>
                <Main/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
