import { useState } from 'react'
import Count from './Count'
import CountButton from './CountButton'
import ResetButton from './ResetButton'
import Title from './Title'

export default function Card() {

	const [count, setCount] = useState(0);

	return (
		<div className="card">
			<Title/>
			<Count count={count}/>
			<ResetButton  setCount={setCount} count={count}/>
			<CountButton setCount={setCount}/>
		</div>
		
	)
}
