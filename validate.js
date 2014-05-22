var Bind = require('github/jillix/bind');
var Events = require('github/jillix/events');

function init (config) {

    var self = this;
    // prepare module
    self.config = config;

    // listen to external events
    Events.call(self, config);

    self.on('validate', validate);

    self.emit('ready');
}

function validate () {
    alert();
}

module.exports = init;