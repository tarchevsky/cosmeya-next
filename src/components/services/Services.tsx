import FadeIn from '@/components/fadeIn/FadeIn'
import Image from 'next/image'
import Button from '@/components/button/Button'
import { data } from '@/components/services/Services.types'

const Services = ({ serviceData }: data) => {
	return (
		<FadeIn className='cont mb-9 md:mb-28'>
			<section>
				<h2 className='pb-[75px]'>Услуги</h2>
				<div className='grid lg:grid-cols-2 gap-8 text-base-100'>
					{serviceData.map((data, index) => (
						<div
							key={data.id}
							className='grid grid-cols-2 gap-2 rounded-[30px]'
							style={{
								background: '#939393'
							}}
						>
							<Image
								src={data.src}
								alt={data.alt}
								width={data.width}
								height={data.height}
								className={'w-[250px] h-full object-cover rounded-[30px]'}
							/>
							<div className={'p-6 xl:py-8 xl:pl-0'}>
								<p>{data.text}</p>
								<br />
								<Button
									tag='link'
									className='btn btn-outline border-base-100 text-base-100'
									text={data.btnText}
									ariaLabel={'Кнопка на раздел'}
									href={data.btnHref}
								/>
							</div>
						</div>
					))}
				</div>
			</section>
		</FadeIn>
	)
}

export default Services
