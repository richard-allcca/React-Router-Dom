# React Router v6 - Guía práctica desde CERO | Tutorial

- ufff este contenido es completo sobre el uso de React Router V6

## Video Tutorial

[![React Router v6 - Guía práctica desde CERO | Tutorial](https://img.youtube.com/vi/KKXFmzr0nKk/0.jpg)](https://www.youtube.com/watch?v=KKXFmzr0nKk "React Router v6 - Guía práctica desde CERO | Tutorial")

## Para iniciar la aplicación en modo desarrollo, usar los siguientes scripts

## Dependencias 

      npm install
      npm start

### estilos usados en index.html

[Reset css](https://github.com/mblode/marx)

## Hooks React Router

- useParams() para obtener valores de la url
- ejemplo en User.jsx

- useNavigate() para redireccionar
- ejemplo en user.jsx

- useSearchParams() - ejemplo en users.jsx
1. searchParams.get("nameParams") permite obtener los params de la url
2. setSearchParams({nameParams:newValue}) modifica el valor de un param en la url 

- useLocation() tiene toda la información del la pagina actual (hash,key,pathname,search,state)
