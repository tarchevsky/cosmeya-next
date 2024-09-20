import Image from 'next/image'
import FadeIn from '@/components/fadeIn/FadeIn'

const WhyWe = () => {
	return (
		<FadeIn className='relative mb-9 md:mb-28'>
			<div className='cont'>
				<section className='px-[40px]'>
					<h2 className='px-10'>Почему выбирают нас?</h2>
					<div
						className='flex flex-col-reverse md:grid md:grid-cols-2 px-10 py-[75px] bg-white'
						style={{
							boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
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
						<div
							className='grid grid-cols-2 gap-2'
							style={{
								gridTemplateRows: '200px 200px'
							}}
						>
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
