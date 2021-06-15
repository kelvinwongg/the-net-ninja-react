import { useState } from "react";

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('mario');

	return (
		<div className="create">
			<h2>Add a new blog</h2>
			<form>
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
				<button>Add Blog</button>
				<p>{ title }</p>
				<p>{ body }</p>
				<p>{ author }</p>
			</form>
		</div>
	);
}

export default Create;