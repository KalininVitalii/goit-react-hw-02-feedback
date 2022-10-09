// // import css from './profile.module.css';
// import PropTypes from 'prop-types';
// import React from 'react';

// class Feedback extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onClickNeutral = () => {
//     this.setState(prevState => {
//       return {
//         neutral: prevState.neutral + 1,
//       };
//     });
//   };

//   onClickBad = () => {
//     this.setState(prevState => {
//       return {
//         bad: prevState.bad + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good * 100) / this.countTotalFeedback());
//   };

//   render() {
//     return (
//       <div>
//         <h1>Please leave feedback</h1>
//         <ul>
//           <li>
//             <button tupe="button" onClick={this.onClickGood}>
//               Good
//             </button>
//           </li>
//           <li>
//             <button tupe="button" onClick={this.onClickNeutral}>
//               Neutral
//             </button>
//           </li>
//           <li>
//             <button tupe="button" onClick={this.onClickBad}>
//               Bad
//             </button>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default Feedback;
