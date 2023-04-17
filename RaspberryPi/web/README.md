# RaspberryPi Web Page

## Setup

### Requirements

1. Install [python3](https://www.python.org/downloads/) on your operating system.

2. If [pip](https://pip.pypa.io/en/stable/installation/) or [venv](https://docs.python.org/3/library/venv.html#module-venv) are not included with python3, then search for and install the package from your system repository.
	* For example, [Debian buster](https://www.debian.org/releases/buster/) has [python3-pip](https://packages.debian.org/buster/python3-pip) for pip and [python3-venv](https://packages.debian.org/buster/python3-venv) for the virtualvenv module that provides venv.

### Create Python environment

1. Create the virtual environment using the following commands:
```
$ cd RaspberryPi
$ python3 -m venv web/env
```

2. Install dependencies in the virtual environment with the following commands.
```
$ . web/env/bin/activate
$ pip install -r web/requirements.txt
```

## Run Page for Development
1. First, run the RaspberryPi backend.

2. Activate the virtual environment prepared during setup.
```
$ cd RaspberryPi
$ . web/env/bin/activate
```

3. Run the web page for development.
```
$ python3 -m streamlit run web/app.py
```

The web page is accessible by browsers at the server's ip address, port 8501.
```

## Resources
* Pip. Installation. https://pip.pypa.io/en/stable/installation/
* Python 3. Download Python. https://www.python.org/downloads/
* Streamlit. Installation.
	Refer to this page if streamlit reports missing OS dependencies.
	* https://docs.streamlit.io/library/get-started/installation
* Virtualvenv. About. https://docs.python.org/3/library/venv.html#module-venv