import { ResetIcon } from '@radix-ui/react-icons'

export default function ResetButton({setCount, count}) {
	return (
		<div className='reset-btn' onClick={()=>{setCount(0)}} >
			<ResetIcon className='reset-btn-icon'/>
		</div>
	)
}
