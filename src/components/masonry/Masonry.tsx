import cn from 'clsx'
import styles from './Masonry.module.scss'
import { MasonryProps } from '@/types'
import Image from 'next/image'
import { FC } from 'react'

const Masonry: FC<MasonryProps> = ({ images, columns = 3 }) => {
	// Разделяем изображения на три колонки
	const columnArrays = Array.from({ length: columns }, (_, colIndex) =>
		images.filter((_, index) => index % columns === colIndex)
	)

	return (
		<div
			className={`grid gap-2 mb-10 md:mb-14 ${
				columns === 2
					? 'grid-cols-1 sm:grid-cols-2'
					: 'grid-cols-1 xs:grid-cols-2 md:grid-cols-3'
			}`}
		>
			{columnArrays.map((column, columnIndex) => (
				<div key={columnIndex} className='grid gap-2'>
					{column.map(image => (
						<div key={image.id} className={cn(styles.img, 'relative')}>
							<Image
								className='object-cover object-center'
								src={image.src}
								alt={image.alt}
								width={1000}
								height={1000}
								style={{ width: '100%', height: '100%' }}
								quality={10}
							/>
						</div>
					))}
				</div>
			))}
		</div>
	)
}

export default Masonry
