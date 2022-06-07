import React, { useCallback, useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as NotificationsIcon } from "../../assets/icons/notifications.svg";
import { ReactComponent as DropdownIcon } from "../../assets/icons/dropdown.svg";
import ProfileImage from "../../assets/images/profile.png";
import "./styles.scss";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/reducers/authThunkCreators";

const MainHeader = ({
  isOpenMenu,
  setOpenMenu,
}: {
  isOpenMenu: boolean;
  setOpenMenu: (isOpenMenu: boolean) => void;
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const { isAuth } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const logoutHandler = () => {
    dispatch(logout());
  };

  interface IDropdownsItems {
    label: string;
    linkTo: string;
    onClick?: () => void;
  }

  const dropdownItems: Array<IDropdownsItems> = [
    { label: "Выйти", linkTo: "#", onClick: logoutHandler },
  ];

  const onNavToggleClick = () => {
    setOpenMenu(!isOpenMenu);
  };

  const handleDropdownMenuClick = useCallback(() => {
    setDropdownOpen(!isDropdownOpen);
  }, [isDropdownOpen]);

  return (
    <div className="main-header">
      <div className="main-wrapper">
        <div className="mobile-menu">
          <button
            type="button"
            className="mobile-menu__toggle"
            onClick={onNavToggleClick}
          >
            <span className="visually-hidden">Закрыть меню</span>
          </button>
        </div>
        <div className="search">
          <SearchIcon className="search__button" />
          <input
            type="search"
            className="input_search"
            placeholder="Поиск ..."
          />
        </div>
        <div className="profile">
          <div className="profile__notifications">
            <NotificationsIcon />
            <div className="count-notify">100</div>
          </div>
          <div
            className="profile__menu user-menu"
            onClick={handleDropdownMenuClick}
          >
            <img
              src={ProfileImage}
              className="user-menu__image"
              alt="Изображение профиля"
              width="42"
              height="42"
            />
            <div className="user-menu__username">Admin</div>
            <DropdownIcon className="user-menu__dropdown-icon" />
            {isDropdownOpen && (
              <div className="dropdown" onMouseLeave={handleDropdownMenuClick}>
                {dropdownItems?.map((item, index) => (
                  <a
                    href={item.linkTo}
                    className="dropdown__item"
                    onClick={item?.onClick}
                    key={index}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
