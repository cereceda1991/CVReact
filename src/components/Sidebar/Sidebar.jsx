import { useContext, useCallback } from 'react';
import { AppContext } from '../../context/AppContext';
import ColorPalette from '../ColorPalette/ColorPalette';
import './Sidebar.css';
import { SidebarPropTypes } from '../../utils/prop-types';

const Sidebar = ({ isOpen }) => {
  const { backgroundColor, updateBackgroundColor } = useContext(AppContext);

  // Utiliza useCallback para envolver la función y especificar las dependencias
  const handleBackgroundColorChange = useCallback(
    (color) => {
      updateBackgroundColor(color);
    },
    [updateBackgroundColor],
  );

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div>
        <ColorPalette
          backgroundColor={backgroundColor}
          onColorChange={handleBackgroundColorChange}
        />
      </div>
    </div>
  );
};

Sidebar.propTypes = SidebarPropTypes;

export default Sidebar;
