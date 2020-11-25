import React from "react";
import Http from "./lifeCycle/componentDidMount/componentDidMount";
import UserDetails from "./lifeCycle/componentDidUpdate/componentDidUpdate";
import Item from "./lifeCycle/shouldComponent/shouldComponent";
import "./App.css";
import Timer from "./lifeCycle/componentWillUnmount/componentWillUnMount";

// lo use para DidMount y DidUpdate
// class App extends React.Component {
// 	state = {
// 		id: 1,
// 	};
// 	aumentar = () => {
// 		this.setState((state) => ({
// 			id: state.id + 1,
// 		}));
// 	};
// 	render() {
// 		const { id } = this.state;
// 		return (
// 			<div>
// 				{/* <h1>componentDidMount</h1>
// 				<Http /> */}
// 				<h1>componentDidUpdate</h1>
// 				<h2> ID: {id}</h2>
// 				<button onClick={this.aumentar}>Aumentar</button>
// 				<UserDetails userId={id} />
// 			</div>
// 		);
// 	}
// }

// app para shouldComponent
// class App extends React.Component {
// 	state = {
// 		list: [],
// 	};
// 	agregar = (e) => {
// 		e.preventDefault();
// 		const text = e.target[0].value;
// 		const id = Math.random().toString(16);
// 		const pendiente = { text, id };
// 		this.setState((state) => ({
// 			list: [...state.list, pendiente],
// 		}));
// 		// para limpiar
// 		e.target[0].value = "";
// 	};
// 	eliminar = (item) => {
// 		this.setState((state) => ({
// 			list: state.list.filter((_item) => {
// 				return item.id !== _item.id;
// 			}),
// 		}));
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<h3>shouldComponentUpdate</h3>
// 				<form onSubmit={this.agregar}>
// 					<input type="text" placeholder="ingresa tu pendiente"></input>
// 					<button>Agregar</button>
// 				</form>
// 				<div>
// 					{this.state.list.map((item) => (
// 						<Item key={item.id} item={item} onRemove={this.eliminar} />
// 					))}
// 				</div>
// 			</div>
// 		);
// 	}
// }

class App extends React.Component {
	state = {
		mostrar: true,
	};
	desmontar = () => {
		this.setState({ mostrar: false });
	};
	render() {
		return (
			<div>
				<h3> componentWillUnMount </h3>
				<button onClick={this.desmontar}>Desmontar</button>
				{this.state.mostrar && <Timer />}
			</div>
		);
	}
}
export default App;
