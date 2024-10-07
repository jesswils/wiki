import { useState } from 'react';
import ShowNote from './ShowNote';
import Tiptap from './TipTap';

const NewNote = () => {
	const [htmlContent, setHtmlContent] = useState<string>();

	const handleEditorContentSave = (html: string) => {
		setHtmlContent(html);
	};
	return (
		<>
			<Tiptap onEditorContentSave={handleEditorContentSave} />
			<hr className='my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100' />
			<div className='flex'>
			<ShowNote content={htmlContent} />
			</div>
		</>
	);
};

export default NewNote;
