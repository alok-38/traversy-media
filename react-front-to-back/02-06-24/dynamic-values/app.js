const app = document.getElementById("app");

function App() {
	const title = "Blog title";
	const body = "This is a blog post";

	return (
		<div>
			<h1>{title}</h1>
			<p>{body}</p>
		</div>
	)
}

const root = ReactDOM.createRoot(app);
root.render(<App />);
