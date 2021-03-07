var showingTooltip;

document.onmouseover = function(e) {
  e = e || event;
  var target = e.target || e.srcElement;

  var tooltip = target.getAttribute('data-tooltip');
  if (!tooltip) return;

  var tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = tooltip;
  document.body.appendChild(tooltipElem);

  var coords = getCoords(target);

  // не вылезаем за пределы экрана
  var scroll = getPageScroll();

  var left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth)/2^0;
  if (left < scroll.left) left = scroll.left; // не вылезать за левую границу экрана

  var top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < scroll.top) {
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
  
  showingTooltip = tooltipElem;
};

document.onmouseout = function(e) {

  if (showingTooltip) {
    document.body.removeChild(showingTooltip);
    showingTooltip = null;
  }

};


function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    
    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}

function getPageScroll() {
  if (window.pageXOffset != undefined) {
    return {
      left: pageXOffset,
      top: pageYOffset
    }
  }

  var html = document.documentElement;
  var body = document.body;

  var top = html.scrollTop || body && body.scrollTop || 0;
  top -= html.clientTop;

  var left = html.scrollLeft || body && body.scrollLeft || 0;
  left -= html.clientLeft;

  return { top: top, left: left };
}