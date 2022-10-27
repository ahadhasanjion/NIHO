import React from 'react';

const LeftSide = () => {
    return (
        <div>
            <aside className="w-full p-6 dark:bg-gray-900 dark:text-gray-100">
	<nav className="space-y-8 text-sm">
		<div className="space-y-2">
			<h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400"></h2>
			<div className="flex flex-col space-y-1">
				<a rel="noopener noreferrer" href="#">Installation</a>
				<a rel="noopener noreferrer" href="#">Plugins</a>
			</div>
		</div>
		
	</nav>
</aside>
            
        </div>
    );
};

export default LeftSide;