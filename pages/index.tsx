import Contacts from '@/components/contacts/Contacts'
import Logos from '@/components/logos/Logos'
import Meta from '@/components/meta/Meta'
import Services from '@/components/services/Services'
import ThreeImgs from '@/components/threeImgs/ThreeImgs'
import Timeline from '@/components/timeline/Timeline'
import WhyWe from '@/components/whyWe/WhyWe'
import { serviceData } from '@/data/serviceData'
import { threeImagesData } from '@/data/threeImagesData'
import { HeroProps } from '@/types'
import { GetStaticProps, NextPage } from 'next'

const HomePage: NextPage = () => {
	return (
		<>
			<Meta
				title='Главная страница Космея'
				metaDesc='Дом цветочной моды Космея - предоставляет услвгу по фитодизайну и декору. Мы занимаемся озеленением пространств, созданием эксклюзивных цветочных композиций и уникальных флористических решений.'
			/>
			<Services serviceData={serviceData} />
			<Timeline />
			<WhyWe />
			<ThreeImgs threeImgsData={threeImagesData} />
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
		// textLink1: '/greenery',
		text2:
			'Эксклюзивные цветочные <br />композиции и уникальные <br />флористические решения',
		// textLink2: '/exclusive',
		text3: 'Вдохновленный подход к <br />интерьеру и экстерьеру',
		// textLink3: '/inspiration',
		text4: 'Живые пространства, созданные <br />цветами и искусством'
		// textLink4: '/life-area'
	}

	return {
		props: {
			heroProps
		}
	}
}
