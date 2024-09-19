import Link from 'next/link'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaSquarePhone } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io'

const Footer = () => {
	return (
		<footer
			className='footer flex flex-col md:flex-row justify-between p-10 bg-base-200 text-base-content rounded'
			style={{ background: 'url(/footer.png) center center/cover no-repeat' }}
		>
			<nav className='grid grid-flow-col gap-4 text-base-100'>
				<Link href='#req' className='link link-hover'>
					Реквизиты
				</Link>
				<Link href='/' className='link link-hover'>
					Контакты
				</Link>
				<Link href='/' className='link link-hover'>
					Услуги
				</Link>
				<Link href='/' className='link link-hover'>
					О нас
				</Link>
			</nav>
			<nav>
				<div className='grid grid-flow-col gap-4'>
					<Link href='/' aria-label='Telegram link'>
						<FaTelegramPlane className='fill-base-100' size={25} />
					</Link>
					<Link href='/' aria-label='Whatsapp link'>
						<IoLogoWhatsapp className='fill-base-100' size={25} />
					</Link>
					<Link href='/' aria-label='Phone link'>
						<FaSquarePhone className='fill-base-100' size={25} />
					</Link>
				</div>
			</nav>
			<aside className='text-base-100'>
				<p>Copyright © 2024 - Тарчевский И.А.</p>
			</aside>
		</footer>
	)
}

export default Footer
