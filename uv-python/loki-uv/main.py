from fastapi import FastAPI
import uvicorn

app = FastAPI()


@app.get('/')
async def root():
    return {'message': 'This is the message from root function get route'}


def main():
    print("Hello from loki-uv!")
    uvicorn.run(app, host='127.0.0.1', port=8000)


if __name__ == "__main__":
    main()
