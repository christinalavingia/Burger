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
