'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const Tiptap = () => {
	const editor = useEditor({
		extensions: [StarterKit],
		editorProps: {
			attributes: {
				class:
					'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 border border-sky-500 rounded-md size-96 focus:border-0 focus:shadow-cyan-500/50 focus:shadow-lg',
			},
		},
		content: '<p>Hello World! 🌎️</p>',
		autofocus: true,
	});

	return <EditorContent editor={editor} />;
};

export default Tiptap;
