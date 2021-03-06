import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SignUp from "../components/SignUp";
import Articles from "../features/articles/Articles";
import Article from "../features/articles/Article";
import Categories from "../features/categories/Categories";
import Author from "../features/authors/Author";
import Profile from "../features/session/Profile";

import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/">
        <Header />
      </Route>
      <main>
        <Switch>
          <Route path="/articles/:title">
            <Article />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/authors/:name">
            <Author />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
