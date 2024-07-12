export const addTitleToPopup = (title: string, className: string) => {
    const topPopupItem = document.getElementsByClassName(className)[0].childNodes[0].childNodes[0] as HTMLElement
    const hasTitle = topPopupItem.classList.contains("popup-title")
    if(!hasTitle) {
        const newElement = document.createElement("li")
        newElement.innerHTML = title
        newElement.classList.add("popup-title", "ant-menu-title-content")
        const menuItemPopupList = document.getElementsByClassName(className)[0].childNodes[0] as HTMLElement
        menuItemPopupList.prepend(newElement)
    }
}