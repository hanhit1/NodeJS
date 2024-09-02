const events = [
    { id: 1, name: 'Conference', date: new Date('2023-12-01T09:00:00') },
    { id: 2, name: 'Workshop', date: new Date('2023-12-10T14:30:00') },
    { id: 3, name: 'Meeting', date: new Date('2023-11-20T11:45:00') },
    { id: 3, name: 'Solve rubik', date: new Date('2023-11-29T11:45:00') },
    { id: 3, name: 'Buy new phone', date: new Date('2023-11-30T11:45:00') },
    { id: 3, name: 'Eating', date: new Date('2023-12-20T11:45:00') },
    { id: 3, name: 'Walking', date: new Date('2023-12-20T11:45:00') },
    { id: 3, name: 'Runing', date: new Date('2025-12-20T12:45:00') },
    { id: 3, name: 'Checking Bug', date: new Date('2025-12-20T12:46:00') },
    { id: 3, name: 'Deploy Production', date: new Date('2025-12-20T12:47:00') },
    ];
    events.sort((a, b) => a.date - b.date);
    //console.log(events);

function getEvents(events,dateStr){
    const [day, month, year] = dateStr.split('-').map(Number);
    let   date =  new Date(year, month - 1, day);
    let result = [];
    for (let i = 0; i < events.length; i++){
        if (events[i].date.getFullYear() == date.getFullYear() && events[i].date.getMonth() == date.getMonth() && events[i].date.getDate() == date.getDate()){
            result.push(events[i]);
        }
    }
    return result;
}
//console.log(getEvents(events,'20-12-2023'));

function getEventsFromDate(events,dateStr){
    const [day, month, year] = dateStr.split('-').map(Number);
    let   date =  new Date(year, month - 1, day);
    function resetTime(date) {
        const newDate = new Date(date);
        newDate.setHours(0, 0, 0, 0);
        return newDate;
    }
    let dateNow = new Date();
    
    if (resetTime(dateNow) < date){
       return events.filter(event => resetTime(event.date) >= resetTime(dateNow) && resetTime(event.date) <= date).map(event => {
            const remainingDays = Math.floor((event.date - dateNow) / (1000 * 60 * 60 * 24));
            return {
                id : event.id,
                name : event.name,
                date : event.date.toISOString().split('T')[0],
                remainingDate : remainingDays + ( remainingDays> 2 ? " days" : " day")
            }

        });
    }
    else{
        return events.filter(event => resetTime(event.date) <= resetTime(dateNow) && resetTime(event.date) >= date).map(event => {
            const passedDays = Math.floor((dateNow - event.date) / (1000 * 60 * 60 * 24));
            return {
                id : event.id,
                name : event.name,
                date : event.date.toISOString().split('T')[0],
                passedDate : passedDays + (passedDays > 2 ? " days" : " day")
            }

    });
    }
}
//console.log(getEventsFromDate(events,'30-12-2025'));
console.log(getEventsFromDate(events,'10-12-2023'));