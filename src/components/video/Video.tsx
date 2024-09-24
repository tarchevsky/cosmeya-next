import { VideoProps } from '@/types'

const Video = ({
	width,
	height,
	src,
	type,
	controls,
	loop,
	autoPlay,
	muted
}: VideoProps) => {
	return (
		<video
			width={width}
			height={height}
			controls={controls}
			loop={loop}
			autoPlay={autoPlay}
			muted={muted}
			preload='none'
		>
			<source src={src} type={type} />
			Your browser does not support the video tag.
		</video>
	)
}

export default Video
