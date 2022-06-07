import React from "react";
import { ReactComponent as CarSettingLogo } from "../../../../assets/icons/sidebar/menu-items-car-setting.svg";
import { ReactComponent as CarTableLogo } from "../../../../assets/icons/sidebar/menu-items-car-table.svg";
import { ReactComponent as OrdersLogo } from "../../../../assets/icons/sidebar/menu-items-orders.svg";
import { ReactComponent as MenuItemsLogo4 } from "../../../../assets/icons/sidebar/menu-items-4.svg";
import { ReactComponent as MenuItemsLogo5 } from "../../../../assets/icons/sidebar/menu-items-5.svg";
import { ReactComponent as PersonLogo } from "../../../../assets/icons/sidebar/menu-items-person.svg";
import { ReactComponent as MenuItemsLogo7 } from "../../../../assets/icons/sidebar/menu-items-7.svg";
import { NavLink } from "react-router-dom";
import "./styles.scss";

interface IMenuItems {
  image: any;
  label: string;
  linkTo: string;
}

const sidebarMenuItems: Array<IMenuItems> = [
  {
    image: <CarSettingLogo />,
    label: "Карточка автомобиля",
    linkTo: "car-setting",
  },
  { image: <CarTableLogo />, label: "Список авто", linkTo: "car-table" },
  { image: <OrdersLogo />, label: "Заказы", linkTo: "orders" },
  { image: <MenuItemsLogo4 />, label: "Menu 4", linkTo: "menu" },
  { image: <MenuItemsLogo5 />, label: "Menu 5", linkTo: "menu" },
  { image: <PersonLogo />, label: "Menu 6", linkTo: "menu" },
  { image: <MenuItemsLogo7 />, label: "Menu 7", linkTo: "menu" },
];

const MenuList = () => {
  return (
    <div className="menu">
      {sidebarMenuItems.map((item, index) => (
        <NavLink to={item.linkTo} className="menu__item" key={index}>
          {item.image}
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default MenuList;
