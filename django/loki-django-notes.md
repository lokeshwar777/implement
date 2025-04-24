# Notes

## Steps followed

1. `python3 -m venv .venv` - create virtual environment using python in the current dir
2. `source .venv/bin/activate` - activate the virtual environment (`source .venv/Scripts/activate` for windows)
3. `django-admin startproject lokiProject` - create a django project named `lokiProject`
4. `python3 manage.py runserver` - start the app(server)
5. Create Routes and render static files using templates(HTML) and static(CSS) dirs using template engine
6. `python3 manage.py startapp lokiApp` - creat a django app named `lokiApp` (basic files or boilerplate)
7. Add Layout templates using static loading
8. Integrate tailwind with django - [docs](https://django-tailwind.readthedocs.io/en/latest/installation.html)
9. `python3 manage.py createsuperuser` - Create Admin + configuration
10. Create Models and apply migrations
11. Use ORM
12. Dynamic content rendering
13.
14. `deactivate` - exit virtual environment

## Observations or Terms

- "(.venv) folderName ➜ " - this indicates the virtual environment is activated
- constant config - tell the project whenever you make any changes
- model - the single, definitive source of information about your data.
- migrate - applies model changes to the database using migration files
- wsgi - web server gateway interface (traditional + synchronous)
- asgi - asynchronous server gateway interface (modern + synchronous + asynchronous)
- Template tags - {% (load,static,includes,extends,url,block) %}
- files - manage.py,admin.py,asgi.py,settings.py,urls.py,views.py,wsgi.py,apps.py,forms.py,models.py,tests.py
- Form vs ModelForm
