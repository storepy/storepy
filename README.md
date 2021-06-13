# marqetIntl Django Boilerplate Project

A more elabborate version of the [django-react-boilerplate](https://github.com/marqetintl/django-react-boilerplate)

### How to use

In your working directory:

```bash
git clone https://github.com/marqetintl/marqetintl-boilerplate.git
```

Next, create a virtual environment called `env` and activate it with:

```bash
cd marqetintl-boilerplate
python3 -m venv env
source env/bin/activate
```

> If the virtual environment name is not `env`, remember to add it to the `.gitignore` file.

Install dependencies:

```bash
pip3 install -r requirements.txt
cd client/
yarn
```

Build the project and run the server

```bash
./manage.py build
./manage.py runserver
```

Finally, open your browser and navigate to `http://127.0.0.1:8000/`.
