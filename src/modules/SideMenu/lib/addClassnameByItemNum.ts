export const addClassnameByItemNum = (itemNum: number, itemsLength: number) => {
    switch (itemNum) {
        case 0: return "collapse-logo-item"
            break 
        case itemsLength - 2 : return "collapse-switch-theme-item"
            break
        case itemsLength - 1 : return "collapse-toggler-item"
            break
    }
}