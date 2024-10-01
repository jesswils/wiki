import Tiptap from './components/TipTap';

export default function Home() {
	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
				<h1>〰️ Welcome to your wiki </h1>
				{/* <ol className='list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
					<li className='mb-2'>
						Get started by editing{' '}
						<code className='bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold'>
							app/page.tsx
						</code>
						.
					</li>
					<li>Save and see your changes instantly.</li>
				</ol> */}
				<h2 className='font-bold text-center'>Create a document</h2>
				<div className='flex gap-4 items-center flex-col sm:flex-row'>
					<Tiptap />
				</div>
			</main>
			<footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'></footer>
		</div>
	);
}
