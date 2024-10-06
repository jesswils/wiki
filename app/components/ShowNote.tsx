import React from 'react';

interface ShowNoteProps {
	content: string | undefined;
}

const ShowNote = ({ content }: ShowNoteProps) => {
	return <div>{content}</div>;
};

export default ShowNote;
