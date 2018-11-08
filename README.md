### foxify-swaggerize-ui
foxify-swaggerize-ui is an node foxify middleware to show swagger-ui 3 for your local (or external) api.

#### Installation

```
npm i foxify-swaggerize-ui
```

#### Usage

```
const Foxify   = require('foxify');
const app       = new Foxify();
const swaggerUi = require('foxify-swaggerize-ui');

app.use('/api-docs.json', function (req, res) {
  res.json(require('./path/to/swaggerize/docs.json'));
});
app.use('/api-docs', swaggerUi());

app.listen(3000);

```

#### Generate swagger doc.json

[foxify-swagger-generator](https://github.com/foxifyjs/foxify-swagger-generator)