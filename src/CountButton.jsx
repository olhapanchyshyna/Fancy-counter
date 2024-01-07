import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'

export default function CountButton({ setCount, type }) {
	
	return (
		<button
			className='count-btn'
			onClick={() => {
				{
					type === 'minus'
						? setCount(prev => prev > 0 ? prev - 1 : 0)
						: setCount(prev => prev < 10 ? prev + 1 : 10)
				}
			}}
		>
			{type === 'minus' ? (
				<MinusIcon className='count-btn-icon' />
			) : (
				<PlusIcon className='count-btn-icon' />
			)}
		</button>
	)
}
