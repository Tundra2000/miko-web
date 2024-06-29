
type TodoListProps = {
    todos: any[]
}

export function TodoList(props:TodoListProps) {
    const a = props?.todos[0];
    return (
        <ul>
            {props.todos.map(todo => {
                return (
                    <li className="todo" key={todo.Id} >
                        <label>
                            <input type="checkbox" />
                            <span className="`text text_type_main-medium text_color_inactive">{todo.Title}</span>
                            <i className="material-icons red-text">delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    );
}