function weekdaysText(weekdays) {
    let day = '';
    return function getText(target) {
        if (target > weekdays.length || target < 0)
            return 'Invalid day number';
        day = weekdays[target];
        return day;
        
    }
}
