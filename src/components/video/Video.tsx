import { VideoProps } from '@/types'

const Video = ({
	width,
	height,
	src,
	type,
	controls = false,
	loop = true,
	preload = 'none',
	muted = true,
	autoPlay = true,
	playsInline = true,
	poster,
	...rest
}: VideoProps) => {
	return (
		<video
			width={width}
			height={height}
			controls={controls}
			loop={loop}
			autoPlay={autoPlay}
			muted={muted}
			preload={preload}
			playsInline={playsInline}
			{...rest}
		>
			<source src={src} type={type} />
			Your browser does not support the video tag.
		</video>
	)
}

export default Video
