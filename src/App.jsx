import styles from './App.module.css';
import { createSignal, For, createEffect } from 'solid-js';

import Card from './components/Card'

const App = () => {
  const [todos, setTodos] = createSignal([])

  let title
  let text

  createEffect(() => {
    console.log(todos())
  })

  return (
    <div class={styles.App}>
      <h1>Todo's</h1>
      <input ref={title} type="text" placeholder="Title" class={styles.input} />
      <input ref={text} type="text" placeholder="Description" class={styles.input} />

      <button onClick={() => {
        setTodos([...todos(), {title: title.value, description: text.value }]);
        text.value = ''; title.value = ''
      }}
        class={styles.input}>
        +
      </button>

      <div class={styles.cardGroup}>

        <For each={todos()}>
          {(todo) =>
            <>
              <Card title={todo.title} desc={todo.description}>
                <button onClick={() => {
                  let i = todos().indexOf(todo)
                  todos().splice(i, 1)
                  setTodos([...todos()])
                }}>x</button>
                
              </Card>

            </>
          }
        </For>
      </div>
    </div>
  );
}

export default App;