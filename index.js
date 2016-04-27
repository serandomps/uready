var serand = require('serand');

var pending;

var ready = false;

serand.on('user', 'ready', function (usr) {
    ready = true;
    if (!pending) {
        return;
    }
    pending();
});

module.exports = function (ctx, next) {
    if (ready) {
        return next();
    }
    pending = next;
};
