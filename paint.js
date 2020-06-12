// Function get the color picker value and assigns it to background of cell clicked
clicktable = (event) =>{
    var palettecolor = document.getElementById('colorpicker').value
    event.target.style.backgroundColor = palettecolor;
    
}

function Table (){
    var newtable = document.createElement("table");
    newtable.id = "initial"
    newtable.align = "center"

    for (var x=0; x<40;x++){
        var tr = newtable.insertRow();  
        for (var y=0;y<50;y++)  {
            tr.insertCell();
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
});