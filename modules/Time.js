function getTime(time) {
    
    if (time !== null || time<=3600) {
        var timeSeconds = (time % 60);
        var timeMinuts = Math.round(time/60);
        return("Czas w minutach wynosi:  " + timeMinuts + "min i " + timeSeconds + "s.");
    } else {
        var timeHours = Math.round(time/3600);
        timeMinuts = Math.round((time - (timeHours*3600))/60);
        timeSeconds = (time - (timeHours*3600) - (timeMinuts*60) % 60);
        return("Czas w godzinach wynosi:  " + timeHours + "godz., " + timeMinuts + "min i " + timeSeconds + "s.");
	};
};
exports.print = getTime;