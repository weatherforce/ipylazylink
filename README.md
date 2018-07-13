ipylazylink
===============================

Lazy file link widget for Jupyter

Motivation
----------

When you present results in a notebook, you may want to allow users to download
these results on their computer, typically in CSV or Excel format. In order to
do this you would add to your notebook a link that points to a file, using
something like
[FileLink](https://ipython.org/ipython-doc/3/api/generated/IPython.display.html#IPython.display.FileLink).
The problem with this approach is that the file must already exist, so you need to
generate the file even if users never download it. When this file generation takes time and you have several such links, it can significanly slow down execution
of your notebook for something that might never be used.

The `LazyLink` widget aims at solving this problem by providing a link to a
file that doesn't exist yet: a *lazy link*. The file gets created on-demand by a callback
funtion that you provide. That function must return the path to the file that
it creates.

Usage
-----

```python
from ipylazylink import LazyLink

def create_file():
    time.sleep(2)  # Simulate slow computation
    filepath = "output.csv"
    with open(filepath, "w") as fp:
        fp.write("file content")
    return filepath

w = LazyLink(text="Download results as CSV")
w.on_click(create_file)
```


Installation
------------

To install using pip:

    $ pip install git+https://github.com/weatherforce/ipylazylink.git
    $ jupyter nbextension enable --py --sys-prefix ipylazylink


For a development installation (requires npm):

    $ git clone https://github.com/weatherforce/ipylazylink.git
    $ cd ipylazylink
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix ipylazylink
    $ jupyter nbextension enable --py --sys-prefix ipylazylink
