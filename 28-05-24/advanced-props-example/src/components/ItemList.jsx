import PropTypes from "prop-types";

const ItemList = ({ items, onRemoveItem, children }) => {
  return (
    <div>
      {children}
      <ul>
        {items.map((item) => (
          <li key={item}>
            {item} <button onClick={() => onRemoveItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default ItemList;
