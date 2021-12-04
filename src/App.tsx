import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router";
import { EDITOR } from "./constants/path";
import Editor from "./pages/Editor/index";
import { ChakraProvider } from "@chakra-ui/react"


function App() {
  return (
    <ChakraProvider>
     <BrowserRouter>
      <Switch>
        <Route exact path={EDITOR} component={Editor}/>
        <Redirect to={EDITOR}/>
      </Switch>
     </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
