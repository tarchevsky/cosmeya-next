import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import { HeroProps } from '@/types'
import { GetStaticProps, NextPage } from 'next'

const title = 'Уход за растениями в офисе'

const PlantcarePage: NextPage = () => {
	return (
		<>
			<Meta
				title={title}
				metaDesc='Профессиональный уход за растениями в офисных пространствах'
			/>
			<FadeIn className='cont'>
				<main className='prose max-w-none'>
					<h1 className='text-5xl mb-8 text-center'>{title}</h1>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
						<div>
							<p className='text-lg leading-relaxed'>
								Доверьте заботу о растениях профессионалам. Уход за растениями
								требует регулярного внимания, которого часто не хватает в
								условиях офисной работы. Наши специалисты освободят сотрудников
								компании от этой задачи, обеспечивая высококачественный и
								систематический уход за зелеными насаждениями.
							</p>
						</div>
						<div>
							<p className='text-lg leading-relaxed'>
								Мы обладаем глубокими знаниями о различных видах растений и их
								индивидуальных потребностях. Учитываем факторы освещения,
								влажности воздуха, температурных режимов и особенности полива,
								чтобы ваши растения всегда оставались здоровыми и красивыми.
							</p>
						</div>
					</div>

					<section className='bg-green-50 p-8 rounded-lg mb-12'>
						<h2 className='text-3xl mb-6'>
							Наши услуги по уходу за растениями
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<div>
								<ul className='text-lg leading-relaxed'>
									<li>Контроль за состоянием растений</li>
									<li>Рекомендации по оптимальной среде</li>
									<li>Подбор индивидуального режима полива</li>
									<li>Профессиональная подкормка удобрениями</li>
								</ul>
							</div>
							<div>
								<ul className='text-lg leading-relaxed'>
									<li>Санитарная обрезка</li>
									<li>Удаление пыли</li>
									<li>Запланированный график посещений</li>
									<li>Гарантийная замена растений</li>
									<li>Бережный подход к заботе о растениях</li>
								</ul>
							</div>
						</div>
					</section>

					<div className='text-center'>
						<p className='text-2xl font-medium text-green-800 mb-4'>
							Мы заботимся о ваших растениях, чтобы они радовали вас каждый
							день!
						</p>
					</div>
				</main>
			</FadeIn>
		</>
	)
}

export default PlantcarePage

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
