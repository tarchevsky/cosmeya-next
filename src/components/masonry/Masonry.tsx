import cn from 'clsx'
import styles from './Masonry.module.scss'
import { MasonryProps } from '@/types'
import Image from 'next/image'
import { FC } from 'react'

const Masonry: FC<MasonryProps> = ({ images }) => {
	// Разделяем изображения на три колонки
	const columns = [
		images.filter((_, index) => index % 3 === 0),
		images.filter((_, index) => index % 3 === 1),
		images.filter((_, index) => index % 3 === 2)
	]

	return (
		<div className='grid grid-cols-1 xs:grid-cols-2 gap-2 md:grid-cols-3 mb-16'>
			{columns.map((column, columnIndex) => (
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
