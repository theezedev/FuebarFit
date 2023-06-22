import React from 'react';
import { Text } from 'react-native';

const formatDate = (date) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};

const TodayDate = () => {
  const today = new Date();
  const formattedDate = formatDate(today);

  return <Text>{formattedDate}</Text>;
};

export default TodayDate;
