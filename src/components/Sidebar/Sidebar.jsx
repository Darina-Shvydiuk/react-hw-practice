import PropTypes from 'prop-types';
export const Sidebar = ({ menu, logo }) => {
  return (
    <div>
      {logo}
      <ul>
        {menu.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
Sidebar.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired
  ),
  logo: PropTypes.string.isRequired,
};
