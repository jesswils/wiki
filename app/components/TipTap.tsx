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
    	<div className='w-1/2'>
			<button
				onClick={() => editor.chain().focus().toggleBold().run()}
				disabled={!editor.can().chain().focus().toggleBold().run()}
				className={editor.isActive('bold') ? 'is-active' : ''}
        id='button-group'
			>
				Bold
			</button>
			<button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
          id='button-group'
        >
          Italic
        </button>
		<button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
          id='button-group'
        >
          Strikethrough
        </button>
		<button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={editor.isActive('code') ? 'is-active' : ''}
          id='button-group'
        >
          Code
        </button>
		<button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
          id='button-group'
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
          id='button-group'
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
          id='button-group'
        >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
          id='button-group'
        >
          H4
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
          id='button-group'
        >
          H5
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
          id='button-group'
        >
          H6
        </button>
		<button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
          id='button-group'
        >
          Bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
          id='button-group'
        >
          Ordered list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}
          id='button-group'
        >
          Code block
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
          id='button-group'
        >
          Blockquote
        </button>
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()}
          id='button-group'>
          Horizontal rule
        </button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()}
          id='button-group'>
          Hard break
        </button>
        <button onClick={() => editor.chain().focus().undo().run()}
          id='button-group'>
          Undo
        </button>
        <button onClick={() => editor.chain().focus().redo().run()}
          id='button-group'>
          Redo
        </button>
        <div className='flex'>
				<EditorContent editor={editor} />
        </div>
				<button
					className='w-96 py-2.5 px-5 text-center ml-5  my-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-sky-500'
					onClick={handleEditorContent}
				>
					Save{' '}
				</button>
      </div>
		</>
	);
};

export default Tiptap;
