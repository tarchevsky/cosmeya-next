import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import { HeroProps } from '@/types'
import { GetStaticProps, NextPage } from 'next'

const title = 'Озеленение офисных пространств'

const GreenOfficePage: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Озеленение офисных пространств' />
			<FadeIn className='cont'>
				<main className='prose max-w-none'>
					<h1 className='text-5xl mb-8 text-center'>{title}</h1>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
						<div>
							<p className='text-lg leading-relaxed'>
								Озеленение офисов и бизнес-центров. Мы специализируемся на
								озеленении интерьеров живыми цветами. Наша студия
								специализируется на фитодизайне внутренних помещений и
								озеленении пространств живыми растениями. Мы предлагаем услуги
								по озеленению коммерческих помещений, интерьерному озеленению,
								бизнес-флористике.
							</p>
						</div>
						<div>
							<p className='text-lg leading-relaxed'>
								Озеленение в офисных пространствах решает сразу несколько задач:
								зонирование пространства, очищение воздуха, поддержание статуса
								и имиджа компании, снижение стресса и, как следствие, повышение
								эффективности труда. Визуальный контакт с зеленью позволяет
								расслабиться и сконцентрироваться на выполнении рабочих задач.
							</p>
						</div>
					</div>

					<section className='bg-green-50 p-8 rounded-lg mb-12'>
						<h2 className='text-3xl mb-6'>Наши услуги</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<div>
								<p className='text-lg leading-relaxed'>
									Чаще всего в офисных помещениях применяются деревья и цветы в
									кашпо и дивайдерах, а также фитоконструкции - вертикальное
									озеленение с помощью стабилизированного мха, создание
									логотипов, декорированных мхом.
								</p>
							</div>
							<div>
								<p className='text-lg leading-relaxed'>
									Мы применяем креативный подход к созданию кашпо и дивайдеров,
									отбору растений, чтобы раскрыть именно особенности области
									деятельности вашей компании, расставить акценты в помещении.
								</p>
							</div>
						</div>
					</section>

					<section className='mb-12'>
						<h2 className='text-3xl mb-6'>Преимущества работы с нами</h2>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
							{[
								'Повышение статуса вашей компании',
								'Улучшение микроклимата помещения',
								'Повышение производительности труда',
								'Разделение пространства на зоны',
								'Яркие акценты в дизайне помещения',
								'Создание зеленых перегородок',
								'Создание зеленых стен из растений',
								'Создание логотипов из мха',
								'Радость для сотрудников и клиентов'
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
						<h2 className='text-3xl mb-6'>Сезонное оформление</h2>
						<p className='text-lg leading-relaxed'>
							Мы специализируемся на сезонном, праздничном декоре, включающем не
							только живые цветы, но и всевозможные панно, оформление стендов,
							украшение новогодних елей и хвойных гирлянд, создание натюрмортов,
							предметных композиций, отражающих сезонную или праздничную гамму.
						</p>
					</section>

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

export default GreenOfficePage

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
