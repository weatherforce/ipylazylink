from ._version import version_info, __version__  # NoQA
from .lazylink import LazyLink # NoQA


def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'ipylazylink',
        'require': 'ipylazylink/extension'
    }]
