import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';
import SaveNote from './SaveNote';

interface ShowNoteProps {
	content: string | undefined;
}

const ShowNote = ({ content }: ShowNoteProps) => {
	if (!content) return null;

	const santisedContent = DOMPurify.sanitize(content);
	const parsedContent = parse(santisedContent);

	return <SaveNote content={parsedContent} />;
};

export default ShowNote;
