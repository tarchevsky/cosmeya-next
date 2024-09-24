import { GetStaticProps, NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import { HeroProps } from '@/types'
import Image from 'next/image'
import Logos from '@/components/logos/Logos'
import Figure from '@/components/figure/Figure'

const title = 'О нас'

const AboutPage: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница о нас' />
			<FadeIn className='cont'>
				<main className={'prose'}>
					<h1 className={'text-5xl'}>{title}</h1>
					<p>Космея - это дом цветочной моды. Флористический салон. </p>
					<p>
						Основан художниками, выпускниками Московского Академического
						Художественного Института им. В.И.Сурикова, а также талантливыми
						флористами, окончившими лучшие в Москве школы цветочного дизайна
					</p>
					<p>
						Мы рады будем помочь украсить Ваш интерьер, сделать незабываемые
						подарок Вам и дорогим для Вас людям. Художники нашего дома помогут
						воплотить в жизнь любые Ваши фантазии и пожелания.
					</p>
				</main>
			</FadeIn>
			<FadeIn className='cont'>
				<h2 className={'text-4xl font-normal pb-[75px]'}>В нашей команде:</h2>
				<div className={'grid md:grid-cols-2 md:w-[60vw] gap-4 mb-9 md:mb-28'}>
					<Image
						src={'/about/about-1.png'}
						alt={'О нас - картинка 1'}
						width={600}
						height={300}
						className={'m-0 w-[500px] h-[300px] object-cover rounded-[30px]'}
					/>
					<Image
						src={'/about/about-2.png'}
						alt={'О нас - картинка 2'}
						width={600}
						height={300}
						className={'m-0 w-[500px] h-[300px] object-cover rounded-[30px]'}
					/>
					<Image
						src={'/about/about-3.png'}
						alt={'О нас - картинка 3'}
						width={600}
						height={300}
						className={'m-0 w-[500px] h-[300px] object-cover rounded-[30px]'}
					/>
					<Image
						src={'/about/about-4.png'}
						alt={'О нас - картинка 4'}
						width={600}
						height={300}
						className={'m-0 w-[500px] h-[300px] object-cover rounded-[30px]'}
					/>
				</div>
				<div className={'prose pb-[75px]'}>
					<p>
						Наша команда состоит из художников-оформителей, дизайнеров,
						флористов, опытных мастеров своего дела, которые знают, как
						воплотить ваши идеи в жизнь. Каждый проект для нас - это уникальная
						возможность проявить наш творческий потенциал. <br />
						Мы гордимся нашим профессионализмом и вниманием к мельчайшим
						деталям.
					</p>
					<p>
						Наши художники работают с огромным вдохновением и креативностью,
						превращая ваши мечты в реальность. <br />
						Мы глубоко ценим каждого нашего клиента и всегда стремимся превзойти
						их ожидания.
					</p>
					<p>
						Мы уверены в качестве нашей работы и всегда готовы предложить вам
						лучшее!
					</p>
				</div>
			</FadeIn>
			<FadeIn className={'cont mb-9 md:mb-28'}>
				<h2 className={'pb-[75px]'}>Обращение руководителя</h2>
				<div className={'grid grid-cols-1 xl:grid-cols-2 items-center gap-10'}>
					<Figure
						src={'/avatar.JPG'}
						caption='Антонина Игоревна Козловская - генеральный <br />директор и идейный руководитель ООО Космея'
						imageClass='w-full'
						figcaptionClass='mt-6'
					/>

					<div>
						<p>
							Здравствуйте! Меня зовут Антонина, и я рада приветствовать вас в
							мире фитодизайна. Моя страсть к озеленению интерьеров
							сформировалась за долгие годы, и я с радостью помогу воплотить
							ваши мечты в реальность.
						</p>
						<br />
						<p>
							По образованию я художник, но в дизайне с начала двухтысячных. С
							тех пор я привношу свои знания и креативность в дизайн. Я
							занимаюсь всем процессом: от создания уникальных эскизов до
							подбора идеального декора и реализации ваших идей. Я работаю с
							компаниями и частными заказчиками.
						</p>
						<br />
						<p>
							Если вы хотите придать вашему интерьеру неповторимый облик с
							помощью живых растений, вы обратились по адресу! Хотите живые
							цветы? Будут! Специально привезённые для Вас под заказ, из лучших
							оранжерей света
						</p>
						<br />
						<p>
							Свяжитесь со мной, и вместе мы создадим пространство, которое
							будет вдохновлять и радовать вас каждый день.
						</p>
					</div>
				</div>
			</FadeIn>
			<Logos />
		</>
	)
}

export default AboutPage

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
