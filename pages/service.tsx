import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import Contacts from '@/components/contacts/Contacts'

const title = 'Услуга'

const ServicePage: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница услуги' />
			<FadeIn className='cont'>
				<main>
					<h1 className={`text-4xl font-bold`}>{title}</h1>
				</main>
			</FadeIn>
			<FadeIn className={'cont'}>
				<Contacts />
			</FadeIn>
		</>
	)
}

export default ServicePage
