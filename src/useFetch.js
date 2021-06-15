import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	// Simulate API using json-server:
	// npx json-server --watch data/db.json --port 8000 --delay 1000
	useEffect(() => {
		fetch(url)
			.then(res => {
				if (!res.ok) {
					throw Error('Could not fetch data from resource')
				}
				return res.json()
			})
			.then(data => {
				setData(data);
				setIsLoading(false);
				setError(null);
			})
			.catch(err => {
				setError(err.message);
				setIsLoading(false);
			})
	}, [url]);

	return { data, isLoading, error }
};

export default useFetch;