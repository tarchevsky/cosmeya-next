import Masonry from '@/components/masonry/Masonry'
import { OurWorksProps } from '@/types'
import { memo } from 'react'
import BoxContainer from '../boxContainer/BoxContainer'

const OurWorks = memo(({ ourWorks }: OurWorksProps) => {
	return (
		<>
			<h2 className='cont mb-6'>Наши работы</h2>
			{ourWorks.map(project => (
				<div key={project.id} className='cont mb-14'>
					<BoxContainer>
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
					</BoxContainer>
				</div>
			))}
		</>
	)
})

export default OurWorks
