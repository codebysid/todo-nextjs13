import AddTodo from "./components/AddTodo";
import DisplayTodos from "./components/DisplayTodos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-10 p-40 items-center">
     <AddTodo/>
     <DisplayTodos/>
    </main>
  )
}
