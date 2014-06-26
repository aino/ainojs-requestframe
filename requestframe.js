module.exports = (function(){
  var r = 'RequestAnimationFrame'
  return window.requestAnimationFrame || 
    window['webkit'+r] || 
    window['moz'+r] || 
    window['o'+r] || 
    window['ms'+r] || 
    function( callback ) {
      window.setTimeout(callback, 1000 / 60)
    }
}())