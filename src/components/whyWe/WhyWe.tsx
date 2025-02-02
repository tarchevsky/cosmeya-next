import Image from 'next/image'
import FadeIn from '@/components/fadeIn/FadeIn'

const WhyWe = () => {
	return (
		<FadeIn className='relative mb-9 md:mb-28'>
			<div className='cont'>
				<h2 className={'pb-[75px]'}>Почему выбирают нас?</h2>
				<section className='px-2 md:px-10'>
					<div
						className='flex flex-col-reverse lg:grid lg:grid-cols-2 px-10 py-[75px] bg-white'
						style={{
							boxShadow: '0px 2px 6px 2px rgba(0, 0, 0, 0.25)',
							gridTemplateColumns: '1fr auto'
						}}
					>
						<ul className='flex flex-col gap-4 leading-[40px] pt-[35px]'>
							<li>внимание к деталям</li>
							<li>единство стилей</li>
							<li>обслуживание с гарантией</li>
							<li>соблюдение сроков и дресс-кода</li>
							<li>отражение вашего индивидуального стиля</li>
							<li>высокое качество материалов и исполнения</li>
							<li>персонализированный подход к каждому клиенту</li>
						</ul>
						<div className='grid grid-cols-2 gap-2 w-fit h-fit xl:w-full'>
							<Image
								src='/why-grid-1.png'
								alt='Картинка плитки в Почему мы?'
								width={200}
								height={200}
							/>
							<Image
								src='/why-grid-2.png'
								alt='Картинка плитки в Почему мы?'
								width={200}
								height={200}
							/>
							<Image
								src='/why-grid-3.png'
								alt='Картинка плитки в Почему мы?'
								width={200}
								height={200}
							/>
							<Image
								src='/why-grid-4.png'
								alt='Картинка плитки в Почему мы?'
								width={200}
								height={200}
							/>
						</div>
					</div>
				</section>
			</div>
		</FadeIn>
	)
}

export default WhyWe
