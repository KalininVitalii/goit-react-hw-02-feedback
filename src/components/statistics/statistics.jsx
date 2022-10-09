import React from "react"
import css from "./statistics.module.css"

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
    return (

        <ul className={css.list}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Total: {positivePercentage}%</li>
    </ul>
)
    }