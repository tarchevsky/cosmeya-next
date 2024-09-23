import Image from 'next/image'
import FadeIn from '@/components/fadeIn/FadeIn'

const Logos = () => {
	return (
		<FadeIn className='cont mb-9 md:mb-28'>
			<section>
				<h3 className={'pb-[75px]'}>Среди наших клиентов</h3>
				<div
					className={
						'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center'
					}
				>
					<Image
						src={'/clients/client-1.png'}
						alt={'Логотип правительства Москвы'}
						width={200}
						height={100}
						className={'m-0 w-full h-[60px] object-contain'}
					/>
					<Image
						src={'/clients/client-2.png'}
						alt={'Логотип ТВЦ'}
						width={200}
						height={100}
						className={'m-0 w-full h-[60px] object-contain'}
					/>
					<Image
						src={'/clients/client-3.png'}
						alt={'Логотип Мосводканалстрой'}
						width={200}
						height={100}
						className={'m-0 w-full h-[90px] object-contain'}
					/>
					<Image
						src={'/clients/client-4.png'}
						alt={'Логотип Вимм Билль Данн'}
						width={200}
						height={100}
						className={'m-0 w-full h-[100px] object-contain'}
					/>
					<Image
						src={'/clients/client-5.png'}
						alt={'Логотип Фасады Москвы'}
						width={200}
						height={100}
						className={'m-0 w-full h-[80px] object-contain'}
					/>
					<Image
						src={'/clients/client-6.png'}
						alt={'Логотип Московский Театр Современник'}
						width={200}
						height={100}
						className={'m-0 w-full h-[60px] object-contain'}
					/>
					<Image
						src={'/clients/client-7.png'}
						alt={'Логотип Театр Кукол С.В.Образцова'}
						width={200}
						height={100}
						className={'m-0 w-full h-[70px] object-contain'}
					/>
					<Image
						src={'/clients/client-8.png'}
						alt={'Логотип Первый Канал'}
						width={200}
						height={100}
						className={'m-0 w-full h-[100px] object-contain'}
					/>
					<Image
						src={'/clients/client-9.png'}
						alt={'Логотип Спецдорпроект'}
						width={200}
						height={100}
						className={'m-0 w-full h-[60px] object-contain'}
					/>
				</div>
			</section>
		</FadeIn>
	)
}

export default Logos
