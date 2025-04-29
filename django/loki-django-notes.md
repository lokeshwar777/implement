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
9. JS as static files for event handling
10. `python3 manage.py createsuperuser` - Create Admin + configuration
11. Create Models
12. `python3 manage.py makemigrations appName` - create migrations
13. `python3 manage.py migrate` - apply migrations
14. Use ORM
15. `python manage.py shell` - Create and persist a Django model instance
16. Create a `referenceApp` - a go-to place for examples from various sources
17. Relationship in models
18. Admin Dashboard and Content Management
19. Dynamic content rendering
20.
21. `deactivate` - exit virtual environment

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

## Selfish Things

``` HTML
<a href='/route'> </a> // plain HTML
<a href='{% url 'url_name' params %}'> </a> // named URL from url file

// examples
<a href="{% url 'posts:all_posts' %}"> // requires `app_name = 'posts'` namespace in the urls file 
```
