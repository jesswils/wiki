'use client';

import { useState } from 'react';
import ShowNote from './ShowNote';
import Tiptap from './TipTap';

const Editor = () => {
	const [htmlContent, setHtmlContent] = useState<string>();

	const handleEditorContentSave = (html: string) => {
		setHtmlContent(html);
	};
	// set item into local storage or create a database to post the information to
	// use effect to load the data on initial page load
	// refactor the below to once we have made a successful request, display the notes
	return (
		<>
			<Tiptap onEditorContentSave={handleEditorContentSave} />
			<hr className='my-8 h-0.5 border-t-0 bg-neutral-100 opacity-100' />
			{htmlContent ? (
				<ShowNote content={htmlContent} />
			) : (
				<h2 className='text-lg text-center mt-0'>You have no notes yet</h2>
			)}
		</>
	);
};

export default Editor;
