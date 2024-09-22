import Image from 'next/image'

const Timeline = () => {
	return (
		<div className={'cont mb-16'}>
			<h3>Как мы работаем?</h3>
			<Image
				src={'/timeline.png'}
				alt={'Timeline'}
				width={1900}
				height={800}
				className={'hidden lg:block object-cover'}
			/>
			<div className={'block lg:hidden relative'}>
				<div className={'absolute top-[10px] left-2 sm:left-8 text-[10px]'}>
					Консультация
					<br />
					осмотр объекта
				</div>
				<div className={'absolute top-[60px] right-2 sm:right-8 text-[10px]'}>
					рождение концепции
					<br />
					создание эскизов
				</div>
				<div className={'absolute top-[150px] left-2 sm:left-8 text-[10px]'}>
					подготовка
					<br />
					сметы
				</div>
				<div className={'absolute top-[200px] right-2 sm:right-8 text-[10px]'}>
					заключение
					<br />
					договора
				</div>
				<div className={'absolute top-[250px] left-2 sm:left-8 text-[10px]'}>
					закупка <br />
					материалов <br />и растений
				</div>
				<div className={'absolute top-[280px] right-2 sm:right-8 text-[10px]'}>
					подготовительные <br />
					работы и <br />
					реализация пректа
				</div>
				<div className={'absolute top-[350px] left-2 sm:left-8 text-[10px]'}>
					проверка всех <br />
					элементов декора
				</div>
				<div className={'absolute top-[410px] right-2 sm:right-8 text-[10px]'}>
					рекомендации по
					<br />
					уходу и заключение <br />
					договора на <br />
					дальнейшее <br />
					обслуживание
				</div>
				<div className={'absolute top-[500px] left-2 sm:left-8 text-[10px]'}>
					финальная сдача проекта
					<br />
					подписание акта <br />
					выполнения работ <br />
					сбор обратной связи
				</div>
				<Image
					src={'/timeline-mob.png'}
					alt={'Timeline'}
					width={200}
					height={100}
					className={'m-auto'}
				/>
			</div>
		</div>
	)
}

export default Timeline
