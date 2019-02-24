# Burger

### Link to the app in Heroku: 


## Objective

This simple app is designed in the MVC (Model, View, Controller) Framework. Users can devour different pre-defined burgers by clicking on the "Devoured" button. They can add buttons via the form at the bottom of the page. While simplistic and not practical in terms of functionality, the complexity lies in the separation of client- and server-side logic, the consistency of routes between different files, exporting of objects across files, use of templating engines (Handlebars) and various dependencies.

## Technology

To achieve the MVC Framework, the files are nested in the following structure:

```.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars  
```
#### Within the Config Folder:

* The `connection.js` file contains the mysql connection featuring the requirement of the mysql npm package and the connection to the database.
* The `orm.js` file contains the connection needed for the client's actions to be reflected in mysql. These are managed in the orm object and include selectAll to display all burgers on the DOM, insertOne to add a burger to the database and DOM as well as updateOne to alter the position and truthiness of the burger being devoured. 

#### Within the Controllers Folder:

* The `burgers_controller.js` file contains the Express routes and requires Express to handle client requests and reflect them in the DOM with the proper refreshing of the page and redirecting of routes.

#### Within the DB Folder:

* The `schema.sql` and `seeds.sql` files contain the database information seeded in mysql workbench. These values are altered and some are added depending on the client's interactions on the page (clicking the Devour This button and adding a new burger, respectively).

#### Within the Models Folder:

* The `burger.js` file manages all callbacks that occur when different routes are hit based on the client's interactions with the DOM. It requires the orm object from `orm.js` and creates and exports the burger object containing the required callbacks.

#### Within the Node_Modules Folder:
* The various folders within Node_Modules are created with each npm i command. These include the following explicit packages and their related dependencies:
    * Express
    * Express Handlebars
    * BodyParser
    * Mysql
    * Method Override
Note that Method Override allows us to not need a client-side JavaScript file in the Public folder.

#### Within the Public Folder:
* This folder is empty. Within it there's an assets folder that contains the CSS file for style along with an image of a burger for the DOM.

#### Within the Views Folder:
* This `index.handlebars` file contains the HTML that's fed into `main.handlebars` within the layouts subfolder. The folder names of "views" and "layouts" are prescribed by Handlebars. The `main.handlebars` file obtains its body via the three handlebars syntax: {{{body}}}

The `.gitignore` file contains the node_modules folder so its various files and dependencies are not sent to GitHub. The `package.json` file is initialized with the bash command $ npm init. This command, while not required, makes it easier for those downloading a Github project to easily install all required dependencies.

Lastly, the `server.js` file handles all the npm requirements, sets the PORT to view the page locally and gets the app: express() set up with the correct requirements, routes and file configuration. 
