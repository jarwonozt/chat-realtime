var rgtClickContextMenu = document.getElementById('div-context-menu');

/** close the right click context menu on click anywhere else in the page*/
document.onclick = function(e) {
  rgtClickContextMenu.style.display = 'none';
}

/**
 present the right click context menu ONLY for the elements having the right class
 by replacing the 0 or any digit after the "to-" string with the element id , which
 triggered the event
*/
document.oncontextmenu = function(e) {
  //alert(e.target.id)
  var elmnt = e.target
  if (elmnt.className.startsWith("cls-context-menu")) {
    e.preventDefault();
    var eid = elmnt.id.replace(/link-/, "")
    rgtClickContextMenu.style.left = e.pageX + 'px'
    rgtClickContextMenu.style.top = e.pageY + 'px'
    rgtClickContextMenu.style.display = 'block'
    var toRepl = "to=" + eid.toString()
    rgtClickContextMenu.innerHTML = rgtClickContextMenu.innerHTML.replace(/to=\d+/g, toRepl)
    //alert(rgtClickContextMenu.innerHTML.toString())
  }
}