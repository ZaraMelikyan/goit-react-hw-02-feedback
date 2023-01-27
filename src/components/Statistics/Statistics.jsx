import React from "react";
import {
  StyledStatisticWrapper,
  StyledStatistic,
  StyledStatisticPercent,
} from 'components/Statistics/Statistics.styled';
export default function Statistics({
  state,
  total,
  positivePercentage,
}) {
    return (
      <StyledStatisticWrapper>
        <StyledStatistic>&#128525;Good : {state.good}</StyledStatistic>
        <StyledStatistic>&#128528;Neutral : {state.neutral}</StyledStatistic>
        <StyledStatistic>&#128533;Bad: {state.bad}</StyledStatistic>
        <StyledStatistic>Total: {total}</StyledStatistic>
        <StyledStatisticPercent>
          Positive feedback: {positivePercentage} %
        </StyledStatisticPercent>
      </StyledStatisticWrapper>
    );
}