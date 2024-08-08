import React, {useContext} from 'react';
import Counter from './Counter';
import GlobalContext from '../context/GlobalContext';

const Body = () => {
	const {
		input,
		setInput,
		wordsCount,
		charCount,
		instaLeftChars,
		fcbkLeftChars,
	} = useContext(GlobalContext);

	return (
		<div className='absolute bg-white flex justify-between w-[56rem] h-[26rem] rounded-xl overflow-hidden shadow-md'>
			<div className='w-full'>
				<textarea
					autoFocus={true}
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className='w-full h-full resize-none px-6 py-6 text-slate-800 text-lg outline-none overflow-y-scroll no-scrollbar'
					placeholder='Enter your text'></textarea>
			</div>
			<div className='w-[32rem] bg-slate-300 gap-[1px] grid grid-cols-2'>
				<Counter text='words' number={wordsCount} />
				<Counter text='characters' number={charCount} />
				<Counter text='instagram' number={instaLeftChars} />
				<Counter text='facebook' number={fcbkLeftChars} />
			</div>
		</div>
	);
};

export default Body;
