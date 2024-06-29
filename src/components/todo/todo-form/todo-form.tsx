import { useState } from 'react';
import { addTodo }  from '../../utils/api';



interface TodoFormProps {
    onAdd(title: string): void
}

//TodoList
export function TodoForm(props:TodoFormProps){

    const [title, setTitle] = useState<string>('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

        setTitle(event.target.value);
    };

    const keyPressHandler = (event: React.KeyboardEvent) => {
        //отработает при нажатии на  Enter
        if (event.key === 'Enter') {
            //Отправка задачи в БД
            /*
            addTodo(title).then((data) => {
                console.log(data);
            });
            */
            props.onAdd(title);
            setTitle('');
        }
    }

    return (
        <>
            <h1>
                Лист дел
            </h1>
            <div className="input-field mt2">
                <input
                    onChange={changeHandler}
                    value={title}
                    onKeyPress={keyPressHandler}
                    type="text"
                    id="title"
                    placeholder="Ввеите название дела"
                />
                <label
                    htmlFor="title"
                    className="active">
                    Введите название дела
                </label>

            </div>
        </>
    );
}