import React, { Component } from 'react';

export default (props) => {
		if(props.filter === props.currentFilter){
			return <span>{props.children}</span>
		}
		return(
			<a href="#"  onClick={(e) => {
				e.preventDefault();
				props.onFilterSelect(props.filter);
			}
			}>{props.children}</a>
		);
}