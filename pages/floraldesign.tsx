import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import { HeroProps } from '@/types'
import { GetStaticProps, NextPage } from 'next'

const title = 'Флористический дизайн и декор событий'

const FloralDesignPage: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Флористический дизайн и декор событий' />
			<FadeIn className='cont'>
				<main className='prose max-w-none'>
					<h1 className='text-5xl mb-8 text-center'>{title}</h1>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
						<div>
							<p className='text-lg leading-relaxed'>
								Создаем композиционные решения с живыми цветами, которые
								подчеркнут изысканную атмосферу вашего мероприятия. Мы
								позаботимся о создании флористической концепции события.
								Свяжемся с поставщиками, чтобы в день мероприятия вы получили
								самые свежие цветы.
							</p>
						</div>
						<div>
							<p className='text-lg leading-relaxed'>
								Соберем композиции и добавим их на место события, учитывая все
								особенности логистики. Осуществим монтаж и последующий демонтаж
								при необходимости. Мы бережно относимся к ресурсам и
								потребностям клиента.
							</p>
						</div>
					</div>

					<section className='bg-green-50 p-8 rounded-lg mb-12'>
						<h2 className='text-3xl mb-6'>Наши услуги для свадеб и торжеств</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<div>
								<ul className='text-lg leading-relaxed'>
									<li>Разработка концепции свадебной стилистики</li>
									<li>Букеты и настольные цветочные композиции</li>
									<li>Оформление зала</li>
									<li>Бутоньерки и цветочные аксессуары</li>
								</ul>
							</div>
							<div>
								<ul className='text-lg leading-relaxed'>
									<li>Президиум</li>
									<li>Арка выездной регистрации</li>
									<li>Фотозона</li>
								</ul>
							</div>
						</div>
					</section>

					<blockquote className='border-l-4 border-green-500 pl-4 py-2 mb-12 bg-green-50 italic text-lg'>
						Каждая деталь станет отражением именно вашей истории
					</blockquote>

					<section className='mb-12'>
						<h2 className='text-3xl mb-6'>Наш подход</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<div>
								<p className='text-lg leading-relaxed'>
									Мы не просто предоставляем услуги оформления мероприятий – мы
									создаем незабываемые впечатления. Наша команда возьмет на себя
									весь процесс, начиная от разработки концепции и подбора
									цветовой палитры, создания визуализации учитывая все идеи и
									пожелания, до доставки и установки мебели и декора. 
								</p>
							</div>
							<div>
								<p className='text-lg leading-relaxed'>
									Наши опытные флористы создадут уникальные цветочные
									композиции, которые идеально дополнят дизайн и атмосферу
									вашего события. Мы уделим особое внимание каждому элементу,
									чтобы создать неповторимую атмосферу и оставить незабываемые
									впечатления у вас и ваших гостей.
								</p>
							</div>
						</div>
						<p className='text-lg leading-relaxed'>
							Работа нашей команды не ограничивается только мероприятиями – мы
							также сможем превратить ваш дом, ресторан или коммерческое
							помещение в настоящий арт-объект. Учтем все ваши пожелания, чтобы
							создать уют и элегантность в вашем доме, а также подберем
							идеальные вазы и комнатные растения, которые гармонично впишутся в
							ваш интерьер. Мы создаем пространства, в которых царит красота и
							гармония. Доверьтесь нам, и вы будете окружены истинной эстетикой
							и вдохновением.
						</p>
					</section>

					<section className='bg-green-50 p-8 rounded-lg mb-12'>
						<h2 className='text-3xl mb-6'>
							Для корпоративных клиентов действует особая скидочная программа
							лояльности!
						</h2>
						<p className='text-lg leading-relaxed'>
							Мы готовы предоставить высокий сервис, которым на протяжении почти
							20 лет пользуются наши постоянные клиенты. У нас вы найдете
							предложения для бизнес-партнеров, клиентов и сотрудников:
							авторские букеты, необычные подарки, подарочные сертификаты,
							организация тимбилдингов.
						</p>
					</section>

					<div className='text-center'>
						<p className='text-2xl font-medium text-green-800 mb-4'>
							Мы ценим Ваше время – поэтому наши Event – менеджеры могут помочь
							или, по желанию клиента ,взять на себя организацию любого
							торжества и сделать это на высшем уровне!
						</p>
					</div>
				</main>
			</FadeIn>
		</>
	)
}

export default FloralDesignPage

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
