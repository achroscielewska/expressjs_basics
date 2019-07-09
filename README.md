# bookshelfAPI

Description TO_DO

## APP set up

### Init node.js
in new project folder run `npm init`

### install following libraries
* [express](https://www.npmjs.com/package/express)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [body-parser](https://www.npmjs.com/package/body-parser) //https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express

### modify package.json file
put in `package.json` file `"start:server": "nodemon server.js"`

### add gitignore file

### add server.js file

### in `./src/app/app` folder
add new file `app.js`

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

### run server
`npm run start:server`
The message "[nodemon] starting `node server.js`" should show up
