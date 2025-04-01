import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

type Props = {
    params: {
        id: string;
    };
};

// export async function GET(request: Request) {
// const id = request.url.slice(request.url.lastIndexOf("/") + 1);

export async function GET(request: Request, { params: { id } }: Props) {
    const res = await fetch(`${DATA_SOURCE_URL}/${id}`);

    const todo: Todo = await res.json();

    if (!todo.id) return NextResponse.json({ message: "todo not found" });

    return NextResponse.json(todo);
}
