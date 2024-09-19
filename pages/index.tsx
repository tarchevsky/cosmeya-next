import { GetStaticProps, NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import { HeroProps } from '@/types'
import WhyWe from '@/components/whyWe/WhyWe'
import Services from '@/components/services/Services'
import ThreeImgs from '@/components/threeImgs/ThreeImgs'
import Contacts from '@/components/contacts/Contacts'
import Timeline from '@/components/timeline/Timeline'

const HomePage: NextPage = () => {
	return (
		<>
			<Meta title='Главная' metaDesc='Описание страницы' />
			<WhyWe />
			<Services />
			<Timeline />
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
		heroContentClassName: 'h-[100svh] md:h-[1100px]',
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
