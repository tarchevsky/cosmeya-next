import { GetStaticProps, NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import { HeroProps } from '@/types'
import Image from 'next/image'
import WhyWe from '@/components/whyWe/WhyWe'
import Services from '@/components/services/Services'
import ThreeImgs from '@/components/threeImgs/ThreeImgs'
import Contacts from '@/components/contacts/Contacts'

const HomePage: NextPage = () => {
	const heroProps: HeroProps = {
		src: '/path/to/image.jpg',
		alt: 'Hero image',
		title: 'Welcome to our site',
		subtitle: 'Discover amazing content',
		buttonText: 'Learn More',
		imgClassName: 'custom-hero-class'
	}

	return (
		<>
			<Meta title='Главная' metaDesc='Описание страницы' />
			<WhyWe />
			<Services />
			<ThreeImgs />
			<Contacts />
		</>
	)
}

export default HomePage

export const getStaticProps: GetStaticProps = async () => {
	const heroProps: HeroProps = {
		src: '/hero.png',
		alt: 'Home page hero image',
		title: 'КОСМЕЯ',
		subtitle: 'Фито-дизайн и декор',
		heroContentClassName: 'h-[1100px]',
		imgClassName: 'h-full',
		text1: 'Озеленение пространств: <br/>офисов, площадок, мероприятий',
		text2:
			'Эксклюзивные цветочные <br />композиции и уникальные <br />флористические решения',
		text3: 'Вдохновленный подход к <br />интерьеру',
		text4: 'Живые пространства, созданные <br />цветами и искусством'
	}

	return {
		props: {
			heroProps
		}
	}
}
