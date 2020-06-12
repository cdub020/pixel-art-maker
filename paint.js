palette = (event) =>{
    var currcolor;
    currcolor = document.getElementById('current');
    if (event.target.id === "red"){
        currcolor.style.backgroundColor = "red"
    }
    if (event.target.id === "green"){
        currcolor.style.backgroundColor = "green"
    }
    if (event.target.id === "yellow"){
        currcolor.style.backgroundColor = "yellow"
    }
    if (event.target.id === "blue"){
        currcolor.style.backgroundColor = "blue"
    }
}

clicktable = (event) =>{
    var palettecolor = document.getElementById('current').style.backgroundColor
    if (event.target.style.backgroundColor === palettecolor){
        event.target.style.backgroundColor = "white";
    }
    else{
        event.target.style.backgroundColor = palettecolor;
    }
}

function Table (){
    var newtable = document.createElement("table");
    newtable.id = "initial"
    newtable.style.border = '1px solid black';
    newtable.style.borderCollapse = "collapse";
    newtable.width = '500px';
    newtable.height = "150px";
    for (var x=0; x<40;x++){
        var tr = newtable.insertRow();  
        for (var y=0;y<50;y++)  {
            var td = tr.insertCell();
            td.style.height = "10px";
            td.style.width = "10px";
            //td.appendChild(document.createTextNode("text"));
            td.style.border = '1px solid black';
        }
    }
        document.body.appendChild(newtable)
}
document.addEventListener('DOMContentLoaded', function () {
  Table();
  var table = document.getElementById('initial');
  var newcells = table.getElementsByTagName("td");
  for (var x=0; x<document.getElementsByTagName('td').length;x++){
      newcells[x].onclick = clicktable
  }
  var palettecolor = document.getElementsByClassName("dot");
  for (var x=0; x<document.getElementsByClassName("dot").length;x++){
      palettecolor[x].onclick = palette;
  }

});