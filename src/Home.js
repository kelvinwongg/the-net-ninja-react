import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
		{ title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
		{ title: 'Webdev top tip', body: 'lorem ipsum...', author: 'luigi', id: 3 },
	]);

	const handleDelete = (id) => {
		const newBlogs = blogs.filter(blog => blog.id !== id)
		setBlogs(newBlogs);
	}

	const [name, setName] = useState('mario');

	// Executed (after?) every dependencies render
	useEffect(() => {
		console.log('useEffect ran');
		console.log(name);
	}, [name]);

	return (
		<div className="home">
			<BlogList blogs={ blogs } title="All Blogs!" handleDelete={ handleDelete } />
			<button onClick={ () => setName('luigi') }>change name</button>
		</div>
	)
}

export default Home
