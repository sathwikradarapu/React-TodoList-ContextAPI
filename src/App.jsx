import AppName from "./components/AppName";
import AppContainer from "./components/AppContainer";
import WelComeMessage from "./components/WelcomeMessage";
import { useState } from "react";
import { useContext } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  /*let initialTodoItems = [
    {
      name: "Buy Milk",
      date: "03/10/2023",
    },
    {
      name: "Buy Boost",
      date: "04/10/2023",
    },
    {
      name: "Buy Horlicks",
      date: "05/10/2023",
    },
  ];*/
  const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (newItem, newItemDueDate) => {
    const newList = [...todoItems, { name: newItem, date: newItemDueDate }];
    setTodoItems(newList);
  };
  const deleteItem = (newItem) => {
    const newList = todoItems.filter((item) => item.name !== newItem);
    setTodoItems(newList);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AppContainer />
        <WelComeMessage></WelComeMessage>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
