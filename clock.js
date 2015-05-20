function getTime() {
	var x = new Date();
	var sec = x.getSeconds();
	var min = x.getMinutes();
	var hour = x.getHours();
	sec = checkTime(sec);
	min = checkTime(min);
	hour = checkTime(hour);
	var time = "" + hour + ":" + min + ":" + sec;
	document.getElementById('time').innerHTML = time;
	setTimeout(function(){getTime()}, 1000);
}
function checkTime(n)
{
	if (n < 10)
	    return "0" + n;	
	else 
	    return n;
}
getTime();