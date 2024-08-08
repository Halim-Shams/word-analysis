import React, {useEffect, useState} from 'react';
import GlobalContext from './GlobalContext';

const ContextProvider = ({children}) => {
	const [input, setInput] = useState('');

	const [wordsCount, setWordsCount] = useState(0);
	const [charCount, setCharCount] = useState(0);
	const [instaCount, setInstaCount] = useState(280);
	const [fcbkCount, setFcbkCount] = useState(2200);

	const wordsSetter = () => {
		if (input.length < 1) {
			setWordsCount(0);
		} else {
			const wordsArr = input.split(' ');
			const wordsLength = wordsArr.length;
			setWordsCount(wordsLength);
		}
	};

	const instaLeftChars = instaCount - input.length;
	const fcbkLeftChars = fcbkCount - input.length;

	const charSetter = () => {
		const charLength = input.length;
		setCharCount(charLength);
	};

	useEffect(() => {
		wordsSetter();
		charSetter();
	}, [input]);

	return (
		<GlobalContext.Provider
			value={{
				wordsCount,
				setWordsCount,
				charCount,
				setCharCount,
				instaLeftChars,
				fcbkLeftChars,
				input,
				setInput,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};

export default ContextProvider;
