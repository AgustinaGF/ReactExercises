import React from "react";

class UserDetails extends React.Component {
	state = {
		user: {},
	};

	componentDidMount() {
		this.fetchData();
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.userId !== this.props.userId) {
			this.fetchData();
		}
	}

	fetchData = () => {
		const URL =
			"https://jsonplaceholder.typicode.com/users/" + this.props.userId;
		fetch(URL)
			.then((res) => res.json())
			.then((user) => this.setState({ user }));
	};
	render() {
		return (
			<div>
				<h2> User Details </h2>
				<pre>{JSON.stringify(this.state.user, null, 4)}</pre>
			</div>
		);
	}
}

export default UserDetails;
