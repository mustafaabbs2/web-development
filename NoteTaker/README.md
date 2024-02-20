# NoteTaker

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# Repo Structure

- `public\` : This directory typically contains static assets that are publicly accessible, such as HTML files, images, and other resources. Files in this directory are served as-is to the client.

- `src\`: The src directory is where the main source code of the project resides. It usually includes the JavaScript code, CSS stylesheets, and other assets needed to build the application.

- `server\` : This folder contains the backend for the notes, which is served via REST requests

- `package.json` : The `package.json` file is a metadata file for the project. It includes information about the project, such as its name, version, dependencies, and scripts. This file is commonly used in Node.js projects to manage dependencies and configure project settings.

Within `src\`, you find:
- `App.js`: This file likely serves as the main component or entry point of the React application. It may contain the root component of the application, where other components are rendered.

- `index.js`: The index.js file is typically the entry point of the React application. It is responsible for rendering the root component of the application into the DOM and bootstrapping the React application.

- `components\`: The components directory contains reusable UI components that are used throughout the application. These components are typically modular and encapsulate a specific piece of functionality or user interface element.

- `services\`: The services directory may contain utility functions, API services, or other helper modules used by the application. This directory is often used to separate concerns and keep the codebase organized.

## How to Run

- In the project directory, you can run `npm start`. In the `server\` folder, run `npm start` to start the notes service in the backend. (Port 3001)

- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Examples

This is an example of how the `server\` looks. It just serves up a list which can be accessed via REST API calls. Look at `index.js`.

```js
let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]
```

You can use the `test.http` file in the server folder to test out your REST API calls. 

```http
GET http://localhost:3001/api/notes/

###
GET http://localhost:3001/

###
POST http://localhost:3001/api/notes/ HTTP/1.1
content-type: application/json

{
    "name": "a test",
    "time": "Wed, 21 Oct 2015 18:27:50 GMT",
    "content": "This has a body Mustafa has added to test his post function"
}
```


Note!

Set proxy to `proxy": "http://localhost:3001"` in `package.json` if you intend to serve the notes from the client.