vid.addEventListener("timeupdate", getCurrentTime);

var rows = 0;
var startTimes = [];
var durations = [];
var dur = 0;
var st = 0;
var currentTime = vid.currentTime;
var index = 0;
var lyrTime = [1.347, 1.583, 2.003, 3.3, 3.26, 3.633, 3.885, 4.758, 4.905, 5.635, 5.749, 6.384, 6.516, 6.853, 7.167, 8.104, 8.253, 8.509, 8.653, 9.005, 9.487, 9.798, 10.548, 11.776, 11.984, 12.222, 12.439, 12.642, 12.809, 14.856, 15.217, 15.538, 15.646, 16.332, 18.101, 18.533, 18.849, 18.963, 19.227, 19.790, 20.640, 20.886, 21.507, 21.732, 21.858, 22.140, 22.270, 22.555, 23.106, 23.449, 23.714, 24.736, 25.527, 26.338, 28.017, 30.511];

function getCurrentTime() {
    document.getElementById("cTime").innerHTML = vid.currentTime;
  }

function submitLyric(i) {
  var startTime = lyrTime[i];
  var duration = lyrTime[i+1] - lyrTime[i];
  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = startTime;
  cell2.innerHTML = duration;
  rows +=1;
  var sTableName = document.getElementById("myTable");
  startTimes.push(sTableName.rows[1].cells[0].innerText);
  durations.push(sTableName.rows[1].cells[1].innerText);
}
  
function submitTime(startTime, duration) {
  var startTime = document.getElementById("startTime").value;
  var duration = document.getElementById("duration").value;
  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = startTime;
  cell2.innerHTML = duration;
  rows +=1;
  var sTableName = document.getElementById("myTable");
  startTimes.push(sTableName.rows[1].cells[0].innerText);
  durations.push(sTableName.rows[1].cells[1].innerText);
}

function playVid() {
  vid.play();
  if(index < rows) {
    for(x of startTimes)
    vid.currentTime = startTimes[index];
    setTimeout(playVid, durations[index] * 1000);
    index += 1;
    }
    else {
      vid.pause();
    }
}

function randTime() {
  var startTime = document.getElementById("startTime").value;
  var duration = document.getElementById("duration").value;
  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var a = Math.random() * 29;
  var b = Math.random() * 5;
  if(a + b > 29) {
    b = 1;
  }
  cell1.innerHTML = a;
  cell2.innerHTML = b;
  rows +=1;
  var sTableName = document.getElementById("myTable");
  startTimes.push(sTableName.rows[1].cells[0].innerText);
  durations.push(sTableName.rows[1].cells[1].innerText);
}
  
function randTime10() {
  var i = 0;
  for(var i = 0; i < 10; i++) {
  randTime();
    }
}
  
function scale(dur, amt) {
  durations[durations.length -1] = durations[durations.length -1] * amt;
  console.log(durations[durations.length -1]);
  var table = document.getElementById("myTable");
  table.rows[1].cells[1].innerHTML = durations[durations.length -1];
}
  
function slide(st, amt) {
  startTimes[startTimes.length -1] += amt;
  console.log(startTimes[startTimes.length -1]);
  var table = document.getElementById("myTable");  
  table.rows[1].cells[0].innerHTML = startTimes[startTimes.length -1];
}
  
function pauseVid() {
  vid.pause();
}

function reset() {
    window.location.reload();
}