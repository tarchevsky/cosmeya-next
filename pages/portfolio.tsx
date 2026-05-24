import Logos from '@/components/logos/Logos'
import Meta from '@/components/meta/Meta'
import OurWorks from '@/components/ourWorks/OurWorks'
import ourWorksData from '@/data/ourWorksData'
import { HeroProps } from '@/types'
import { GetStaticProps, NextPage } from 'next'

const PortfolioPage: NextPage = () => {
	return (
		<>
			<Meta
				title='Портфолио'
				metaDesc='Страница портфолио сайта компании Космея'
			/>
			<OurWorks ourWorks={ourWorksData} />
			<Logos />
		</>
	)
}

export default PortfolioPage

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
