/**
 * 
 * Author: Micha Meier
 * 
 * Timer implementation with clock
 * and a function callback on timeout
 * 
 * @param {int} time in seconds untill untill timeout
 * @param {function} function callcack to execute on timeout
 * 
 */
var Timer = function(timeSec, timerCallback, element) {
  this.timeSec = timeSec + 1;
  this.callback = timerCallback;
  this.element = element;
  var interval = null;

  /**
   * Run timer
   * 
   * @param {element} HTML Element to set clock
   */
  this.run = function() {
    interval = setInterval(function(timer) {
      timer.timeSec -= 1;
      timer.element.innerHTML = "<span class='simple-timer'>" +
        correctInt(parseInt(timer.timeSec / 3600)) + ":" +
        correctInt(parseInt(timer.timeSec % 3600 / 60)) + ":" +
        correctInt(timer.timeSec % 60) + "</span>";
      
      if (timer.timeSec === 0) {
        endTimer();
        timer.callback();
      }
    }, 1000, this, endTimer, correctInt);
  }

  /**
   * Stop timer
   */
  var endTimer = function() {
    clearInterval(interval);
  }

  /**
   * Correct number format 
   */
  var correctInt = function(number) {
    if (number < 10) {
      return "0" + number;
    }
    return number;
  }

}