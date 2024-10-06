'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
// import { useState } from 'react';

interface TiptapProps {
	onEditorContentSave: (html: string) => void;
}

const Tiptap = ({ onEditorContentSave }: TiptapProps) => {
	// const [editorContent, setEditorContent] = useState();

	// const content = editorContent;

	const editor = useEditor({
		extensions: [StarterKit],
		editorProps: {
			attributes: {
				class:
					'bg-white m-5 border-2 border-sky-500 rounded-md size-96 focus:shadow-cyan-500/50 focus:shadow-lg p-1 outline-none',
			},
		},
		// content,
		// autofocus: true,
		// onUpdate: ({ editor }) => {
		// 	const json = editor.getJSON();
		// 	setEditorContent(json);
		// },
	});

	if (!editor) return null;

	const handleEditorContent = () => {
		const html = editor.getHTML();
		// console.log(html);
		onEditorContentSave(html);
	};

	return (
		<>
			<button
				onClick={() => editor.chain().focus().toggleBold().run()}
				disabled={!editor.can().chain().focus().toggleBold().run()}
				className={editor.isActive('bold') ? 'is-active' : ''}
			>
				Bold
			</button>
			<div>
				<EditorContent editor={editor} />
			</div>
			<div className='flex items-center justify-center'>
				<button
					className='w-64 py-2.5 px-5 text-center ml-10 my-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-sky-500'
					onClick={handleEditorContent}
				>
					Save{' '}
				</button>
			</div>
		</>
	);
};

export default Tiptap;
