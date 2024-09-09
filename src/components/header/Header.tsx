import Link from 'next/link'
import cn from 'clsx'
import styles from './Header.module.scss'
import Burger from '@/components/burger/Burger'
import { useEffect, useState } from 'react'

const Header = () => {
	const [isMenuActive, setIsMenuActive] = useState(false)
	const toggleMenu = () => {
		setIsMenuActive(!isMenuActive)
	}

	useEffect(() => {
		if (isMenuActive) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
	}, [isMenuActive])

	return (
		<header
			className='cont items-center py-4'
			style={{ background: 'rgba(59, 59, 56, 0.30)' }}
		>
			<nav
				className={cn(
					{ [styles.active]: isMenuActive },
					'fixed md:static z-10 w-full h-full md:w-auto md:h-auto end-0 bottom-0 -translate-y-full md:translate-y-0 opacity-0 md:opacity-100 transition-all duration-300 ease-out'
				)}
			>
				<ul
					tabIndex={0}
					className='absolute md:static menu flex justify-between w-full flex-nowrap gap-5 md:menu-horizontal start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-y-0 md:translate-x-0 md:text-base-100 lowercase text-xl'
				>
					<li
						className={cn(
							styles.item,
							'block text-center opacity-0 md:opacity-100'
						)}
					>
						<Link className='px-[10px] btn btn-ghost font-normal' href='/'>
							Главная
						</Link>
					</li>
					<li
						className={cn(
							styles.item,
							'block text-center opacity-0 md:opacity-100'
						)}
					>
						<Link className='px-[10px] btn btn-ghost font-normal' href='/about'>
							О нас
						</Link>
					</li>
					<li
						className={cn(
							styles.item,
							'block text-center opacity-0 md:opacity-100'
						)}
					>
						<Link className='px-[10px] btn btn-ghost font-normal' href='#'>
							Документация
						</Link>
					</li>
					<li
						className={cn(
							styles.item,
							'block text-center opacity-0 md:opacity-100'
						)}
					>
						<Link className='px-[10px] btn btn-ghost font-normal' href='#'>
							Контакты
						</Link>
					</li>
				</ul>
			</nav>
			<Burger toggleMenu={toggleMenu} />
		</header>
	)
}

export default Header
