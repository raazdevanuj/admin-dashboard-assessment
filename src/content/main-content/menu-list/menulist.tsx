import React from 'react';
import './style.css';

interface MenuItemProps {
  iconClass: string;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ iconClass, label }) => (
  <div className="menu-item">
    <div className={`icon ${iconClass}`} />
    <div className="text">{label}</div>
    <div className="arrow">›</div>
  </div>
);

const MenuList: React.FC = () => {
  return (
    <div className="menu-list feedback-container ">
      <MenuItem iconClass="icon-goals" label="Goals" />
      <MenuItem iconClass="icon-dishes" label="Popular Dishes" />
      <MenuItem iconClass="icon-menus" label="Menus" />
      <MenuItem iconClass="icon-menus" label="List" />
      <MenuItem iconClass="icon-menus" label="Orders" />
    </div>
  );
};

export default MenuList;
