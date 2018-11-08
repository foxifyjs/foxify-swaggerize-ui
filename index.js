/**
 * Created by GROOT on 2017/3/28.
 */
const path    = require('path');
const Foxify = require('foxify');

module.exports = function swaggerUi(options) {
    var router = new Foxify.Router();

    router.use(Foxify.static(path.resolve(__dirname, 'static')));

    return router;
};