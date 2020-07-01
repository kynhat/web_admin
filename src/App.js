import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {  BrowserRouter,Route, Switch, Link } from "react-router-dom";
import _Admin from "./Layout/trangadmin";
import _Dangky from "./Layout/trangdangky";
import _Nguoidung from "./Layout/trangnguoidung";
import _Phong from "./Layout/trangphong";
import login from "./Layout/login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
          {/* <Route exact path="/admin" component={_Admin} /> */}
          {/* <Route exact path="/dangky" component={_Dangky} /> */}
         
          {/* <Route exact path="/phong" component={_Phong} /> */}
            <Route  exact path="/" component={login}/>
            <Route exact path="/nguoidung" component={_Nguoidung} />
            <Route exact path="/phong" component={_Phong} />
            
            {/* <PrivateRoute path='/nguoidung' component={_Nguoidung} /> */}
            
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
