const Card = () => {
	return (
		<figure className='flex flex-col md:flex-row md:mx-auto bg-slate-200 rounded-xl p-0 dark:bg-slate-800 max-w-3xl mt-10'>
			<div className='flex-1'>
				<img
					className='w-full h-full md:w-100 rounded-t-xl md:rounded-l-xl md:rounded-tr-none object-cover'
					src='/src/assets/images/s2.png'
					alt=''
				/>
			</div>
			<div className='flex-1 pt-6 md:p-8 text-center md:text-left space-y-4'>
				<blockquote>
					<p className='text-lg font-medium'>
						“Tailwind CSS is the only framework that I've seen scale on large
						teams. It’s easy to customize, adapts to any design, and the build
						size is tiny.”
					</p>
				</blockquote>
				<figcaption className='font-medium'>
					<div className='text-sky-500 dark:text-sky-400'>Sarah Dayan</div>
					<div className='text-slate-700 dark:text-slate-500'>
						Staff Engineer, Algolia
					</div>
				</figcaption>
			</div>
		</figure>
	);
};
export default Card;
