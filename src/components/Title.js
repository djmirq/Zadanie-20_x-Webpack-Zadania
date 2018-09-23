import React from "react";
import style from "./Title.css";
import { hot } from "react-hot-loader";
import { Helmet } from "react-helmet";

const Title = props => (
  <h1 className={style.Title}>Tablica Kanban: {props.title.toString()}</h1>
);

export default hot(module)(Title);

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
