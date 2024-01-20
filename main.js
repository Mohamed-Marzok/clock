let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
setInterval(function () {
  let day = new Date();
  let hour = day.getHours() * 30;
  let minute = day.getMinutes() * 6;
  let second = day.getSeconds() * 6;
  hr.style.transform = `rotate(${hour + minute / 12}deg)`;
  min.style.transform = `rotate(${minute}deg)`;
  sec.style.transform = `rotate(${second}deg)`;
});
