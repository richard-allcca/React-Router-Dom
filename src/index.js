import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { About } from "./routes/About";
import { Home } from "./routes/Home";
import { User } from "./routes/User";
import { Users } from "./routes/Users";


ReactDOM.render(
   <BrowserRouter>

      <Routes>

         <Route path="/" element={ <Layout /> }>

            <Route index element={ <Home /> } />

            <Route path="users" element={ <Users /> }>
               <Route
                  index
                  element={ <div>Seleccione un usuario</div> }
               />
               <Route
                  path=":userId"
                  element={ <User /> }
               />
            </Route>

            <Route path="about" element={ <About /> } />

            <Route path="*" element={ <Navigate replace to="/" /> } />

         </Route>

      </Routes>

   </BrowserRouter>,
   document.getElementById("root")
);

// NOTE 
// index: propiedad de "Route" que use el path que sea ruta padre
// Navigate: cuando lo uses como redirection usa la propiedad "replace"
