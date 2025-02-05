export const getDateAndTimeFromTimestamp = (timeStamp: string | number) => {

    if (Number.isNaN(timeStamp)) {
        throw new Error (`Некорректные данные для преобразования в дату: ${timeStamp}`) 
    } else {
        const dateObj = new Date(Number(timeStamp))
        
        const date = dateObj.toLocaleDateString()
        const time = dateObj.toLocaleTimeString()

        return `${date} ${time}`
    }
    
        
}