import React from 'react';

const Counter = ({text, number}) => {
	return (
		<div className='bg-slate-100 flex flex-col gap-2 items-center justify-center p-8'>
			<p className='text-3xl font-bold text-slate-500'>{number}</p>
			<p className='text-sm font-medium text-slate-400 uppercase'>{text}</p>
		</div>
	);
};

export default Counter;
