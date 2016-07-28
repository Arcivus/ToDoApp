import React, { Component } from 'react';

export default (props) => {
		if(props.filter === props.currentFilter){
			return <span className="filter-link">{props.children}</span>
		}
		return(
			<a href="#" className="filter-link"  onClick={(e) => {
				e.preventDefault();
				props.onFilterSelect(props.filter);
			}
			}>{props.children}</a>
		);
}