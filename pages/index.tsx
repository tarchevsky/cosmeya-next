import { GetStaticProps, NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import { HeroProps } from '@/types'
import WhyWe from '@/components/whyWe/WhyWe'
import Services from '@/components/services/Services'
import ThreeImgs from '@/components/threeImgs/ThreeImgs'
import Contacts from '@/components/contacts/Contacts'
import Timeline from '@/components/timeline/Timeline'
import Logos from '@/components/logos/Logos'
import { serviceData } from '@/components/services/serviceData'

const HomePage: NextPage = () => {
	return (
		<>
			<Meta title='Главная' metaDesc='Описание страницы' />
			<Services serviceData={serviceData} />
			<WhyWe />
			<Timeline />
			<ThreeImgs />
			<Logos />
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
		subtitle: 'Фитодизайн и декор',
		heroContentClassName: 'h-[100svh] md:h-[700px]',
		imgClassName: 'hidden h-full',
		slider: true,
		text1: 'Озеленение пространств: <br/>офисов, площадок, мероприятий',
		text2:
			'Эксклюзивные цветочные <br />композиции и уникальные <br />флористические решения',
		text3: 'Вдохновленный подход к <br />интерьеру и экстерьеру',
		text4: 'Живые пространства, созданные <br />цветами и искусством'
	}

	return {
		props: {
			heroProps
		}
	}
}
