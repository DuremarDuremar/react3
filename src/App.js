import React, { useEffect } from "react";
import { res1100, res780, res480 } from "./reducers/actions";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Fest from "./pages/fest.jsx";
import Direct from "./pages/direct.jsx";
import Cart from "./components/cart.jsx";
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  border: 0;
  user-select: none;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
a {
  text-decoration: none;
}
ul li {
  list-style: none;
}
button {
  outline: none;
  cursor: pointer;
}
input{
  outline: none;
}
`;

const AppStyle = styled.div`
  background-color: #2f3542;
  max-width: 1366px;
  min-height: 100vh;
  margin: 0px auto;
  font-family: "Yatra One", cursive;
`;

const App = ({ res1100, res780, res480 }) => {
  const responce1100 = useMediaQuery({ query: "(min-width: 1100px)" });
  const responce780 = useMediaQuery({ query: "(min-width: 780px)" });
  const responce480 = useMediaQuery({ query: "(min-width: 480px)" });

  useEffect(() => {
    res1100(responce1100);
    res780(responce780);
    res480(responce480);
  }, [responce1100, res1100, responce780, res780, responce480, res480]);

  return (
    <Router>
      <Global />
      <AppStyle>
        <Switch>
          <Route path="/" component={Fest} exact />
          <Route path="/direct" component={Direct} />
          <Route path="/cart/:id" component={Cart} />
        </Switch>
      </AppStyle>
    </Router>
  );
};

const mapDispatchToProps = { res1100, res780, res480 };

export default connect(null, mapDispatchToProps)(App);
