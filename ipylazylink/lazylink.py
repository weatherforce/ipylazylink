import ipywidgets as widgets
from traitlets import Unicode


@widgets.register
class LazyLink(widgets.Button):
    _view_name = Unicode('LazyLinkView').tag(sync=True)
    _view_module = Unicode('ipylazylink').tag(sync=True)
    _view_module_version = Unicode('0.1.0').tag(sync=True)
    href = Unicode("#").tag(sync=True)
    text = Unicode("Download file").tag(sync=True)
    title = Unicode().tag(sync=True)
    target = Unicode().tag(sync=True)

    def on_click(self, callback, remove=False):

        def callback_wrapper(download_link):
            download_link.href = callback()

        self._click_handlers.register_callback(callback_wrapper, remove=remove)
