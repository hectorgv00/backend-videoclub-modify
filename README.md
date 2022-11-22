* *Endpoints*

 * Para la comprobacion del proyecto se deberá poner la siguiente dirección en postman/similares
      ````
      localhost:3000
      ````
      
      añadiendo el resto de la ruta dependiendo del endpoint deseado

    * **moviesControllers.js**: En este archivo creamos las funciones de cada endpoint:
        * **GET getMoviesID**: Obtenemos una película por su ID. La ruta de acceso será 
        ````
        /movies/id/:id 
        ````
        * **GET getMoviesTopRated**: Obtenemos las películas más valoradas. La ruta de acceso será 
        ````
        /movies/toprated
        ````
        * **GET getMoviestitle**: Obtenemos un listado de las películas filtrado por el titulo de la película. La ruta de acceso será 
        
        ````
        /movies/title/:title
        ````

        * **GET getMoviesGenre**: Obtenemos un listado de las películas filtrado por el genero de la película. La ruta de acceso será 
        ````
        /movies/genre/:genre
        ````

    * **seriesControllers.js**: En este archivo creamos las funciones de cada endpoint:

        * **GET getSeriesID**: Obtenemos una serie por su ID. 
        
        La ruta de acceso será 
        ````
        /series/:id 
        ````
        <br>

        * **GET getSeriesTopRated**: Obtenemos las series más valoradas. 
        
        La ruta de acceso será 
        ````
        /series/toprated
        ````
        <br>

        * **GET getSeriestitle**: Obtenemos un listado de las series filtrado por el titulo. 
        
        La ruta de acceso será 
        
        ````
        /series/title/:title
        ````

        <br>

        * **GET getSeriesEmitido**: Obtenemos un listado de las series que tendrán un capítulo en los próximos 7 días. 
        
        La ruta de acceso será 
        ````
        /series/emision/
        ````
        <br>

        * **GET getSeriesCinema**: Obtenemos un listado de las series que tendrán un pase en un cine o teatro. 
        
        La ruta de acceso será 
        ````
        /series/cinema/
        ````

        <br>

    * **UsersControllers.js**: En este archivo creamos las funciones de cada endpoint:
        * **POST register**: Gestionamos el registro en nuestra API. Existe un mínimo de seguridad en la contraseña creada (mínimo 8 caracteres). 
        
        Deberemos pasarle por el body como mínimo:
        ````
        email
        name
        password
        document
        ````
        siendo surname y address opcionales
        
        La ruta de acceso será 
        ````
        /users/register
        ````
        <br>

        * **POST login**: Gestionamos el login en nuestra API.
        
        Deberemos pasarle por el body:
        ````
        email
        password
        ````
         La ruta de acceso será 
        ````
        /users/login
        ````
        En este punto recibiremos un JWT que deberemos poner en la cabezera "Authorization" para poder acceder al resto de opciones 

        <br>

        * **GET findAll**: Obtenemos un listado de todos los usuarios (securizado para que solo pueda acceder un administrador).La ruta de acceso será 
        ````
        /users/all
        ````
        <br>

        * **GET findcurrentuser**: Obtenemos la información del usuario que esté logueado. La ruta de acceso será 
        ````
        /users/findcurrentuser
        ````
        <br>

        * **PUT modify**: Actualizamos el usuario que esté logueado. Deberemos pasarle por el body:
        ````
         email
         ````
        Y los datos a modificar, que pueden ser: 

        ````
        name
        surname
        address
         ````
        La ruta de acceso será 
        ````
        /users/modify
        ````
        
        <br>
        
        * **DELETE deleteUser**: Eliminamos un usuario por su email. Solamente lo puede hacer el Admin. La ruta de acceso será 
        ````
        /users/deleteprofile/:email
        ````

        <br>

    * **loansControllers.js**: En este archivo creamos las funciones de cada endpoint:
        * **GET allloans**: Obtenemos un listado de todos los pedidos realizados (securizado para que solo pueda acceder un administrador).La ruta de acceso será 
        ````
        /loans/alloans/
        ````

        <br>

        * **POST newloan**: Creamos un pedido nuevo. 
        
        Deberemos pasarle por el body:

        ````
        article
        ````

         Solamente hemos de pasarle el id del arículo queremos por el body ya que la información del usuario la tenemos en el token y la sacamos de ahí. 
         
         La ruta de acceso será 
        ````
        /loans/newloan/
        ````

        <br>

        * **GET myloans**: El usuario podrá ver su lista de pedidos. La ruta de acceso será 
        ````
        /loans/myloans/
        ````

        <br>

        * **PUT modifyloan**: El usuario podrá modificar su pedido.
        
        Deberemos pasarle por body:
        
        ````
         articuloNuevo (Articulo por el que se cambia)
         articuloViejo (Artículo que se cambia) 
         ````

         La ruta de acceso será 
        ````
        /loans/modifyloan/
        ````



# backend-videoclub-modify
