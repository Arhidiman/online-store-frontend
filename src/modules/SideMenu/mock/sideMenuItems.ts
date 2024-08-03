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

  export const menuItems: () => TMenuItem[] = () => [
    getItem("Все товары", "sub1", '', undefined, "Все товары", undefined, 'sub1-popup'),
    getItem("Бытовая электроника", "sub2", 'collapseCircle', undefined, "Бытовая электроника", undefined, 'sub2-popup'),
    getItem("Гаджеты", "sub3", 'collapseCircle', undefined, "Гаджеты", undefined, 'sub3-popup'),
    getItem("Товары для дома", "sub5", '888', undefined, "Товары для дома", undefined, 'sub4-popup'),
    getItem("Одежда", "sub6", 'collapseCircle', undefined, "Одежда", undefined, '5'),
  ]