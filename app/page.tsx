import Wiki from './components/Wiki';

export default function Home() {
	return (
		<div className='flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
				<h1 className='text-2xl'>〰️ Welcome to your wiki 〰️ </h1>
				<h2 className='font-bold text-xl mb-0'>Add a new page</h2>
				<Wiki />
			</main>
			<footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'></footer>
		</div>
	);
}
