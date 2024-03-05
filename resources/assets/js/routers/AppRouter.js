import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import Category from '../components/CategoryBase';
import SubCategory from '../components/SubCategory';
import SearchResultsComponent from '../components/SearchResultsComponent';
import ProductInfo from '../components/ProductInfo';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Checkout from "../components/Checkout";
import Order from "../components/Order";
import LoginComponent from "../components/LoginComponent";
import RegistrationComponent from "../components/RegistrationComponent";
import LogoutComponent from "../components/LogoutComponent";
import MyAccount from "../components/MyAccount";
import OrderDetail from "../components/OrderDetail";
import MyOrders from "../components/MyOrders";
import NotFoundPage from "../components/NotFoundPage";
import About from "../components/About";
import People from "../components/People";
import Contact from "../components/Contact";

const appRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/electronics" exact={true}
                       render={(routeProps) => (<Category {...routeProps}
                                                          apiName={"electronics"}
                                                          sectionName={"Electronics"}/>)}/>
                <Route path="/books" exact={true}
                       render={(routeProps) => (<Category {...routeProps}
                                                          apiName={"books"}
                                                          sectionName={"Books"}/>)}/>
                <Route path="/homerequirements" exact={true}
                       render={(routeProps) => (<Category {...routeProps}
                                                          apiName={"homerequirements"}
                                                          sectionName={"Home Requirements"}/>)}/>
                <Route path="/electronics/:subcategory" component={SubCategory} exact={true}/>
                <Route path="/books/:subcategory" component={SubCategory} exact={true}/>
                <Route path="/homerequirements/:subcategory" exact={true}
                       render={(routeProps) => (<SubCategory {...routeProps}
                                                          />)} />
                <Route path="/search/:category/:query" exact={true} component={SearchResultsComponent} />
                <Route path="/product/:id" exact={true} component={ProductInfo} />
                <Route path="/checkout" exact={true} component={Checkout} />
                <Route path="/order" exact={true} component={Order}/>
                <Route path="/login" exact={true} component={LoginComponent}/>
                <Route path="/register" exact={true} component={RegistrationComponent}/>
                <Route path="/logout" exact={true} component={LogoutComponent}/>
                <Route path="/myaccount" exact={true} component={MyAccount}/>
                <Route path="/myorders" exact={true} component={MyOrders}/>
                <Route path="/order/:id" exact={true} component={OrderDetail} />
                <Route path="/about" exact={true} component={About}/>
                <Route path="/people" exact={true} component={People}/>
                <Route path="/contact" exact={true} component={Contact}/>
                <Route component={NotFoundPage} />
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
);

export default appRouter;