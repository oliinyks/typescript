import { FC, useEffect, useState } from "react";
import { ITodo } from "../types/types";
import axios from "axios";
import List from "../components/List";
import TodoItem from "../components/TodoItem";


const TodoPage: FC = () => {
  const [todo, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
      <List
        items={todo}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
  );
};

export default TodoPage;
