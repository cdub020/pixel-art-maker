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
    // if (event.target.style.backgroundColor === "red"){
    //     currcolor = document.getElementById('current');
    //     currcolor.style.backgroundColor = "red";
    // }
    // else if (event.target.style.backgroundColor === "blue"){
    //     currcolor = document.getElementById('current');
    //     currcolor.backgroundColor = "blue";
    // }
    // else if (event.target.style.backgroundColor === "yellow"){
    //     currcolor = document.getElementById('current');
    //     currcolor.backgroundColor = "yellow";
    // }
    // else{
    //     currcolor = document.getElementById('current');
    //     currcolor.backgroundColor = "green";
    // }
}

clicktable = (event) =>{
    var palettecolor = document.getElementById('current').style.backgroundColor
    if (event.target.style.backgroundColor !== "white" &&
        event.target.style.backgroundColor !== ""){
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
    newtable.width = '200px';
    for (var x=0; x<3;x++){
        var tr = newtable.insertRow();  
        for (var y=0;y<3;y++)  {
            var td = tr.insertCell();
            td.appendChild(document.createTextNode('Cell'));
            td.style.border = '1px solid black'
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