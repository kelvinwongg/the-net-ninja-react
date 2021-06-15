import { useState } from "react";

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('mario');
	const [isPending, setIsPending] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const blog = { title, body, author };

		setIsPending(true);

		fetch('http://localhost:8000/blogs', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog)
		}).then(() => {
			setIsPending(false);
		});
	}

	return (
		<div className="create">
			<h2>Add a new blog</h2>
			<form onSubmit={ handleSubmit }>
				<label>Blog title:</label>
				<input
					type="text"
					required
					defaultValue={ title }
					onChange={ e => setTitle(e.target.value) }
				/>
				<label>Blog body:</label>
				<textarea
					required
					defaultValue={ body }
					onChange={ e => setBody(e.target.value) }
				></textarea>
				<label>Blog author:</label>
				<select
					defaultValue={ author }
					onChange={ e => setAuthor(e.target.value) }
				>
					<option value="mario">Mario</option>
					<option value="yoshi">Yoshi</option>
				</select>
				{ !isPending && <button>Add Blog</button> }
				{ isPending && <button disabled>Adding Blog...</button> }
			</form>
		</div>
	);
}

export default Create;