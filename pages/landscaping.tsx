import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import { HeroProps } from '@/types'
import { GetStaticProps, NextPage } from 'next'

const title = 'Озеленение площадей'

const LandscapingPage: NextPage = () => {
	return (
		<>
			<Meta
				title={title}
				metaDesc='Ландшафтное благоустройство территорий в Москве'
			/>
			<FadeIn className='cont'>
				<main className='prose max-w-none'>
					<h1 className='text-5xl mb-8 text-center'>{title}</h1>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
						<div>
							<p className='text-lg leading-relaxed'>
								Мы осуществляем ландшафтное благоустройство придомовых и
								локальных рекреационных территорий на открытом воздухе в Москве
								и области. Наша команда профессионально участвует в озеленении
								городских мероприятий, создавая уникальные зеленые пространства.
							</p>
						</div>
						<div>
							<p className='text-lg leading-relaxed'>
								Мы предлагаем комплексные решения по озеленению: от рядовых и
								одиночных посадок до сложных композиционных решений. Наш подход
								включает сезонный уход, укрытие растений и декоративное
								оформление территорий.
							</p>
						</div>
					</div>

					<section className='bg-green-50 p-8 rounded-lg mb-12'>
						<h2 className='text-3xl mb-6'>Наши услуги</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<div>
								<p className='text-lg leading-relaxed'>
									Город с его ритмом и суетой с радостью ждет сезон
									весенне-летних веранд - любимый период как у посетителей, так
									и у владельцев ресторанов. Мы помогаем заблаговременно
									спланировать наполнение будущей территории, проверить качество
									мебели, опорных конструкций и цветочных кашпо.
								</p>
							</div>
							<div>
								<p className='text-lg leading-relaxed'>
									Наша команда подготовит для вас профессиональный проект с
									учетом стилистических особенностей вашего заведения и возьмет
									на себя все хлопоты по подбору, высадке и дальнейшему уходу за
									растениями.
								</p>
							</div>
						</div>
					</section>

					<section className='mb-12'>
						<h2 className='text-3xl mb-6'>Что мы можем предложить</h2>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
							{[
								'Сезонное озеленение веранды ресторана',
								'Подбор кашпо с растениями на вход',
								'Вертикальное озеленение',
								'Озеленение внутреннего двора',
								'Интерьерное озеленение ресторана',
								'Профессиональный уход за растениями',
								'Рядовые посадки',
								'Композиционные решения',
								'Сезонный уход и укрытие'
							].map((item, index) => (
								<div
									key={index}
									className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'
								>
									<p className='text-lg font-medium text-green-800'>{item}</p>
								</div>
							))}
						</div>
					</section>

					<section className='bg-green-50 p-8 rounded-lg mb-12'>
						<h2 className='text-3xl mb-6'>Сезонные украшения</h2>
						<p className='text-lg leading-relaxed'>
							Мы специализируемся на создании уникальных сезонных декораций,
							которые преображают пространство и подчеркивают его
							индивидуальность. Наши решения помогают создать неповторимую
							атмосферу и привлечь внимание к вашей территории.
						</p>
					</section>

					<div className='text-center'>
						<p className='text-2xl font-medium text-green-800 mb-4'>
							Мы создаем зеленые пространства, которые живут и развиваются
							вместе с вами!
						</p>
					</div>
				</main>
			</FadeIn>
		</>
	)
}

export default LandscapingPage

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
