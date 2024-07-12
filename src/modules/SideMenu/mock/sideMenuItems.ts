import React, { ReactNode } from "react"

export type TMenuItem = {
  key: React.Key;
  icon?: React.ReactNode;
  children?: TMenuItem[];
  title?: string;
  label: React.ReactNode;
  type?: "group";
  popupClassName?: string;
};
  
  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: TMenuItem[],
    title?: string,
    type?: "group",
    popupClassName?: string,
    itemClassName?: string
  ): TMenuItem => {
    return {
      key,
      icon,
      children,
      title,
      label,
      type,
      popupClassName,
      itemClassName
    } as TMenuItem;
  }

  export const menuItems: (
    button: ReactNode,
     ) => TMenuItem[] = (button) => [

    getItem("Свернуть меню", "sub9", button, undefined, "Развернуть меню", undefined, "menu-item-popup"),

    getItem("Медиа", "sub1", '+', [
        getItem("option 1", "4"),
        getItem("option 2", "5"),
        getItem("option 3", "6"),
    ], "Медиа", undefined, 'sub1-popup'),
    getItem("Видео", "sub2", 'collapseCircle', [
        getItem("option 1", "8"),
        getItem("option 2", "9"),
        getItem("option 3", "10"),
    ], "Видео", undefined, 'sub2-popup'),
    getItem("Маршруты", "sub3", 'collapseCircle', [
        getItem("option 1", "12"),
        getItem("option 2", "13"),
        getItem("option 3", "14"),
    ], "Маршруты", undefined, 'sub3-popup'),
    getItem("Пассажиры", "sub5", 'collapseCircle', [
        getItem("option 1", "20"),
        getItem("option 2", "21"),
        getItem("option 3", "22"),
    ], "Пассажиры", undefined, 'sub4-popup'),
    getItem("Транспорт", "sub6", 'collapseCircle', [
        getItem("option 1", "24"),
        getItem("option 2", "25"),
        getItem("option 3", "26"),
    ], "Транспорт", undefined, '5'),
  ]