import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import OurWorks from '@/components/ourWorks/OurWorks'
import sketchsData from '@/data/sketchsData'
import { HeroProps } from '@/types'
import { GetStaticProps, NextPage } from 'next'

const title = 'Авторская полиграфия и фитоэскизы'

const SketchsPage: NextPage = () => {
	return (
		<>
			<Meta
				title={title}
				metaDesc='Страница про Авторская полиграфия и фитоэскизы'
			/>
			<FadeIn className='cont'>
				<main className={'prose'}>
					<h1 className={'text-5xl'}>{title}</h1>
				</main>
			</FadeIn>
			<FadeIn className={'mb-9 md:mb-28'}>
				<OurWorks ourWorks={sketchsData} />
			</FadeIn>
		</>
	)
}

export default SketchsPage

export const getStaticProps: GetStaticProps = async () => {
	const heroProps: HeroProps = {
		src: '/hero.png',
		alt: 'Home page hero image',
		heroContentClassName: 'h-[250px]',
		imgClassName: 'h-[250px]'
	}

	return {
		props: {
			heroProps
		}
	}
}
