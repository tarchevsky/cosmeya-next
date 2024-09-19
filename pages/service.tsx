import { GetStaticProps, NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import Contacts from '@/components/contacts/Contacts'
import { HeroProps } from '@/types'
import Image from 'next/image'

const title = 'Услуга'

const ServicePage: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница услуги' />
			<FadeIn className='cont'>
				<main>
					<h1 className={`text-5xl mb-5`}>{title}</h1>
					<p>
						Здесь будет расшифровка услуги буквально ы двух словах. И то, что мы
						под ней подразумеваем. <br />
						Бла бла бла
					</p>
				</main>
			</FadeIn>
			<FadeIn className={'cont mb-10'}>
				<section className={'grid md:grid-cols-2 gap-10'}>
					<div className={'prose'}>
						<p>
							Мы предлагаем услугу по комплексному уходу за вашими растениями.
						</p>
						<p>
							Сервисное обслуживание растений в офисе – это целый комплекс
							работ, направленный на поддержание растений в оптимальном и
							декоративном состоянии. Наши специалисты знают все об уходе и
							лечении растений. Заключив с нами договор на профессиональный уход
							за растениями, мы предоставим гарантию на свои услуги.
						</p>
						<p>
							Стоимость услуг по уходу за комнатными растениями составляет от 10
							000 рублей в месяц. Общая сумма зависит от места расположения
							объекта, графика посещения специалиста, особенностей растений, их
							количества и других индивидуальных характеристик.
						</p>
						<p>
							Наша студия находится в Москве. Чтобы воспользоваться услугой, вам
							достаточно связаться с нами по телефону или оставить заявку на
							сайте. Стоимость услуг по уходу за комнатными растениями
							составляет от 10 000 рублей в месяц. Общая сумма зависит от места
							расположения объекта, графика посещения специалиста, особенностей
							растений, их количества и других индивидуальных характеристик.
						</p>
						<p>Наша студия находится в Москве.</p>
					</div>
					<Image
						src='/services/service.png'
						alt='Картинка на страницу услуги'
						width={800}
						height={1300}
						className={'object-cover'}
					/>
				</section>
			</FadeIn>
			<Contacts />
		</>
	)
}

export default ServicePage

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
