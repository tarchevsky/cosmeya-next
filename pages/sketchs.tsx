import { GetStaticProps, NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import { HeroProps } from '@/types'
import Figure from '@/components/figure/Figure'

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
			<FadeIn className={'cont mb-9 md:mb-28'}>
				<div className={'grid grid-cols-1 xl:grid-cols-2 items-center gap-10'}>
					<div>
						<p>Пока здесь текста нет</p>
					</div>
					<Figure
						src={'/sketchs.png'}
						caption='Фото для раздела Авторская полиграфия и фитоэскизы'
						imageClass='w-full'
						figcaptionClass='mt-6'
					/>
				</div>
			</FadeIn>
			<FadeIn className={'cont mb-9 md:mb-28'}>
				Позже здесь будет галерея
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
