import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import { HeroProps } from '@/types'
import { GetStaticProps, NextPage } from 'next'

const title = 'Оформление пространств и территорий для торжества'

const CelebrationsPage: NextPage = () => {
	return (
		<>
			<Meta
				title={title}
				metaDesc='Оформление пространств и территорий для торжества'
			/>
			<FadeIn className='cont'>
				<main className='prose max-w-none'>
					<h1 className='text-5xl mb-8 text-center'>{title}</h1>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
						<div>
							<p className='text-lg leading-relaxed'>
								Мы оформляем стенды, витрины и торжественные мероприятия, как
								личные, так и деловые, создаем тематические зоны, украшаем
								банкетные залы.
							</p>
						</div>
						<div>
							<p className='text-lg leading-relaxed'>
								Кроме живых цветов, мы детально продумываем сочетание элементов
								декора, текстиля, посуды, достигая стилистического единства в
								помещении.
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
		</>
	)
}

export default CelebrationsPage

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
