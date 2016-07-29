import React, { Component } from 'react';

export default ({filter, currentFilter, children, onFilterSelect}) => {
		if(filter === currentFilter){
			return <span className="filter-link">{children}</span>
		}
		return(
			<a href="#" className="filter-link"  onClick={(e) => {
				e.preventDefault();
				onFilterSelect(filter);
			}
			}>{children}</a>
		);
}