let alumni = [];

function tambahAlumni(){

let nama = document.getElementById("nama").value;
let prodi = document.getElementById("prodi").value;
let pekerjaan = document.getElementById("pekerjaan").value;

let data = {
nama:nama,
prodi:prodi,
pekerjaan:pekerjaan
};

alumni.push(data);

localStorage.setItem("alumni", JSON.stringify(alumni));

render();

}

function render(){

let list = document.getElementById("listAlumni");
list.innerHTML = "";

alumni.forEach(function(a){

let li = document.createElement("li");
li.innerHTML = "<b>" + a.nama + "</b> - " + a.prodi + " - " + a.pekerjaan;

list.appendChild(li);

});

}

function cariAlumni(){

let keyword = document.getElementById("search").value.toLowerCase();

let list = document.getElementById("listAlumni");
list.innerHTML="";

alumni
.filter(a => a.nama.toLowerCase().includes(keyword))
.forEach(function(a){

let li = document.createElement("li");
li.innerHTML = "<b>" + a.nama + "</b> - " + a.prodi + " - " + a.pekerjaan;

list.appendChild(li);

});

}

window.onload = function(){

let data = localStorage.getItem("alumni");

if(data){
alumni = JSON.parse(data);
}

render();

}
