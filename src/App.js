import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AddNewService from './components/AddNewService/AddNewService';
import AllOrderManage from './components/AllOrderManage/AllOrderManage';
import DetailsService from './components/DetailsService/DetailsService';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import MyOrders from './components/MyOrders/MyOrders';
import NotPage from './components/NotPage/NotPage';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
         <Switch>
            <Route exact path="/">
                <Header/>
                <Home/>
                <Footer/>
            </Route>
            <Route path="/home">
                <Header/>
                <Home/>
                <Footer/>
            </Route>
            <Route path="/aboutUs">
              <Header/>
              <About/>
              <Footer/>
            </Route>
            <PrivateRoute path="/addService">
              <Header/>
               <AddNewService/>
               <Footer/>
            </PrivateRoute>
            <Route path="/login">
              <Header/>
              <Login></Login>
              <Footer/>
            </Route>
            <PrivateRoute path="/services/:serviceId">
              <Header/>
              <DetailsService/>
              <Footer/>
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <Header/>
              <MyOrders/>
              <Footer/>
            </PrivateRoute>
            <PrivateRoute path="/allOrderManage">
              <Header/>
              <AllOrderManage/>
              <Footer/>
            </PrivateRoute>
            <Route path="*">
              <NotPage/>
            </Route>
         </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
