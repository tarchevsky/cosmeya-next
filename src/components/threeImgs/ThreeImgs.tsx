import FadeIn from '@/components/fadeIn/FadeIn'
import Image from 'next/image'

interface ThreeImgsData {
	src: string
	alt: string
}

const ThreeImgs = ({ threeImgsData }: { threeImgsData: ThreeImgsData[] }) => {
	return (
		<FadeIn className={'cont mb-9 md:mb-28'}>
			<section
				className={'grid gap-4'}
				style={{ gridTemplateColumns: '0.8fr 1fr 0.8fr' }}
			>
				<Image
					src={threeImgsData[0].src}
					alt={threeImgsData[0].alt}
					width={300}
					height={600}
					className={'w-full h-[150px] sm:h-[250px] md:h-[458px] object-cover'}
				/>
				<Image
					src={threeImgsData[1].src}
					alt={threeImgsData[1].alt}
					width={300}
					height={600}
					className={'w-full h-[150px] sm:h-[250px] md:h-[458px] object-cover'}
				/>
				<Image
					src={threeImgsData[2].src}
					alt={threeImgsData[2].alt}
					width={300}
					height={600}
					className={'w-full h-[150px] sm:h-[250px] md:h-[458px] object-cover'}
				/>
			</section>
		</FadeIn>
	)
}

export default ThreeImgs
