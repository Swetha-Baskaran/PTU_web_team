import { useEffect } from "react";
import "./App.css";
import Card from "./Components/card";
import swetha from "./assets/swetha.jpg";
import rahul from "./assets/rahul.jpeg";
import ravi from "./assets/ravi.jpeg";
import Aos from "aos";

function App() {
	const developers = [
		{
			name: "Rahul",
			img: rahul,
		},
		{
			name: "Swetha",
			img: swetha,
		},
		{
			name: "Ravi",
			img: ravi,
		},
		{
			name: "Rahul",
			img: rahul,
		},
		{
			name: "Swetha",
			img: swetha,
		},
		{
			name: "Ravi",
			img: ravi,
		},
		{
			name: "Rahul",
			img: rahul,
		},
		{
			name: "Swetha",
			img: swetha,
		},
		{
			name: "Ravi",
			img: ravi,
		},
		{
			name: "Rahul",
			img: rahul,
		},
		{
			name: "Swetha",
			img: swetha,
		},
		{
			name: "Ravi",
			img: ravi,
		},
		{
			name: "Rahul",
			img: rahul,
		},
		{
			name: "Swetha",
			img: swetha,
		},
		{
			name: "Ravi",
			img: ravi,
		},
		{
			name: "Rahul",
			img: rahul,
		},
		{
			name: "Swetha",
			img: swetha,
		},
		{
			name: "Ravi",
			img: ravi,
		},
		{
			name: "Rahul",
			img: rahul,
		},
		{
			name: "Swetha",
			img: swetha,
		},
		{
			name: "Ravi",
			img: ravi,
		},
	];
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<>
			<h1 style={{textAlign: "center", padding: "2rem 0 1rem 0"}}>PTU Web Team</h1>
			<p style={{textAlign: "center", paddingBottom: "2rem"}}>Pillars of Puducherry Technological University</p>
			<div className='App'>
				{developers.map((e, index) => {
					return <Card image={e} key={index} />;
				})}
			</div>
		</>
	);
}

export default App;
