(function(){
  var clock = {
    time: function() {
      var DOMClock = document.getElementById('clock');
      var date = new Date();
      var currentTime = date.getFullYear()+"/"+date.getMonth()+"/"+date.getDay()+" "+ date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      DOMClock.innerHTML = currentTime;
    },
    tickTock: function(){
      var $this = this;
      setInterval(function(){
        $this.time();
      }, 1000);
    }
  };

  clock.tickTock();

}());
