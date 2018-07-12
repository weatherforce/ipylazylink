var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');


var LazyLinkView = widgets.DOMWidgetView.extend({

    render: function() {
        this.el.innerHTML = "<a href='#'>My link</a>";
        this.link = document.createElement("a");
        this.link.setAttribute("href", "#");
        this.link.setAttribute("title", this.model.get("title"));
        var textNode = document.createTextNode(this.model.get("text"));
        this.link.appendChild(textNode);
        this.el.appendChild(this.link);
        this.model.on('change:path', this.path_changed, this);
    },

    path_changed: function() {
        this.link.setAttribute("href", this.model.get("path"));
        this.link.setAttribute("target", "_blank");
        this.link.click();
    },
    
    events: function() {
        return {'click': '_handleClick'}
    },
    
    _handleClick: function(event) {
        if (!this.model.get("path")) {
            event.preventDefault();
            this.send({event: 'click'});
        }
    }
});


module.exports = {
    LazyLinkView : LazyLinkView,
};
