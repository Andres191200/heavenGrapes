import React,{ useState as UseState} from 'react';
var count=0;
var previousElementActive;

const option = props =>{	

	const optionClick = (event) =>{
		if(event.target.classList.contains('option-name')){
			event.target.parentElement.classList.add('option-active');
			props.setOption(props.option);
			if(count>=1){
				previousElementActive.classList.remove('option-active');
			}
			previousElementActive = event.target.parentElement;
			count++;
		}else{
			event.target.classList.add('option-active');
			props.setOption(props.option);
			if(count>=1){
				previousElementActive.classList.remove('option-active');
			}
			previousElementActive = event.target;
			count++;
		}
}

	return(
		<div className="option" onClick={optionClick}>
			<h1 className="option-name">{props.option.name}</h1>
		</div>
	)
}
export default option;