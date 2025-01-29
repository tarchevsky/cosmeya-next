export interface ServiceData {
	id: number
	src: string
	alt: string
	imgClass: string
	width: number
	height: number
	text: string
	btnText?: string
	btnHref?: string
	href?: string
}

export interface data {
	serviceData: ServiceData[]
}
