import { parse } from 'node-html-parser';

interface ShowNoteProps {
	content: string | undefined;
}

const ShowNote = ({ content }: ShowNoteProps) => {
	if(!content) return null;

	const parsedContent = parse(content);
	console.log(parsedContent)

	return <div dangerouslySetInnerHTML={{ __html: parsedContent }} />
};

export default ShowNote;
