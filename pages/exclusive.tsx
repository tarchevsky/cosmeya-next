import { GetStaticProps, NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import { HeroProps } from '@/types'
import Image from 'next/image'
import Logos from '@/components/logos/Logos'
import Figure from '@/components/figure/Figure'
import Masonry from '@/components/masonry/Masonry'

export const images = [
	{
		id: '1',
		src: '/exclusive/exclusive-1.png',
		alt: 'exclusive'
	},
	{
		id: '2',
		src: '/exclusive/exclusive-2.png',
		alt: 'exclusive'
	},
	{
		id: '3',
		src: '/exclusive/exclusive-3.png',
		alt: 'exclusive'
	},
	{
		id: '4',
		src: '/exclusive/exclusive-4.png',
		alt: 'exclusive'
	},
	{
		id: '5',
		src: '/exclusive/exclusive-5.png',
		alt: 'exclusive'
	},
	{
		id: '6',
		src: '/exclusive/exclusive-6.png',
		alt: 'exclusive'
	}
]

const title =
	'Эксклюзивные цветочные композиции и уникальные флористические решения'

const ExclusivePage: NextPage = () => {
	return (
		<>
			<Meta
				title={title}
				metaDesc='Страница про Эксклюзивные цветочные композиции и уникальные флористические решения'
			/>
			<FadeIn className='cont'>
				<main className={'prose'}>
					<h1 className={'text-5xl'}>{title}</h1>
				</main>
			</FadeIn>
			<FadeIn className={'cont'}>
				<Masonry images={images} />
			</FadeIn>
			<FadeIn className={'cont mb-9 md:mb-28'}>
				<div className={'grid grid-cols-1 xl:grid-cols-2 items-center gap-10'}>
					<div>
						<p>
							Жизнь в современном мегаполисе оставляет нам мало времени на
							любование красотой природы. Улицы, закованные в камень, клумбы с
							неприхотливыми цветами, покрытые пылью листья деревьев и кустов,
							долгая серая и холодная зима, всё это располагает к тому, что
							возникает психологическая потребность к озеленению помещений в
							которых проходит время досуга, отдыха и, разумеется ,работы.
						</p>
						<br />
						<p>
							Перед городскими жителями остро стоит вопрос озеленения помещений
							для создания в них уголков живой природы. И мы своей работой
							помогаем им в этом.
						</p>
						<br />
						<p>
							Частные дома и квартиры – не единственная сфера использования
							озеленения. Оригинально оформленное пространство широко
							применяется в офисах и коммерческих помещениях.
						</p>
						<br />
						<p>
							Оазисы зелени, разбавляющие строгую офисную обстановку, повышают
							эффективность работы персонала, привлекают внимание посетителей,
							вызывают их расположение. Стильные вазоны и кашпо с ухоженными
							красивыми растениями говорят клиентам о благосостоянии и
							успешности компании.
						</p>
						<p>
							Работа нашей команды над концепцией интерьера ресторанов, отелей,
							торгово-развлекательных комплексов, бизнес-центров, бутиков,
							банков, спа-салонов и частных домов и квартир предусматривает
							обязательное использование флористических композиций. Их
							гармоничная интеграция в общий стиль задает настроение
							посетителям, вызывая у них желание снова возвращаться сюда.
						</p>
					</div>
					<Figure
						src={'/greenery.JPG'}
						caption='Подпись к картинке'
						imageClass='w-full'
						figcaptionClass='mt-6'
					/>
				</div>
			</FadeIn>
			<FadeIn className={'cont mb-9 md:mb-28'}>
				<h3 className={'pb-[75px]'}>Что мы сделаем для вас?</h3>
				<ul>
					<li>Дизайн – проект вашего офиса</li>
					<li>Подберем или изготовим кашпо под ваши запросы</li>
					<li>Доставим все материалы в оговоренный срок</li>
					<li>Посадим растения аккуратно и качественно</li>
					<li>
						Предложим услуги наших специалистов для сервисного ухода после
						озеленения офиса
					</li>
					<li>
						Сделаем скидку на работы по озеленению 5% при заказе ухода за
						цветами после посадк
					</li>
				</ul>
			</FadeIn>
			<FadeIn className={'cont mb-9 md:mb-28'}>
				Позже здесь будет галерея
			</FadeIn>
		</>
	)
}

export default ExclusivePage

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
