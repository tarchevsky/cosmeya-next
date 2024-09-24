import { VideoProps } from '@/types'
import { useEffect, useRef } from 'react'

const Video = ({
	width,
	height,
	src,
	type,
	controls = false,
	loop = true,
	preload = 'auto',
	muted = true,
	autoPlay = true,
	playsInline = true,
	poster,
	...rest
}: VideoProps) => {
	const videoRef = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.muted = true // Всегда начинайте без звука
			videoRef.current.setAttribute('muted', '')
			videoRef.current.setAttribute('playsinline', '')

			// Попытка воспроизведения
			const playPromise = videoRef.current.play()

			if (playPromise !== undefined) {
				playPromise
					.then(_ => {
						// Автовоспроизведение началось
					})
					.catch(error => {
						// Автовоспроизведение не удалось
						console.log('Autoplay was prevented')
					})
			}
		}
	}, [])

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
			preload={preload}
			playsInline={playsInline}
			muted={muted}
			{...rest}
		>
			<source src={src} type={type} />
			Your browser does not support the video tag.
		</video>
	)
}

export default Video
