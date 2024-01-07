export default function Title({ locked }) {
	return <h1 className='title'>{locked ? 'Limit reached' : 'Fancy counter'}</h1>
}
