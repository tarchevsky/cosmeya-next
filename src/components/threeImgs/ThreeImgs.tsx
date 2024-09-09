import Image from 'next/image'
import FadeIn from '@/components/fadeIn/FadeIn'

const ThreeImgs = () => {
	return (
		<FadeIn className={'cont mb-9 md:mb-28'}>
			<section
				className={'grid gap-4'}
				style={{ gridTemplateColumns: '0.8fr 1fr 0.8fr' }}
			>
				<Image
					src={'/contacts/contacts-img-1.png'}
					alt={'Контакты - картинка 1'}
					width={300}
					height={600}
					unoptimized
					className={'w-full h-[150px] sm:h-[250px] md:h-[458px] object-cover'}
				/>
				<Image
					src={'/contacts/contacts-img-2.png'}
					alt={'Контакты - картинка 2'}
					width={300}
					height={600}
					unoptimized
					className={'w-full h-[150px] sm:h-[250px] md:h-[458px] object-cover'}
				/>
				<Image
					src={'/contacts/contacts-img-3.png'}
					alt={'Контакты - картинка 3'}
					width={300}
					height={600}
					unoptimized
					className={'w-full h-[150px] sm:h-[250px] md:h-[458px] object-cover'}
				/>
			</section>
		</FadeIn>
	)
}

export default ThreeImgs
