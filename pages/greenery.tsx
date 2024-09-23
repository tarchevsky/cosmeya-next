import { GetStaticProps, NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import { HeroProps } from '@/types'
import Image from 'next/image'
import Logos from '@/components/logos/Logos'
import Figure from '@/components/figure/Figure'

const title = 'Озеленение пространств'

const AboutPage: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница про озеленение пространств' />
			<FadeIn className='cont'>
				<main className={'prose'}>
					<h1 className={'text-5xl'}>
						{title}:<br /> офисов, площадок, мероприятий
					</h1>
				</main>
			</FadeIn>
			<FadeIn className={'cont mb-9 md:mb-28'}>
				<h2 className={'pb-[75px]'}>О разделе</h2>
				<div className={'grid grid-cols-1 xl:grid-cols-2 items-center gap-10'}>
					<Figure
						src={'/greenery.jpg'}
						caption='Подпись к картинке'
						imageClass='w-full'
						figcaptionClass='mt-6'
					/>

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
