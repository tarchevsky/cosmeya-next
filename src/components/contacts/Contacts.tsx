import FadeIn from '@/components/fadeIn/FadeIn'
import Button from '@/components/button/Button'
import Link from 'next/link'

const Contacts = () => {
	return (
		<FadeIn className={'cont'}>
			<section className={'flex flex-col gap-4 mb-9 md:mb-28'}>
				<h3 className={'text-3xl'}>Свяжитесь с нами по любым вопросам</h3>
				<Button
					tag='button'
					text={'Позвонить'}
					ariaLabel={'Кнопка обратной связи'}
					className={'btn-wide'}
				/>
				<Link href={'tel:+7 (903) 792-87-81'} className={'text-3xl'}>
					+7 (903) 792-87-81
				</Link>
				<Link href={'tel:+7 (495) 518-45-71'} className={'text-3xl'}>
					+7 (495) 518-45-71
				</Link>
			</section>
		</FadeIn>
	)
}

export default Contacts
