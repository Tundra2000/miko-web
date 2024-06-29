import { useState } from "react";
import { TodoForm } from "../../components/todo/todo-form/todo-form";
import { TodoList } from "../../components/todo/todo-list/todo-list";

interface Todo {
  Id: number,
  Title: string,
  CreationDate: number | null,
  CompletionDate: number | null,
  Hashtag: string,
  Complited: boolean
}

export function TodoPage() {
  
    //Должно быть на уровень выше (передаваться параметрами)
    const [todos, setTodos] = useState<Todo[]>([]);

    const addHandler = (title: string) => {
        //console.log('Add New Todo', title);
        const newTodo: Todo = {
            Id: Date.now(),
            Title: title,
            CreationDate: null,
            CompletionDate: null,
            Hashtag: 'hashtag',
            Complited: false
        }
        setTodos([newTodo, ...todos]);
    }
  //------------------------------------
  //Функционал:
  //1) Получение списка дел из бд;
  //2) Функционал сортировки и подсвечивания самых важных (метод квадрата или
  //   другие методы структурирования дел -> из тайм - менеджмента);
  //3) Наглядная инфографика по продуктивности выполнения дел. Сбор статистики по сферам жизни и прогрессу в них.

  return (
    <>
      <h1>Страница со списком дел.</h1>
      <div>
        <TodoForm onAdd={addHandler} />
        <TodoList todos={todos} />
      </div>
    </>
  );
}
