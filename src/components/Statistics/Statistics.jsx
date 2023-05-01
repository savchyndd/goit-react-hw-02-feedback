import PropTypes from 'prop-types';

import { StatisticsList, StatisticsItem } from './Statistics.module.jsx';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const statisticArray = [
    { statItem: good, title: 'Good' },
    { statItem: neutral, title: 'Neutral' },
    { statItem: bad, title: 'Bad' },
    { statItem: total, title: 'Total feedbacks' },
    { statItem: positivePercentage, title: 'Positive feedbacks' },
  ];

  return (
    <StatisticsList>
      {statisticArray.map(({ statItem, title }) => (
        <StatisticsItem key={title}>
          <p>
            {title}:{' '}
            <span>
              {title !== 'Positive feedbacks'
                ? statItem
                : positivePercentage + '%'}
            </span>
          </p>
        </StatisticsItem>
      ))}
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
