import Image from 'next/image'
import FadeIn from '@/components/fadeIn/FadeIn'

const Logos = () => {
	return (
		<FadeIn className='cont mb-9 md:mb-28'>
			<section>
				<h3 className={'pb-[75px]'}>Среди наших клиентов</h3>
				<div className={'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8'}>
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
	)
}

export default Logos
