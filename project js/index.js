setInterval(() => {
    v = new Date()
    h = v.getHours()
    m = v.getMinutes()
    s = v.getSeconds()
    hrotation = 30*h + m*1/2
    mrotation = 6*m + s*1/10
    srotation = 6*s
    hours.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;
}, 1000);