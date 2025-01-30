import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import { HeroProps } from '@/types'
import { GetStaticProps, NextPage } from 'next'

const title = 'Новогоднее оформление'

const ChristmasPage: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Профессиональное новогоднее оформление' />
			<FadeIn className='cont'>
				<main className='prose max-w-none'>
					<h1 className='text-5xl mb-8 text-center'>{title}</h1>

					<section className='mb-12'>
						<p className='text-lg leading-relaxed text-center'>
							Если вы хотите в полной мере насладиться своим праздником, и не
							тратить время в пробках и очередях в поисках нужного декора, наша
							команда с радостью избавит вас от этой суеты, и создаст
							праздничную атмосферу для вас и ваших гостей.
						</p>
					</section>

					<section className='bg-green-50 p-8 rounded-lg mb-12'>
						<h2 className='text-3xl mb-6'>Наша команда</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<div>
								<p className='text-lg leading-relaxed'>
									Дизайнеры, декораторы, инженеры, световики, монтажники - мы
									большая слаженная команда профессионалов, способная решить
									любую задачу. Создадим проект вашего праздника, с учетом всех
									нюансов и пожеланий, и успешно его реализуем.
								</p>
							</div>
							<div>
								<h3 className='text-xl mb-4'>Наши услуги:</h3>
								<ul className='list-disc pl-5'>
									<li>Оформление цветами (живыми и декоративными)</li>
									<li>Стильные праздничные венки и композиции</li>
									<li>
										Световое оформление, гирлянды и разнообразная подсветка
									</li>
									<li>Световые фигуры</li>
									<li>Подсветка деревьев</li>
								</ul>
							</div>
						</div>
					</section>

					<section className='mb-12'>
						<h2 className='text-3xl mb-6'>Новогодний интерьер</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<p className='text-lg leading-relaxed'>
								Мы всегда в курсе новых тенденций и предлагаем профессиональный
								подход к новогоднему праздничному оформлению. Наша компания
								предлагает полный комплекс работ по всем видам новогоднего
								декора. Наши дизайнеры создадут для вас настоящую сказку! В
								сжатые сроки мы предложим реалистичные визуализации, чтобы вы
								могли увидеть будущий праздничный декор.
							</p>
							<p className='text-lg leading-relaxed'>
								Мы можем предложить новогоднее оформление в разных стилях и
								палитрах. Выполним интерьерный, фасадный и уличный декор.
								Широкий взгляд, модные тенденции, качественные материалы и учет
								принципов утилитарности оформления и эстетики.
							</p>
						</div>
					</section>

					<section className='bg-green-50 p-8 rounded-lg mb-12'>
						<h2 className='text-3xl mb-6'>Четыре шага к новогодней сказке</h2>
						<div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
							{[
								'Позвоните нам',
								'Встреча специалиста на объекте для замеров',
								'Согласование проекта, материалов и стоимости',
								'Доставка и создание праздничной атмосферы'
							].map((step, index) => (
								<div
									key={index}
									className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center'
								>
									<div className='text-4xl font-bold text-green-800 mb-4'>
										{index + 1}
									</div>
									<p className='text-lg font-medium text-green-700'>{step}</p>
								</div>
							))}
						</div>
					</section>

					<section className='mb-12'>
						<h2 className='text-3xl mb-6'>Для кого мы работаем</h2>
						<div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
							{[
								'Бизнес-центры и офисы',
								'Рестораны и кафе',
								'Автосалоны',
								'Торговые центры',
								'Театры',
								'Магазины',
								'Салоны красоты',
								'Банки',
								'Учебные заведения',
								'Отели и гостиницы',
								'Корпоративные мероприятия'
							].map((place, index) => (
								<div
									key={index}
									className='bg-green-50 p-4 rounded-lg text-center hover:bg-green-100 transition-colors'
								>
									<p className='text-green-800'>{place}</p>
								</div>
							))}
						</div>
						<p className='text-lg leading-relaxed mt-6 text-center'>
							Новогоднее оформление для бизнеса – это дополнительный инструмент
							привлечения клиента. Мы внимательно подходим к этому виду работ.
						</p>
					</section>

					<section className='bg-green-50 p-8 rounded-lg mb-12'>
						<h2 className='text-3xl mb-6'>
							Полный цикл работ по новогоднему декору
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<div>
								<ul className='list-disc pl-5 text-lg'>
									<li>Новогодние ели</li>
									<li>Композиции на стол и ресепшн</li>
									<li>Настольные елочки</li>
									<li>Новогодние корпоративные подарки</li>
								</ul>
							</div>
							<div>
								<ul className='list-disc pl-5 text-lg'>
									<li>Световые фигуры</li>
									<li>Световое оформление фасада и интерьера</li>
									<li>Оформление входных групп</li>
									<li>Декорации и дополнительный декор</li>
								</ul>
							</div>
						</div>
					</section>

					<blockquote className='border-l-4 border-green-500 pl-4 py-2 mb-12 bg-green-50 italic text-lg'>
						Команда профессионалов справится с любыми задачами, от интерьерного
						и фасадного оформления, до создания дизайнерских декораций. Мы
						подбираем идеальное решение для любой задачи, контролируя качество
						на каждом этапе работ учитывая все нюансы.
					</blockquote>

					<section className='mb-12'>
						<h2 className='text-3xl mb-6'>Ёлка под ключ</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<div>
								<p className='text-lg leading-relaxed'>
									Мы бережем ваше время и делаем интерьер необычайно уютным и
									сказочным! Ёлка под ключ – это комплексный набор товаров,
									подготовленный нашими декораторами.
								</p>
								<p className='text-lg leading-relaxed mt-4'>
									Всё включено: ель, украшения, гирлянды, доставка и сборка.
								</p>
							</div>
							<div>
								<p className='text-lg leading-relaxed'>
									Неважно, квартира у вас, загородный дом или офис – мы поможем
									вам приблизить ожидание новогодних чудес и волшебства.
								</p>
							</div>
						</div>
					</section>

					<section className='mb-12'>
						<h2 className='text-3xl mb-6'>Высокое качество продукции</h2>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							<div className='bg-green-50 p-6 rounded-lg'>
								<h3 className='text-xl mb-4 text-green-800'>
									Качество материалов
								</h3>
								<p className='text-lg leading-relaxed'>
									Наши елочки и украшения для них изготавливаются на европейских
									и российских фабриках. Мы гарантируем высокое качество нашей
									продукции.
								</p>
							</div>
							<div className='bg-green-50 p-6 rounded-lg'>
								<h3 className='text-xl mb-4 text-green-800'>Сопровождение</h3>
								<p className='text-lg leading-relaxed'>
									Предоставляем удобные сервисы: повторная сборка, де-оформление
									елей, хранение на нашем терминале до следующих праздников.
									Комплексное сопровождение со скидкой.
								</p>
							</div>
							<div className='bg-green-50 p-6 rounded-lg'>
								<h3 className='text-xl mb-4 text-green-800'>
									Доставка и сборка
								</h3>
								<p className='text-lg leading-relaxed'>
									Доставляем дизайнерские ёлки в удобное для вас время
									собственной курьерской службой. Сборка осуществляется
									профессиональными декораторами.
								</p>
							</div>
						</div>
					</section>

					<div className='text-center bg-green-50 p-8 rounded-lg'>
						<p className='text-2xl font-medium text-green-800 mb-4'>
							Мы создаем праздничную атмосферу, которая восхищает!
						</p>
						<p className='text-lg text-green-700'>
							Доверьте нам создание вашей новогодней сказки
						</p>
					</div>
				</main>
			</FadeIn>
		</>
	)
}

export default ChristmasPage

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
