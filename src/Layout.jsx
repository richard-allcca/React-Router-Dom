import { Link, Outlet } from "react-router-dom";


export function Layout() {

   return (
      <main>

         <nav>
            <Link to="/">Home</Link>
            | <Link to="/users">Users</Link>
            | <Link to="/about">About</Link>
         </nav>

         <section>
<Outlet />
         </section>

      </main>
   );
}
// Notas
// Este componente tiene el nav y el Outlet 
// El Outlet es el componente que se renderiza en el section