var ipylazylink = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'ipylazylink',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'ipylazylink',
          version: ipylazylink.version,
          exports: ipylazylink
      });
  },
  autoStart: true
};

