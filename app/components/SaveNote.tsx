import Link from 'next/link';

interface SaveNoteProps {
	content: string | JSX.Element | JSX.Element[];
}

const SaveNote = ({ content }: SaveNoteProps) => {
	// I would add this content to context instead of prop drilling
	return (
		<div>
			<Link href='/notes'>
				<button className='w-48 py-2.5 px-5 text-center ml-5  my-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border hover:bg-gray-100 hover:text-sky-500 focus:shadow-cyan-500/50'>
					Note
				</button>
			</Link>
			{content}
		</div>
	);
};

// This is a wip for when a user saves their note, they can click the button to view and edit their note in a seperate page.

export default SaveNote;
