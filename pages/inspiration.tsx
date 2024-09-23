import { GetStaticProps, NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import { HeroProps } from '@/types'
import Figure from '@/components/figure/Figure'
import Masonry from '@/components/masonry/Masonry'

export const images = [
	{
		id: '1',
		src: '/inspiration/inspiration-1.png',
		alt: 'inspiration'
	},
	{
		id: '2',
		src: '/inspiration/inspiration-2.png',
		alt: 'inspiration'
	},
	{
		id: '3',
		src: '/inspiration/inspiration-3.png',
		alt: 'inspiration'
	},
	{
		id: '4',
		src: '/inspiration/inspiration-4.png',
		alt: 'inspiration'
	},
	{
		id: '5',
		src: '/inspiration/inspiration-5.png',
		alt: 'inspiration'
	},
	{
		id: '6',
		src: '/inspiration/inspiration-6.png',
		alt: 'inspiration'
	}
]

const title = 'Вдохновленный подход интерьеру и экстерьеру'

const AboutPage: NextPage = () => {
	return (
		<>
			<Meta
				title={title}
				metaDesc='Страница про Вдохновленный подход к
интерьеру и экстерьеру'
			/>
			<FadeIn className='cont'>
				<main className={'prose'}>
					<h1 className={'text-5xl'}>{title}</h1>
				</main>
			</FadeIn>
			<FadeIn className={'cont'}>
				<Masonry images={images} />
			</FadeIn>
			<FadeIn className={'cont mb-9 md:mb-28'}>
				<div className={'grid grid-cols-1 xl:grid-cols-2 items-center gap-10'}>
					<div>
						<p>
							Здравствуйте! Меня зовут Антонина, и я рада приветствовать вас в
							мире фитодизайна. Моя страсть к озеленению интерьеров
							сформировалась за долгие годы, и я с радостью помогу воплотить
							ваши мечты в реальность.
						</p>
						<br />
						<p>
							По образованию я художник, но в дизайне с начала двухтысячных. С
							тех пор я привношу свои знания и креативность в дизайн. Я
							занимаюсь всем процессом: от создания уникальных эскизов до
							подбора идеального декора и реализации ваших идей. Я работаю с
							компаниями и частными заказчиками.
						</p>
						<br />
						<p>
							Если вы хотите придать вашему интерьеру неповторимый облик с
							помощью живых растений, вы обратились по адресу! Хотите живые
							цветы? 😀 Будут! Специально привезённые для Вас под заказ, из
							лучших оранжерей света
						</p>
						<br />
						<p>
							Свяжитесь со мной, и вместе мы создадим пространство, которое
							будет вдохновлять и радовать вас каждый день.
						</p>
					</div>
					<Figure
						src={'/greenery.jpg'}
						caption='Подпись к картинке'
						imageClass='w-full'
						figcaptionClass='mt-6'
					/>
				</div>
			</FadeIn>
			<FadeIn className={'cont mb-9 md:mb-28'}>
				Потом здесь будет галерея
			</FadeIn>
		</>
	)
}

export default AboutPage

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
