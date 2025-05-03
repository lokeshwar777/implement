# uv Notes

## Steps followed

- `brew install uv` - install
- `uv init loki-uv` - creates env + pyproject.toml
- `uv add fastapi` - installs fastapi + updates lockfile
- `uv add uvicorn` - install uvicorn
- `uv run main.py` - runs code inside env (no activation)
- `uv build` - create production build
- run a script with flask and requests as a deps
  - `uv run --with 'flask' --with 'requests' sample_script.py` or  
  - `uv add --script sample_script.py 'flask' 'requests' && uv run sample_script.py`
