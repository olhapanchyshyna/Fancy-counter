import { useEffect, useState } from 'react'
import ButtonContainer from './ButtonContainer'
import Count from './Count'
import ResetButton from './ResetButton'
import Title from './Title'

export default function Card() {
	const [count, setCount] = useState(0)
	const locked = count === 10 || count === 0

	useEffect(() => {
		function handleKeydown(e) {
			if (e.code === 'Space' && count < 10) {
				setCount(count + 1)
			}
		}
		window.addEventListener('keydown', handleKeydown)

		return () => {
			window.removeEventListener('keydown', handleKeydown)
		}
	}, [count])

	return (
		<div className={`card ${locked ? 'card--limit' : ''}`}>
			<Title locked={locked} />
			<Count count={count} />
			<ResetButton setCount={setCount} />
			<ButtonContainer setCount={setCount} />
		</div>
	)
}
