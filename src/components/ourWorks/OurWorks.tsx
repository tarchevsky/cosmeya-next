import Masonry from '@/components/masonry/Masonry'
import { OurWorksProps } from '@/types'
import { memo } from 'react'

const OurWorks = memo(({ ourWorks }: OurWorksProps) => {
	return (
		<>
			<h2 className='cont mb-6'>Наши работы</h2>
			{ourWorks.map(project => (
				<div key={project.id} className='cont mb-14'>
					<div
						className='p-6 md:p-14'
						style={{
							boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
						}}
					>
						{project.title ? (
							<h3
								className='mb-4'
								dangerouslySetInnerHTML={{ __html: project.title }}
							/>
						) : null}
						{project.images ? (
							<Masonry images={project.images} columns={project.columns} />
						) : null}
						{project.subTitle ? (
							<h3
								className='mb-4'
								dangerouslySetInnerHTML={{ __html: project.subTitle }}
							/>
						) : null}
						{project.text ? (
							<p
								className='mb-10 md:mb-14'
								dangerouslySetInnerHTML={{ __html: project.text }}
							/>
						) : null}
						{project.imagesTwo ? (
							<Masonry
								images={project.imagesTwo}
								columns={project.columnsTwo}
							/>
						) : null}
						{project.titleTwo ? (
							<h3
								className='mb-4'
								dangerouslySetInnerHTML={{ __html: project.titleTwo }}
							/>
						) : null}
						{project.subText ? (
							<p dangerouslySetInnerHTML={{ __html: project.subText }} />
						) : null}
					</div>
				</div>
			))}
		</>
	)
})

export default OurWorks
