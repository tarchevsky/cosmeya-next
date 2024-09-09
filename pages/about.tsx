import { GetStaticProps, NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import { HeroProps } from '@/types'
import Image from 'next/image'

const title = 'О нас'

const AboutPage: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница о нас' />
			<FadeIn className='cont'>
				<main className={'prose'}>
					<h1 className={'font-normal text-[]'}>{title}</h1>
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
			<FadeIn className='cont mb-9 md:mb-28'>
				<section>
					<h3 className={'pb-[75px]'}>Среди наших клиентов</h3>
					<div
						className={'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8'}
					>
						<Image
							src={'/clients/client-1.png'}
							alt={'О нас - клиент 1'}
							width={200}
							height={100}
							className={'m-0 w-full h-[100px] object-contain'}
						/>
						<Image
							src={'/clients/client-2.png'}
							alt={'О нас - клиент 2'}
							width={200}
							height={100}
							className={'m-0 w-full h-[100px] object-contain'}
						/>
						<Image
							src={'/clients/client-3.png'}
							alt={'О нас - клиент 3'}
							width={200}
							height={100}
							className={'m-0 w-full h-[100px] object-contain'}
						/>
						<Image
							src={'/clients/client-4.png'}
							alt={'О нас - клиент 4'}
							width={200}
							height={100}
							className={'m-0 w-full h-[100px] object-contain'}
						/>
						<Image
							src={'/clients/client-5.png'}
							alt={'О нас - клиент 5'}
							width={200}
							height={100}
							className={'m-0 w-full h-[100px] object-contain'}
						/>
						<Image
							src={'/clients/client-6.png'}
							alt={'О нас - клиент 6'}
							width={200}
							height={100}
							className={'m-0 w-full h-[100px] object-contain'}
						/>
						<Image
							src={'/clients/client-7.png'}
							alt={'О нас - клиент 7'}
							width={200}
							height={100}
							className={'m-0 w-full h-[100px] object-contain'}
						/>
						<Image
							src={'/clients/client-8.png'}
							alt={'О нас - клиент 8'}
							width={200}
							height={100}
							className={'m-0 w-full h-[100px] object-contain'}
						/>
						<Image
							src={'/clients/client-9.png'}
							alt={'О нас - клиент 9'}
							width={200}
							height={100}
							className={'m-0 w-full h-[100px] object-contain'}
						/>
					</div>
				</section>
			</FadeIn>
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
