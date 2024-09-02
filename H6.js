function checkDate(dateStr) {
    const [dayStr, monthStr, yearStr] = dateStr.split('-');
    if (dateStr.length !== 10 || dateStr[2] !== '-' || dateStr[5] !== '-') {
        return false;
    }
    if (dayStr.length !== 2 || monthStr.length !== 2 || yearStr.length !== 4) {
        return false;
    }
    const day = Number(dayStr);
    const month = Number(monthStr);
    const year = Number(yearStr);
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return false;
    }
    if (month < 1 || month > 12) {
        return false;
    }
    const date = new Date(`${year}-${month}-${day}`);
    if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
        return false;
    }
    return true;
}
console.log(checkDate("31/12/2023"));
console.log(checkDate("2023-12-31"));
console.log(checkDate("31-12-2023"));  
console.log(checkDate("29-02-2024"));
console.log(checkDate("31-04-2023"));
console.log(checkDate("32-12-2023"));  
console.log(checkDate("31-13-2023"));  