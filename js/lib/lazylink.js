var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');


var LazyLinkView = widgets.DOMWidgetView.extend({

    render: function() {
        this.el.innerHTML = "";
        this.link = document.createElement("a");
        this.link.setAttribute("href", this.model.get("href"));
        this.link.setAttribute("title", this.model.get("title"));
        this.link.setAttribute("target", this.model.get("target"));
        var textNode = document.createTextNode(this.model.get("text"));
        this.link.appendChild(textNode);
        this.el.appendChild(this.link);
        this.model.on('change:href', this.href_changed, this);
        this.model.on('change:text change:title change:target', this.render, this);
    },

    href_changed: function() {
        this.link.setAttribute("href", this.model.get("href"));
        this.link.click();
    },
    
    events: function() {
        return {'click': '_handleClick'}
    },
    
    _handleClick: function(event) {
        if (this.model.get("href") === "#") {
            event.preventDefault();
            this.send({event: 'click'});
        }
    }
});


module.exports = {
    LazyLinkView : LazyLinkView,
};
