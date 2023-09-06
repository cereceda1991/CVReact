import ColorPalette from '../ColorPalette/ColorPalette';
import './Sidebar.css';
import { SidebarPropTypes } from '../../utils/prop-types';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div>
        <ColorPalette />
      </div>
    </div>
  );
};

Sidebar.propTypes = SidebarPropTypes;

export default Sidebar;
