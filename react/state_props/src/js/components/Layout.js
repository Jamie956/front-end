import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component{
	//demo1 ==================================
	// constructor(){
	//     super();
	//     this.state = {name: "Alo"};
	// }
	// render(){
	//     return (
	//         <div>
	//             {this.state.name}
	//             <Header />
	//             <Footer />
	//         </div>
	//     );
	// }

	//demo2 ==================================
	// constructor(){
	//     super();
	//     this.state = {name: "Alo"};
	// }
	// render(){
	//     setTimeout(() => {
	//         this.setState({name: "Popi"});
	//     }, 1000);
	//     return (
	//         <div>
	//             {this.state.name}
	//             <Header />
	//             <Footer />
	//         </div>
	//     );
	// }

	//demo3 ==================================
	// render(){
	// 	const title = "Oops";
	// 	return (
	// 		<div>
	// 			<Header title={title}/>
	// 			<Header title={"Other Title"}/>
	// 			<Footer />
	// 		</div>
	// 	);
	// }

	//demo4 ==================================
	constructor(){
		super();
		this.state = {
			title: "Begin"
		}
	}
	render(){
		setTimeout(() => {
			this.setState({title: "End"});
		}, 2000);
		return (
			<div>
				<Header title={this.state.title}/>
				<Header title={"Other Title"}/>
				<Footer />
			</div>
		);
	}
}