import Wiki from './components/Wiki';

export default function Home() {
	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
				<h1>〰️ Welcome to your wiki 〰️ </h1>
				<h2 className='font-bold text-xl'>Add a new page</h2>
				{/* <div className='flex items-center space-x-3'>
					<label className='text-base font-bold text-muted-foreground'>
						Title
					</label>
					<input
						className='h-10 w-full px-3 py-1.5 text-base border-2 border-sky-500 placeholder:text-sm placeholder:text-muted-foreground outline-none rounded focus:shadow-cyan-500/50 focus:shadow-md'
						name='document title'
						value=''
					/>
				</div>
				<h2 className='font-bold text-center'>Create a document</h2>
				<div className='flex gap-4 items-center flex-col sm:flex-row'>
					<Tiptap />
				</div> */}
				<Wiki />
			</main>
			<footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'></footer>
		</div>
	);
}
