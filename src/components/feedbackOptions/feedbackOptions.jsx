import React from 'react';
import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css'
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

  return (
    
    <>
    {Object.keys(options).map(key=>      
      <button key={key} type="button" name={key} onClick={(event)=>onLeaveFeedback(event)} className = {css.button}>{key}</button>      
      )}      
    </>
  );
};

FeedbackOptions.propTypes ={
  options:PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired
  }).isRequired
}