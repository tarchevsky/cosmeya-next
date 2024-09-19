import FadeIn from '@/components/fadeIn/FadeIn'
import Image from 'next/image'

const Services = () => {
	return (
		<FadeIn className='cont mb-9 md:mb-28'>
			<section>
				<h2 className='px-[50px] pb-[75px]'>Услуги</h2>
				<div className='grid lg:grid-cols-2 gap-8'>
					<div
						className='grid grid-cols-2 gap-2 rounded-[30px]'
						style={{
							background: 'lightgray 0px -101.473px / 100% 189.349% no-repeat'
						}}
					>
						<Image
							src={'/services/services-1.png'}
							alt={'Ecckeub'}
							width={300}
							height={210}
							className={'w-[300px] h-full object-cover rounded-[30px]'}
						/>
						<p className={'p-6 xl:p-11'}>Фитодизайн в офисных помещениях</p>
					</div>
					<div
						className='grid grid-cols-2 gap-2 rounded-[30px]'
						style={{
							background: 'lightgray 0px -101.473px / 100% 189.349% no-repeat'
						}}
					>
						<Image
							src={'/services/services-2.png'}
							alt={'Ecckeub'}
							width={300}
							height={210}
							className={'w-[300px] h-full object-cover rounded-[30px]'}
						/>
						<p className={'p-6 xl:p-11'}>
							Флористический дизайн и декор событий
						</p>
					</div>
					<div
						className='grid grid-cols-2 gap-2 rounded-[30px]'
						style={{
							background: 'lightgray 0px -101.473px / 100% 189.349% no-repeat'
						}}
					>
						<Image
							src={'/services/services-3.png'}
							alt={'Ecckeub'}
							width={300}
							height={210}
							className={'w-[300px] h-full object-cover rounded-[30px]'}
						/>
						<p className={'p-6 xl:p-11'}>Озеленение городских площадей</p>
					</div>
					<div
						className='grid grid-cols-2 gap-2 rounded-[30px]'
						style={{
							background: 'lightgray 0px -101.473px / 100% 189.349% no-repeat'
						}}
					>
						<Image
							src={'/services/services-4.png'}
							alt={'Ecckeub'}
							width={300}
							height={210}
							className={'w-[300px] h-full object-cover rounded-[30px]'}
						/>
						<p className={'p-6 xl:p-11'}>Цветочные композиции</p>
					</div>
					<div
						className='grid grid-cols-2 gap-2 rounded-[30px]'
						style={{
							background: 'lightgray 0px -101.473px / 100% 189.349% no-repeat'
						}}
					>
						<Image
							src={'/services/services-5.png'}
							alt={'Ecckeub'}
							width={300}
							height={210}
							className={'w-[300px] h-full object-cover rounded-[30px]'}
						/>
						<p className={'p-6 xl:p-11'}>Оформление пространств и территорий</p>
					</div>
					<div
						className='grid grid-cols-2 gap-2 rounded-[30px]'
						style={{
							background: 'lightgray 0px -101.473px / 100% 189.349% no-repeat'
						}}
					>
						<Image
							src={'/services/services-6.png'}
							alt={'Ecckeub'}
							width={300}
							height={210}
							className={'w-[300px] h-full object-cover rounded-[30px]'}
						/>
						<p className={'p-6 xl:p-11'}>Интерьерные решение в декоре</p>
					</div>
					<div
						className='grid grid-cols-2 gap-2 rounded-[30px]'
						style={{
							background: 'lightgray 0px -101.473px / 100% 189.349% no-repeat'
						}}
					>
						<Image
							src={'/services/services-7.png'}
							alt={'Ecckeub'}
							width={300}
							height={210}
							className={'w-[300px] h-full object-cover rounded-[30px]'}
						/>
						<p className={'p-6 xl:p-11'}>Новогодние украшения</p>
					</div>
					<div
						className='grid grid-cols-2 gap-2 rounded-[30px]'
						style={{
							background: 'lightgray 0px -101.473px / 100% 189.349% no-repeat'
						}}
					>
						<Image
							src={'/services/services-8.png'}
							alt={'Ecckeub'}
							width={300}
							height={210}
							className={'w-[300px] h-full object-cover rounded-[30px]'}
						/>
						<p className={'p-6 xl:xl:p-11'}>
							Авторская полиграфия и фитоэскизы
						</p>
					</div>
				</div>
			</section>
		</FadeIn>
	)
}

export default Services
