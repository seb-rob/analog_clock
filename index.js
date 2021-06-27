setInterval(()=> {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var hourRotation = ((30*h) + (m/2) + (s/120));
    var minuteRotation = ((6*m) + (s/10));
    var secondRotation = (6*s);

    document.getElementById("hour").style.transform = `rotate(${hourRotation}deg)`;
    document.getElementById("minute").style.transform = `rotate(${minuteRotation}deg)`;
    document.getElementById("second").style.transform = `rotate(${secondRotation}deg)`;
},1000)


//hour hand calculation......................
// 12 hours ==> 360deg rotations
// 1 hours ==> 360deg/12 ==> 30deg
// for h hours ==> 30h

// 60 min ==> 30deg rotations
// 1 min ==> 30deg/60 ==> 1/2 deg rotation
// for m minute ==> m/2

// 60 s ==> 1/2 deg
// 1 second ==> 60/2 ==> 30
// for s second ==> 30s

// first formula = (30h + m/2 + s/2)



//minute hand calculation........................
// 60min ==> 360deg Rotation
// 1 min ==> 360deg/60min ==> 6 deg

// 60 s ==> 6 deg 
// 1 s ==> 1/10 deg
// for s second ==> s/10

// for m minute = 6m + s/10




// second hand rotation...................
// 60 sec ==> 360 deg rotation 
// 1 sec ==> 360deg/60min ==> 6 deg
// for s second = 6s




