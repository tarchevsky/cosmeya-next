import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import { HeroProps } from '@/types'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

const title = 'Контакты'

const ContactsPage: NextPage = () => {
	return (
		<>
			<Meta
				title={title}
				metaDesc='Страница контактов, здесь можно найти как с нами связаться и реквизиты компании'
			/>
			<FadeIn className='container mx-auto px-4 py-12 md:flex justify-between items-start'>
				<div className='md:w-1/2 mb-6 md:mb-0'>
					<h1 className='text-4xl font-bold mb-8'>Связь с нами</h1>
					<div className='space-y-6'>
						<div>
							<h2 className='text-xl font-semibold mb-4'>Телефоны</h2>
							<div className='space-y-2'>
								<Link
									href={'tel:+7 (495) 792-87-81'}
									className='block hover:text-blue-600'
								>
									+7 (495) 792-87-81
								</Link>
								<Link
									href={'tel:+7 (903) 518-13-33'}
									className='block hover:text-blue-600'
								>
									+7 (903) 518-13-33
								</Link>
							</div>
						</div>
						<div>
							<h2 className='text-xl font-semibold mb-4'>Электронная почта</h2>
							<Link
								href={'mailto:info@cosmeya.ru'}
								className='hover:text-blue-600'
							>
								info@cosmeya.ru
							</Link>
						</div>
					</div>
				</div>

				<div className='md:w-1/2'>
					<h1 className='text-4xl font-bold mb-8'>Реквизиты</h1>
					<div className='space-y-6'>
						<div>
							<h2 className='text-xl font-semibold mb-2'>Название компании</h2>
							<p>ООО «Космея»</p>
						</div>
						<div>
							<h2 className='text-xl font-semibold mb-2'>Юридический адрес</h2>
							<p>129110, г. Москва, Проспект Мира, д. 68, кв. 127</p>
						</div>
						<div>
							<h2 className='text-xl font-semibold mb-2'>ИНН</h2>
							<p>7704568956</p>
						</div>
						<div>
							<h2 className='text-xl font-semibold mb-2'>ОГРН</h2>
							<p>1057748038127 от 31.08.2005</p>
						</div>
					</div>
				</div>
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
