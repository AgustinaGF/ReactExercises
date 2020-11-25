import React from "react";

class Item extends React.Component {
	handleClick = () => {
		this.props.onRemove(this.props.item);
	};
	shouldComponentUpdate(nextProps, nextState) {
		// el cumplimiento de esta condicion es lo que va a indicar si renderiza una vez mas o no
		if (nextProps.item.id !== this.props.item.id) {
			return true;
		}

		return false;
	}
	render() {
		const { item } = this.props;
		console.log(item.text);
		return (
			<div>
				<button onClick={this.handleClick}>x</button>
				<span key={item.id}> {item.text} </span>
			</div>
		);
	}
}
export default Item;
