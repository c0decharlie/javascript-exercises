(function (root) {
    var Clock = {
        time: function () {
            var $DOMClock = document.querySelector('#clock');
            var date = new Date();
            var year = date.getFullYear();
            var month = correctDate(date.getMonth() + 1);
            var day = correctDate(date.getDate());
            var hours = correctDate(date.getHours());
            var minutes = correctDate(date.getMinutes());
            var seconds = correctDate(date.getSeconds());

            $DOMClock.innerHTML = year + "/" + month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;
        },
        tickTock: function () {
            setInterval(() => this.time(), 1000);
        }
    };

    root.Clock = Clock;

}(window));
