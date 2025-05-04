from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()


class Post(BaseModel):
    id: int
    title: str


posts: List[Post] = []


@app.get('/')
def read_root():
    return {"message": "This is the read route"}


@app.get('/posts')
def get_posts():
    return posts


@app.post('/posts')
def add_post(post: Post):
    posts.append(post)
    return post


@app.put('/posts/{post_id}')
def update_post(post_id: int, modified_post: Post):
    for i, x in enumerate(posts):
        if x.id == post_id:
            posts[i] = modified_post
            return modified_post
    return {"Error": "The post you are trying to modify is not found"}


@app.delete('/posts/{post_id}')
def delete_post(post_id: int):
    for i, x in enumerate(posts):
        if x.id == post_id:
            deleted_post = posts.pop(i)
            return deleted_post
    return {"Error": "The post you are trying to delete is not found"}


def main():
    print("Hello from loki-fastapi!")


if __name__ == "__main__":
    main()
