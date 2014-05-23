M.wrap('github/lucaboieru/client-form-validation/dev/validate.js', function (require, module, exports) {
var Bind = require('github/jillix/bind');
var Events = require('github/jillix/events');

function init (config) {

    var self = this;
    // prepare module
    self.config = config;
    self.config.form = config.form || {};
    self.config.form.selector = config.form.selector || "#validate";

    // listen to external events
    Events.call(self, config);

    self.on('validate', validate);

    self.emit('ready');
}

function validate (callback) {

    var self = this;
    var field = "";
    var typeMismatch = "";
    var patternMismatch = "";

    $(self.config.form.selector + " input, " + self.config.form.selector + " textarea").each(function (i) {
    	if (!this.checkValidity()) {
            field = $(this).attr("name");
            typeMismatch = this.validity.typeMismatch;
            patternMismatch = this.validity.patternMismatch;
            return false;
        }
    }).promise().done(function () { callback(field, typeMismatch, patternMismatch); });
}

module.exports = init;
return module; });