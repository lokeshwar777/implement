python for windows
python3 for linux / macOS


# install packages
pip install packageName
pip uninstall packageName
pip show packageName
pip list
pip freeze
'pip install -U pip or pip install --upgrade pip'

# using pip
'python3 -m venv loki_venv'
'python3 -m venv .venv'  # good practice or convention

pip list > requirements.txt
'pip install -r requirements.txt'  # install packages from requirements.txt
'python -m pip install Django'

# using uv
pip install uv
uv venv
uv pip install Django
django-admin startproject lokiDjango
python manage.py runserver

source .venv/bin/activate  # activate
deactivate  # deactivate

uv pip install fastapi uvicorn python-multipart  # fast development
