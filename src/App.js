import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Fest from "./pages/fest.jsx";
import Direct from "./pages/direct.jsx";
import Cart from "./pages/cart.jsx";
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

function App() {
  return (
    <Router>
      <Global />
      <AppStyle>
        <Switch>
          <Route path="/" component={Fest} exact />
          <Route path="/direct" component={Direct} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </AppStyle>
    </Router>
  );
}

export default App;
