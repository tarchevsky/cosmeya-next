import { GetStaticProps, NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import { HeroProps } from '@/types'
import Figure from '@/components/figure/Figure'

const title = 'Живые пространства, созданные цветами и искусством'

const LifeAreaPage: NextPage = () => {
	return (
		<>
			<Meta
				title={title}
				metaDesc='Страница про Живые пространства, созданные цветами и искусством'
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
							В сфере фитодизайна, как и в других областях продаж, использование
							триггерных слов может помочь привлечь внимание клиентов и
							подчеркнуть ценность предлагаемых услуг или продуктов.
						</p>
						<br />
						<p>Вот некоторые из таких слов и фраз:</p>
						<ol>
							<li>1. Эксклюзивный - подчеркивает уникальность предложения.</li>
							<li>
								2. Персонализированный - указывает на индивидуальный подход.
							</li>
							<li>
								3. Трендовый - акцентирует актуальность и соответствие
								современным тенденциям.
							</li>
							<li>
								4. Эко-френдли - обращает внимание на экологическую
								ответственность.
							</li>
							<li>
								5. Расслабление - подчеркивает влияние фитодизайна на атмосферу
								и настроение.
							</li>
							<li>
								6. Живой - усиливает ощущение натуральности и естественности.
							</li>
							<li>7. Безупречный - указывает на высокое качество работы.</li>
							<li>
								8. Долговечный - говорит о надежности и устойчивости
								используемых материалов и решений.
							</li>
							<li>9. Быстро - важность скорости выполнения заказа.</li>
							<li>
								10. Гармония - подчеркивает создание комфортной и
								сбалансированной среды.
							</li>
							<li>11. Оазис - создает ассоциации с уютом и отдыхом.</li>
							<li>
								12. Премиум - акцентирует высокий уровень обслуживания и
								материалов.
							</li>
							<li>
								13. Уникальный дизайн - подчеркивает индивидуальность каждого
								проекта.
							</li>
							<li>
								14. Ароматерапия - обращает внимание на дополнительные
								преимущества растений.
							</li>
							<li>
								15. Низкие затраты на обслуживание - важный аспект для клиентов,
								заботящихся о бюджете.
							</li>
						</ol>
					</div>
					<Figure
						src={'/life-area.png'}
						caption='Живые пространства, созданные цветами и искусством'
						imageClass='w-full'
						figcaptionClass='mt-6'
					/>
				</div>
			</FadeIn>
			<FadeIn className={'cont mb-9 md:mb-28'}>
				Потом здесь будет галерея
			</FadeIn>
		</>
	)
}

export default LifeAreaPage

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
