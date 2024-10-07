import { useState } from 'react';
import ShowNote from './ShowNote';
import Tiptap from './TipTap';

const Editor = () => {
	const [htmlContent, setHtmlContent] = useState<string>();

	const handleEditorContentSave = (html: string) => {
		setHtmlContent(html);
	};
	return (
		<>
			<Tiptap onEditorContentSave={handleEditorContentSave} />
			<hr className='my-8 h-0.5 border-t-0 bg-neutral-100 opacity-100' />
			<div className='flex'>
			<div>
				{htmlContent ? <ShowNote content={htmlContent} /> : <h2 className='text-lg text-center'>You have no notes yet</h2>}
			</div>
			</div>
		</>
	);
};

export default Editor;
