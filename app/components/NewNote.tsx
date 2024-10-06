import { useState } from 'react';
import Tiptap from './Tiptap';
import ShowNote from './ShowNote';

const NewNote = () => {
	const [htmlContent, setHtmlContent] = useState<string>();

	const handleEditorContentSave = (html: string) => {
		setHtmlContent(html);
	};
	return (
		<>
			<Tiptap onEditorContentSave={handleEditorContentSave} />
			<hr className='my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100' />
			<ShowNote content={htmlContent} />
		</>
	);
};

export default NewNote;
