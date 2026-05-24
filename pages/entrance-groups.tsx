import BoxContainer from '@/components/boxContainer/BoxContainer'
import FadeIn from '@/components/fadeIn/FadeIn'
import Masonry from '@/components/masonry/Masonry'
import Meta from '@/components/meta/Meta'
import {
	entranceGroupsMasonryData,
	entranceGroupsMasonryDataTwo
} from '@/data/entrance-groups/masonryData'
import { HeroProps } from '@/types'
import { GetStaticProps, NextPage } from 'next'

const title = 'Входные группы'

const EntranceGroupsPage: NextPage = () => {
	return (
		<div>
			<Meta title={title} metaDesc='Входные группы' />
			<FadeIn className='cont'>
				<main className='prose max-w-none'>
					<h1 className='text-5xl mb-8 text-center'>{title}</h1>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
						<div>
							<p className='text-lg leading-relaxed'>
								Мы оформляем входные группы, зеркала, фасады, лестницы, витрины
								и другие элементы, которые делают вход в здание уникальным и
								запоминающимся.
							</p>
						</div>
						<div>
							<p className='text-lg leading-relaxed'>
								Мы детально продумываем дизайнерские и инженерные решения, чтобы
								оформление долго и крепко держалось и сохраняло свой
								первоначальный вид.
							</p>
						</div>
					</div>

					<div className='text-center'>
						<p className='text-2xl font-medium text-green-800 mb-4'>
							Наши цветы будут расти и процветать вместе с вашим бизнесом!
						</p>
					</div>
				</main>
			</FadeIn>
			<FadeIn className='cont'>
				<BoxContainer>
					<h2 className='text-4xl text-green-800 mb-4'>
						Открытие магазина цветов
					</h2>
					<p>
						Входная группа была создана для магазина цветов, который недавно
						открылся.
					</p>
					<p>
						Важным элементом задумки было зеркало для того, чтобы посетители и
						прохожие могли сделать фото и обратить внимание на магазин.
					</p>
					<Masonry
						className='mt-10'
						images={entranceGroupsMasonryData}
						columns={3}
					/>
				</BoxContainer>
			</FadeIn>

			<FadeIn className='cont mt-10'>
				<BoxContainer>
					<h2 className='text-4xl text-green-800 mb-4'>
						Открытие магазина цветов
					</h2>
					<p>
						Входная группа была создана для магазина цветов, который недавно
						открылся.
					</p>
					<p>
						Важным элементом задумки было зеркало для того, чтобы посетители и
						прохожие могли сделать фото и обратить внимание на магазин.
					</p>
					<Masonry
						className='mt-10'
						images={entranceGroupsMasonryDataTwo}
						columns={3}
					/>
				</BoxContainer>
			</FadeIn>
		</div>
	)
}

export default EntranceGroupsPage

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
