import React, { useState, useEffect } from 'react';
const App = () => {
	let response;
	async function fetchData() {
		response = await fetch('http://moviemafia.herokuapp.com/home-page');
		let data = await response.json();
		return data;
	}
	const [count, setCount] = useState(0);
	useEffect(() => {}, [response]);
	const [blockbuster, setBlockbuster] = useState([]);
	useEffect(
		() => {
			fetchData().then(res => {
				setBlockbuster(res.blockbuster_movies);
			});
		},
		[response]
	);

	return (
		<div>
			<h1>you have clicked {count} times!!</h1>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			{blockbuster.map(movie => {
				return <p key={movie.title}>{movie.title}</p>;
			})}
		</div>
	);
};

export default App;
