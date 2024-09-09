import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import FadeIn from '@/components/fadeIn/FadeIn'
import { HeroProps, LayoutProps } from '@/types'
import Hero from '@/components/hero/Hero'
import '@fontsource/cormorant-garamond/300.css'
import '@fontsource/cormorant-garamond/400.css'
import '@fontsource/cormorant-garamond/500.css'
import '@fontsource/cormorant-garamond/600.css'
import '@fontsource/cormorant-garamond/700.css'
import '@fontsource-variable/lora'

interface ExtendedLayoutProps extends LayoutProps {
	heroProps?: HeroProps
}

const Layout = ({ children, heroProps }: ExtendedLayoutProps) => {
	return (
		<>
			<div className='relative mb-9 md:mb-28'>
				<div className='absolute top-0 right-0 z-10 w-full h-[100px]'>
					<Header />
				</div>
				{heroProps && <Hero {...heroProps} />}
			</div>

			{children}

			<FadeIn>
				<Footer />
			</FadeIn>
		</>
	)
}

export default Layout
