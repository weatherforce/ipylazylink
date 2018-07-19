var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');


var LazyLinkView = widgets.DOMWidgetView.extend({

    initialize: function() {
        widgets.DOMWidgetView.prototype.initialize.apply(this, arguments);
        this.model.on('change:href', this.href_changed, this);
        ["text", "title", "target", "download", "type"].forEach(function(attrName) {
          this.model.on('change:' + attrName, this.render, this);
        }, this);
    },

    render: function() {
        console.log("render");
        this.el.innerHTML = "";
        this.link = document.createElement("a");
        this.link.setAttribute("href", this.model.get("href"));
        this.link.classList.add("ipylazylink");
        ["title", "target", "download", "type"].forEach(function(attrName) {
          if(this.model.get(attrName) !== "") {
            this.link.setAttribute(attrName, this.model.get(attrName));
          }
        }, this);
        this.downloadAttributeSetByUser = (this.model.get("download") !== "");;
        var textNode = document.createTextNode(this.model.get("text"));
        this.link.appendChild(textNode);
        this.el.appendChild(this.link);
    },

    href_changed: function() {
        this.link.setAttribute("href", this.model.get("href"));
        if (!this.downloadAttributeSetByUser) {
          this.setDownloadAttributeFromHref();
        }
        this.link.click();
    },

    setDownloadAttributeFromHref: function() {
        let path = this.model.get("href"),
            parts = path.split("/"),
            lastIndex = parts.length - 1;
            filename = parts[lastIndex];
        this.link.setAttribute("download", filename);
    },
    
    events: function() {
        return {'click': '_handleClick'}
    },
    
    _handleClick: function(event) {
        if (this.model.get("href") === "#") {
            event.preventDefault();
            // Send click event to kernel
            this.send({event: 'click'});
        }
    }
});


module.exports = {
    LazyLinkView : LazyLinkView,
};
