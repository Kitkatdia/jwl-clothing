import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import jackets from '../../images/jackets.jpg';
import jeans from '../../images/jeans.jpg';
import shoes from '../../images/shoes.jpg';
import women from '../../images/women.jpg';
import men from '../../images/men.jpg';

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: 'jeans',
					imageUrl: `${jeans}`,
					id: 1,
					linkUrl: 'jeans',
				},
				{
					title: 'jackets',
					imageUrl: `${jackets}`,
					id: 2,
					linkUrl: '',
				},
				{
					title: 'shoes',
					imageUrl: `${shoes}`,
					id: 3,
					linkUrl: '',
				},
				{
					title: 'womens',
					imageUrl: `${women}`,
					size: 'large',
					id: 4,
					linkUrl: '',
				},
				{
					title: 'mens',
					imageUrl: `${men}`,
					size: 'large',
					id: 5,
					linkUrl: '',
				},
			],
		};
	}
	render() {
		return (
			<div className='directory-menu'>
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
