import Layout from '@/layout/Layout'
import Meta from '@/components/meta/Meta'
import ourWorksData from '@/data/ourWorksData'
import OurWorks from '@/components/ourWorks/OurWorks'
import { GetStaticProps, NextPage } from 'next'
import { HeroProps } from '@/types'

const PortfolioPage: NextPage = () => {
	return (
		<>
			<Meta title='Главная' metaDesc='Описание страницы' />
			<OurWorks ourWorks={ourWorksData} />
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
