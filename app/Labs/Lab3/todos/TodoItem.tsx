"use client";
import { ListGroupItem } from "react-bootstrap";

interface Todo {
  id: number;
  done: boolean;
  title: string;
  status: string;
}

const TodoItem = ({
  todo = { id: 0, done: true, title: "Buy milk", status: "COMPLETED" },
}: {
  todo: Todo;
}) => {
  return (
    <ListGroupItem>
      <input type="checkbox" className="me-2" defaultChecked={todo.done} />
      {todo.title} ({todo.status})
    </ListGroupItem>
  );
};
export default TodoItem;
