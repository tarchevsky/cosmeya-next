import { GetStaticProps, NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import { HeroProps } from '@/types'
import Link from 'next/link'

const title = 'Контакты'

const ContactsPage: NextPage = () => {
	return (
		<>
			<Meta
				title={title}
				metaDesc='Страница контактов, здесь можно найти как с нами связаться и реквизиты компании'
			/>
			<FadeIn className='cont md:h-[53svh] flex flex-wrap justify-between items-center'>
				<main>
					<h1 className={'text-5xl mb-14'}>{title}</h1>
					<div className='grid grid-cols-2 gap-10'>
						<div className='grid gap-6 h-fit'>
							<Link href={'tel:+7 (495) 792-87-81'}>+7 (495) 792-87-81</Link>
							<Link href={'tel:+7 (903) 518-13-33'}>+7 (903) 518-13-33</Link>
							<Link href={'mailto:info@cosmeya.ru'}>info@cosmeya.ru</Link>
						</div>
					</div>
				</main>
				<section className='mb-[6rem]'>
					<h1 className={'text-5xl mb-14'}>Реквизиты</h1>
					<div className='grid grid-cols-2 gap-10'>
						<div className='grid gap-6 h-fit'>
							<Link href={'tel:+7 (495) 792-87-81'}>+7 (495) 792-87-81</Link>
							<Link href={'tel:+7 (903) 518-13-33'}>+7 (903) 518-13-33</Link>
							<Link href={'mailto:info@cosmeya.ru'}>info@cosmeya.ru</Link>
						</div>
					</div>
				</section>
			</FadeIn>
		</>
	)
}

export default ContactsPage

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
