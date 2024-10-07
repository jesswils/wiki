'use client';

import NewNote from './NewNote';
// import Tiptap from './Tiptap';

// import React, { useState } from 'react';

const Document = () => {
	// const [content, setContent] = useState('');

	return (
		<div>
			<div className='flex space-x-12'>
				{/* <label
					className='text-base font-bold text-muted-foreground'
					htmlFor='document title'
				>
					Title
				</label>
				<input
					className='h-10 w-96 px-3 py-1.5 text-base border-2 border-sky-500 outline-none rounded focus:shadow-cyan-500/50 focus:shadow-md'
					name='document title'
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/> */}
			</div>
			<div className='flex'>
				<p className='font-bold mt-5'>Content</p>
				<NewNote />
			</div>
			{/* conditionally render */}
			<div>
				<h2 className='text-lg text-center pt-10'>You have no notes yet</h2>
			</div>
		</div>
	);
};

export default Document;
