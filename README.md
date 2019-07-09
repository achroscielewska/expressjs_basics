# bookshelfAPI
Description TO_DO

## Libraries
* [express](https://www.npmjs.com/package/express)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [body-parser](https://www.npmjs.com/package/body-parser) //https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express

## Development server

Run `npm run start:server` for a dev server. The app will automatically reload if you change any of the source files.

## APP set up

1. init package.json - in new project folder run `npm init`
2. install libraries: express, nodemon, body-parser
3. modify package.json file - put in `package.json` file `"start:server": "nodemon server.js"`
4. add gitignore file (copy one from project)
5. add server.js file (copy one from project)
6. in `./src/app/app` folder- add new file `app.js`

```javascript
const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();
 
// CORS configuration https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    next();
})
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
module.exports = app;
```

7. run server `npm run start:server`
The message "[nodemon] starting `node server.js`" should show up
