import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import { HeroProps } from '@/types'
import { GetStaticProps, NextPage } from 'next'

const title = 'Цветочные композиции'

const CompositionsPage: NextPage = () => {
	return (
		<>
			<Meta
				title={title}
				metaDesc='Профессиональное создание цветочных композиций'
			/>
			<FadeIn className='cont'>
				<main className='prose max-w-none'>
					<h1 className='text-5xl mb-8 text-center'>{title}</h1>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
						<div>
							<p className='text-lg leading-relaxed'>
								При создании цветочных композиций мы сосредоточились на
								воплощении именно композиционных решений, взамен простой сборке
								букетов. Каждый наш букет - это неповторимая история, отражение
								эмоций и эстетический взгляд.
							</p>
						</div>
						<div>
							<p className='text-lg leading-relaxed'>
								Мы создаем цветочные композиции для оформления официальных
								мероприятий, семейных торжеств, интерьеров корпоративной среды,
								офисных пространств, переговорных комнат и дома.
							</p>
						</div>
					</div>

					<section className='bg-green-50 p-8 rounded-lg mb-12'>
						<h2 className='text-3xl mb-6'>Наши услуги</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<div>
								<p className='text-lg leading-relaxed'>
									Мы устанавливаем цветочные композиции в холлах отелей,
									бьюти-салонов, оформляем витрины магазинов, кофейни.
									Используем решения в соответствии с вашей айдентикой и
									индивидуальным стилем.
								</p>
							</div>
							<div>
								<p className='text-lg leading-relaxed'>
									Разрабатываем композиции, сохраняя общий ритм, стиль и
									контекст помещения или мероприятия. В числе наших работ -
									каскадные композиции, букеты в портбукетницах, цветочные
									корзины, настольные композиции.
								</p>
							</div>
						</div>
						<p className='text-lg leading-relaxed'>
							Живые цветы могут также использоваться как составляющие декора -
							для украшения панелей и декоративных вставок в помещениях.
						</p>
					</section>

					<section className='mb-12'>
						<h2 className='text-3xl mb-6'>Этапы работы</h2>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
							{[
								'Интервью с заказчиком',
								'Выезд специалиста на место',
								'Оценка масштабов работ',
								'Уточнение цветовой гаммы и сорта растений',
								'Создание эскизов с использованием фото помещений и декора',
								'Согласование стиля, количества цветочных композиций, декора',
								'Оценка закупки и сроков',
								'Оформление договора, подписание',
								'Закупка и реализация композиций',
								'Транспортировка',
								'Монтаж (опционально)',
								'Финальная проверка, правки',
								'Рекомендации по уходу',
								'Составление акта выполненных работ',
								'Демонтаж (опционально)'
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
						<h2 className='text-3xl mb-6'>Наш подход</h2>
						<p className='text-lg leading-relaxed'>
							Мы разделяем идеи о природосберегающем отношении к окружающей
							среде во флористике и по возможности отказываемся от использования
							пластика, заменяя его на экологичный крафт и ткани.
						</p>
					</section>

					<div className='text-center'>
						<p className='text-2xl font-medium text-green-800 mb-4'>
							Каждая композиция - это уникальная история и эмоция!
						</p>
					</div>
				</main>
			</FadeIn>
		</>
	)
}

export default CompositionsPage

export const getStaticProps: GetStaticProps = async () => {
	const heroProps: HeroProps = {
		src: '/hero.png',
		alt: 'Цветочные композиции',
		heroContentClassName: 'h-[250px]',
		imgClassName: 'h-[250px]'
	}

	return {
		props: {
			heroProps
		}
	}
}
