import { ResetIcon } from '@radix-ui/react-icons'

export default function ResetButton({ setCount }) {
	return (
		<div
			className='reset-btn'
			onClick={e => {
				setCount(0)
				e.currentTarget.blur()
			}}
		>
			<ResetIcon className='reset-btn-icon' />
		</div>
	)
}
