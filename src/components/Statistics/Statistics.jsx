import PropTypes from 'prop-types';
import './Statistics.css';

export const Statistics = ({ title, stats}) => {
    const getRandomHexColor = () => {
        return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6,0)}`;
    };

    return (
        <section class="statistics">
  <h2 class="title">{title}</h2>

  <ul class="stat-list">
    {stats.map(stat => (
        <li class="item" style={{ backgroundColor: getRandomHexColor() }}>
            <span key="id" class="label">
              {stat.label}
            </span>
            <span class="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
    );
};
   