import { useState } from 'react'
import ButtonContainer from './ButtonContainer'
import Count from './Count'
import ResetButton from './ResetButton'
import Title from './Title'

export default function Card() {
	const [count, setCount] = useState(0)
	const locked = count === 10 || count === 0;
	console.log(locked)

	return (
		<div className={`card ${locked ? 'card--limit' : ''}`}>
			<Title locked={locked}/>
			<Count count={count} />
			<ResetButton setCount={setCount} count={count} />
			<ButtonContainer setCount={setCount} />
		</div>
	)
}
