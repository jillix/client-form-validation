M.wrap('github/lucaboieru/client-form-validation/dev/validate.js', function (require, module, exports) {
var Bind = require('github/jillix/bind');
var Events = require('github/jillix/events');

function init (config) {

    var self = this;
    // prepare module
    self.config = config;
    self.config.form = config.form || {};
    self.config.form.selector = config.form.selector || "#validate";
    self.config.form.requiredAttr = config.form.requiredAttr || "data-required";

    // listen to external events
    Events.call(self, config);

    self.on('validate', validate);

    self.emit('ready');
}

function validate (callback) {

    var self = this;
    var hasErrors = false;

    var messages = {
    	mandatory: {
    		de: "Pflichtfeld: ",
    		fr: "Obligatoire: ",
    		it: "Obbligatorio: "
    	}
    };

    $(self.config.form.selector + " [" + self.config.form.requiredAttr + "]").each(function () {
    	if (!$(this).val()) {

    		// TODO this is a hack
    		var name = $(this).attr("name");
    		name = name.slice(5, name.length);

    		var label = $(".label" + name).text();

    		alert(messages.mandatory[M.getLocale()] + label);

    		hasErrors = true;
    		return false;
    	}
    }).promise().done(function () { callback(hasErrors); });
}

module.exports = init;
return module; });