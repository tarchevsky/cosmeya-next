import { GetStaticProps, NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import { HeroProps } from '@/types'
import Figure from '@/components/figure/Figure'

const title = 'Озеленение городских площадей'

const CityPage: NextPage = () => {
	return (
		<>
			<Meta
				title={title}
				metaDesc='Страница про Озеленение городских площадей'
			/>
			<FadeIn className='cont'>
				<main className={'prose'}>
					<h1 className={'text-5xl'}>{title}</h1>
				</main>
			</FadeIn>
			<FadeIn className={'cont mb-9 md:mb-28'}>
				<div className={'grid grid-cols-1 xl:grid-cols-2 items-center gap-10'}>
					<div>
						<p>
							Город. С его ритмом и суетой он с такой радостью ждет сезон
							весенне-летних веранд - любимый период как у посетителей, так и у
							владельцев ресторанов. Именно поэтому так важно заранее начать
							планировать наполнение для будущей террасы.
						</p>
						<br />
						<p>
							В первую очередь стоит проверить качество мебели, опорных
							конструкций и цветочных кашпо на пригодность к будущему сезону.
							Если же это первый в жизни ресторана летний сезон - то
							позаботиться о проекте подготовки веранды заранее.
						</p>
						<br />
						<p>
							После того, как все технические вопросы будут улажены, можно
							распланировать цветочное наполнение.
						</p>
						<br />
						<p>
							Наша команда подготовит для вас проект, с учетом стилистических
							особенностей вашего заведения и возьмет на себя все хлопоты по
							подбору, высадке и дальнейшему уходу за растениями.
						</p>
						<p>Исходя из особенностей заведения мы можем предложить</p>
						<ul>
							<li>Сезонное озеленение веранды ресторана</li>
							<li>Подбор кашпо с растениями на вход</li>
							<li>Вертикальное озеленение</li>
							<li>Озеленение внутреннего двора</li>
							<li>Интерьерное озеленение ресторана</li>
							<li>Профессиональный уход за растениями</li>
						</ul>
					</div>
					<Figure
						src={'/city.png'}
						caption='Фото для раздела Озеленение городских площадей'
						imageClass='w-full'
						figcaptionClass='mt-6'
					/>
				</div>
			</FadeIn>
			<FadeIn className={'cont mb-9 md:mb-28'}>
				Позже здесь будет галерея
			</FadeIn>
		</>
	)
}

export default CityPage

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
