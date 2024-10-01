'use client';

import React, { useState } from 'react';
import Tiptap from './TipTap';

const Document = () => {
	const [content, setContent] = useState('');

	return (
		<div>
			<div className='flex space-x-6'>
				<label className='text-base font-bold text-muted-foreground'>
					Title
				</label>
				<input
					className='h-10 w-96 px-3 py-1.5 text-base border-2 border-sky-500 placeholder:text-sm placeholder:text-muted-foreground outline-none rounded focus:shadow-cyan-500/50 focus:shadow-md'
					name='document title'
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
			</div>
			<div className='flex'>
				<p className='font-bold mt-5'>Content</p>
				<Tiptap />
			</div>
		</div>
	);
};

export default Document;
