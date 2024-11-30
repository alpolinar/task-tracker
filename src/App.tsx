import { useState } from "react";
//import { invoke } from "@tauri-apps/api/core";
import "./index.css";
import { v4 as uuidv4 } from "uuid";

function App() {
	//const [greetMsg, setGreetMsg] = useState("");
	//const [name, setName] = useState("");
	//
	//async function greet() {
	//	// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
	//	setGreetMsg(await invoke("greet", { name }));
	//}
	type Todo = Readonly<{
		id: string;
		title: string;
		description: string;
	}>;

	const [todo, setTodo] = useState<ReadonlyArray<Todo>>([
		{
			id: uuidv4(),
			title: "Test",
			description: "test desc",
		},
	]);
	console.log("todo", todo);

	return (
		<main>
			<h1>hello</h1>
			{todo.map((item) => (
				<p key={item.id} className="text-red-400 text-lg">
					{item.title}
				</p>
			))}
		</main>
	);
}

export default App;
