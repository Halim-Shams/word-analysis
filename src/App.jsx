import React from 'react';
import Body from './components/Body';

const App = () => {
	return (
		<div className='bg-slate-100 h-screen relative flex items-center justify-center'>
			<Body />
			<div className='self-start bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 w-full h-56 flex items-center justify-center text-white text-6xl'>
				<span className='font-bold'>WORD</span>ANALYTICS
			</div>
		</div>
	);
};

export default App;
