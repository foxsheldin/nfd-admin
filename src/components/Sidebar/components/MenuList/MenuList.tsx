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
  { image: <CarTableLogo />, label: "Список авто", linkTo: "cars" },
  { image: <OrdersLogo />, label: "Заказы", linkTo: "orders" },
  {
    image: <MenuItemsLogo4 />,
    label: "Список категорий",
    linkTo: "car-categories",
  },
  { image: <MenuItemsLogo5 />, label: "Типы тарифов", linkTo: "rate-types" },
  { image: <PersonLogo />, label: "Список тарифов", linkTo: "rate" },
  { image: <MenuItemsLogo7 />, label: "Menu 7", linkTo: "menu" },
];

const MenuList = ({
  setOpenMenu,
}: {
  setOpenMenu: (isOpenMenu: boolean) => void;
}) => {
  return (
    <div className="menu">
      {sidebarMenuItems.map((item, index) => (
        <NavLink
          to={item.linkTo}
          className="menu__item"
          key={index}
          onClick={() => setOpenMenu(false)}
        >
          {item.image}
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default MenuList;
