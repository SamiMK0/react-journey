import useFetch from "./useFetch";
export default function App() {

  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <div>
      <ul>
        {data&&data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
