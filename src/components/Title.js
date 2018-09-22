import React from "react";
import { Helmet } from "react-helmet";
import { hot } from "react-hot-loader";

// 
const Title = props => <h1>To do: {props.title.toString()}</h1>
 
export default Title;

// class Application extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="application">
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title>To do: {this.props.toDo.toString()}</title>
//         </Helmet>
//       </div>
//     );
//   }
// }

// export default hot(module)(Application);
