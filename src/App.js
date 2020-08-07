import React from 'react';
import {BrowserRouter, Switch , Route, Redirect} from 'react-router-dom';
import Home from './Pages/PageHome';
import Blog from './Pages/PageBlog';
import Nosotros from './Pages/PageNosotros';
import Contacto from './Pages/PageContacto';


function App() {
  return (
    <BrowserRouter>
    <Switch>
   
     <Route  exact path = "/home" component = {Home}/>
     <Route  exact path = "/blog" component = {Blog}/>
     <Route  exact path = "/nosotros" component = {Nosotros}/>
     <Route  exact path = "/contacto" component = {Contacto}/>
     <Redirect  from ="/" to = "/home" />

    </Switch>
   </BrowserRouter>
  );
}

export default App;
