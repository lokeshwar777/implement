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
10. Create Models
11. `python3 manage.py makemigrations appName` - create migrations
12. `python3 manage.py migrate` - apply migrations
13. Use ORM
14. Dynamic content rendering
15. JS as static files for event handling
16. Create a `referenceApp` - a go-to place for examples from various sources
17. Relationship models with admin management
18. `deactivate` - exit virtual environment

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
- {{ vairable interpolation }} - in HTML using django
- {% template %}
- name="" in urls - reverse lookup
- `python -m pip install Pillow` - for images
- {% url 'route' params %}
