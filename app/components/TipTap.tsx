'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useState } from 'react';

const Tiptap = () => {
	const [editorContent, setEditorContent] = useState<string>('');

	const editor = useEditor({
		extensions: [StarterKit],
		editorProps: {
			attributes: {
				class:
					'm-5 border-2 border-sky-500 rounded-md size-96 focus:border-0 focus:shadow-cyan-500/50 focus:shadow-lg p-1',
			},
		},
		content: '<p>Hello World! 🌎️</p>',
		autofocus: true,
		onUpdate: ({ editor }) => {
			const text = editor.getText();
			setEditorContent(text);
		},
	});

	return <EditorContent editor={editor} value={editorContent} />;
};

export default Tiptap;
