interface timePeriodType {
    startTime: string,
    endTime: string,
}

const timePeriod: timePeriodType[] = []
let startTime = new Date()
startTime.setHours(9, 0, 0, 0);
let endTime = new Date()
endTime.setHours(24, 0, 0, 0);

const onlyImages: NodeRequire[] = [];

while (startTime < endTime) {
    const startTimeString = startTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
    const endTimeString = new Date(startTime.getTime() + 20 * 60000).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
    const image = getImageForTime(startTime);

    if (image) {
        timePeriod.push({
            startTime: startTimeString,
            endTime: endTimeString,
        })
        
        onlyImages.push(image)
    }

    startTime.setMinutes(startTime.getMinutes() + 20);
}

function getImageForTime(time: Date) {
    const hours = time.getHours();

    if (hours >= 7 && hours < 10) {
        return require('@app/images/7am-10am.png')
    } else if (hours >= 10 && hours < 15) {
        return require('@app/images/10am-3pm.png')
    } else if (hours >= 15 && hours < 19) {
        return require('@app/images/3pm-7pm.png')
    } else if (hours >= 19 && hours < 20) {
        return require('@app/images/7pm-8pm.png')
    } else if (hours >= 20 && hours < 22) {
        return require('@app/images/8pm-10pm.png')
    } else if (hours >= 22 || hours < 3) {
        return require('@app/images/10pm-3am.png')
    }
}

export default { timePeriod, onlyImages };