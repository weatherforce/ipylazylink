ipylazylink
===============================

Lazy file link widget for Jupyter

Installation
------------

To install use pip:

    $ pip install ipylazylink
    $ jupyter nbextension enable --py --sys-prefix ipylazylink


For a development installation (requires npm),

    $ git clone https://github.com/weatherforce/ipylazylink.git
    $ cd ipylazylink
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix ipylazylink
    $ jupyter nbextension enable --py --sys-prefix ipylazylink
