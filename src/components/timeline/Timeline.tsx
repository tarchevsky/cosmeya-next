import Image from 'next/image'

const Timeline = () => {
	return (
		<div className={'cont mb-16'}>
			<h3>Как мы работаем?</h3>
			<Image
				src={'/timeline.png'}
				alt={'Timeline'}
				width={1900}
				height={800}
				className={'object-cover'}
			/>
		</div>
	)
}

export default Timeline
