import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	// Simulate API using json-server:
	// npx json-server --watch data/db.json --port 8000 --delay 1000
	useEffect(() => {
		fetch('http://localhost:8000/blogs')
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setBlogs(data);
				setIsLoading(false);
			})
	}, []);

	return (
		<div className="home">
			{ isLoading && <div>Loading...</div> }
			{ blogs && <BlogList blogs={ blogs } title="All Blogs!" /> }
		</div>
	)
}

export default Home
