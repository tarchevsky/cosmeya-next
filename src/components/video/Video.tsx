import { VideoProps } from '@/types'
import { useEffect, useRef } from 'react'

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
	const videoRef = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.muted = muted
			if (muted) {
				videoRef.current.setAttribute('muted', '')
			} else {
				videoRef.current.removeAttribute('muted')
			}
		}
	}, [muted])

	return (
		<video
			ref={videoRef}
			width={width}
			height={height}
			controls={controls}
			loop={loop}
			autoPlay={autoPlay}
			{...(muted ? { muted: true } : {})}
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
