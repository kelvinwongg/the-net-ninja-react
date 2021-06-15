import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	// Simulate API using json-server:
	// npx json-server --watch data/db.json --port 8000 --delay 1000
	useEffect(() => {
		fetch('http://localhost:8000/blogs')
			.then(res => {
				if (!res.ok) {
					throw Error('Could not fetch data from resource')
				}
				return res.json()
			})
			.then(data => {
				setBlogs(data);
				setIsLoading(false);
				setError(null);
			})
			.catch(err => {
				setError(err.message);
				setIsLoading(false);
			})
	}, []);

	return (
		<div className="home">
			{ error && <div>{ error }</div> }
			{ isLoading && <div>Loading...</div> }
			{ blogs && <BlogList blogs={ blogs } title="All Blogs!" /> }
		</div>
	)
}

export default Home
