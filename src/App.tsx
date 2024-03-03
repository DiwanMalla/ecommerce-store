import Login from "./components/Authentication/Login/Login";
import Admin from "./components/Authentication/admin/admin";
import Home from "./pages/home/home";
import AdminPage from "./components/Authentication/admin/adminPage";
import Contact from "./pages/Contact/contact/contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/HomePage/MainPage";
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/main">
            <MainPage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/admin_home">
            <AdminPage />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
