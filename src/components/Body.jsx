import React from 'react';
import Counter from './Counter';

const Body = () => {
	return (
		<div className='absolute bg-white flex justify-between w-[56rem] h-[26rem] rounded-xl overflow-hidden shadow-md'>
			<div className=''>
				<textarea
					className='w-full h-full resize-none px-6 py-4 outline-none text-slate-800 text-lg'
					placeholder='Enter your text'></textarea>
			</div>
			<div className='bg-slate-300 gap-[1px] grid grid-cols-2'>
				<Counter text='words' number='0' />
				<Counter text='characters' number='0' />
				<Counter text='instagram' number='280' />
				<Counter text='facebook' number='2200' />
			</div>
		</div>
	);
};

export default Body;
