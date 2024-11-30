import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create a context with a default value
const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <ColorContext.Provider value={{ state, setState }}>
      {children}
    </ColorContext.Provider>
  );
};

ColorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { ColorContext, ColorProvider };
