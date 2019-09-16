var utils = require('utils');

var pending;

var ready = false;

utils.on('user', 'ready', function (token) {
    ready = true;
    if (!pending) {
        return;
    }
    setTimeout(pending, 0);
});

module.exports = function (ctx, next) {
    if (ready) {
        return next();
    }
    pending = next;
};
