// Menu.js
import React, { useState } from 'react';
import '../styles/menu.css'; // Import the CSS file

const Menu = ({ onClose }) => {
  const [menuData, setMenuData] = useState([
    {
      id: 1,
      label: 'Section 1',
      items: [
        { id: 11, label: 'Item 1.1', subItems: ['Subitem 1.1.1', 'Subitem 1.1.2'] },
        { id: 12, label: 'Item 1.2', subItems: ['Subitem 1.2.1', 'Subitem 1.2.2'] },
      ],
    },
    {
      id: 2,
      label: 'Section 2',
      items: [
        { id: 21, label: 'Item 2.1', subItems: ['Subitem 2.1.1', 'Subitem 2.1.2'] },
        { id: 22, label: 'Item 2.2', subItems: ['Subitem 2.2.1', 'Subitem 2.2.2'] },
      ],
    },
    {
      id: 3,
      label: 'Section 3',
      items: [
        { id: 31, label: 'Item 3.1', subItems: ['Subitem 3.1.1', 'Subitem 3.1.2'] },
        { id: 32, label: 'Item 3.2', subItems: ['Subitem 3.2.1', 'Subitem 3.2.2'] },
      ],
    },
  ]);

  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSectionClick = (sectionId) => {
    setSelectedSection(sectionId);
    setSelectedItem(null); // Reset selectedItem when switching sections
  };

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
  };

  return (
    <div className={`menu-content show`}>
      <div className="menu-inner">
        <h1>Menu Content</h1>

        <div className="menu-sections">
          {menuData.map((section) => (
            <div
              key={section.id}
              className={`menu-section ${selectedSection === section.id ? 'active' : ''}`}
              onClick={() => handleSectionClick(section.id)}
            >
              {section.label}
            </div>
          ))}
        </div>

        <div className="menu-items">
          {selectedSection !== null &&
            menuData[selectedSection - 1].items.map((item) => (
              <div
                key={item.id}
                className={`menu-item ${selectedItem === item.id ? 'active' : ''}`}
                onClick={() => handleItemClick(item.id)}
              >
                {item.label}
              </div>
            ))}
        </div>

        <div className="menu-subitems">
          {selectedItem !== null &&
            menuData[selectedSection - 1].items.find((item) => item.id === selectedItem)?.subItems.map(
              (subItem, index) => (
                <div key={index} className="menu-subitem">
                  {subItem}
                </div>
              )
            )}
        </div>

        <button onClick={onClose}>Close Menu</button>
      </div>
    </div>
  );
};

export default Menu;
