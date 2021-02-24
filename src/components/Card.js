import React, {Component} from 'react';

const Card = ({id,name,email}) =>
(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${id}`} height='200' width='200' />
			<div>
				<h3>{name}</h3>
				<p>{email}</p>
			</div>
		</div>
	);

export default Card;