const BoxContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div
			className='p-6 md:p-14'
			style={{
				boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
			}}
		>
			{children}
		</div>
	)
}

export default BoxContainer
