
import { todoUrl } from './urls'
//import { setCartAction, addProductById } from './actions'
// API methods

// создаем функцию проверки ответа на `ok`
const checkResponse = (res) => {
  if (res.ok || res.status === 401 || res.status === 403) {
    return res.json();
  }
  // прокидываем ошибку, чтобы она попала в `catch`
  return Promise.reject(`Ошибка ${res.status}`);
};

// создаем функцию проверки на `success`
const checkSuccess = (res) => {
  if (res && res.success) {
    return res;
  }
  // нпрокидываем ошибку наверх, чтобы она попала в `catch`
  return Promise.reject(`Ответ не success: ${res}`);
};

// создаем универсальную фукнцию запроса с проверкой ответа и `success`
// url для запроса храним в urls.jsx, options - параметры запроса (PUT, POST, ... )
export const request = (url, options) => { 
  return fetch(url, options)
    .then(checkResponse)
    .then(checkSuccess);
};







    //Get /list
    export function getTodoList() {
        return request(todoUrl).then(res=>res.json());
    }

    //POST 
    export function addTodo( name ) {

        return request(todoUrl,
            {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                //mode: 'cors', // no-cors, *cors, same-origin
                //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                //credentials: 'same-origin', // include, *same-origin, omit
                //headers: {
                //    'Content-Type': 'application/json'
                //},
                //redirect: 'follow', // manual, *follow, error
                //referrerPolicy: 'no-referrer', // no-referrer, *client
                body: JSON.stringify({ name: 'React POST Request Example' })
                // body data type must match "Content-Type" header
            }).then((data) => {
                console.log(data); // JSON data parsed by `response.json()` call
            });//.then(res => res.json());
    }


