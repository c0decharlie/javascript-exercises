(function (root) {
    var correctDate = function (n) {
        return n <= 9 ? '0' + n : n;
    };

    root.correctDate = correctDate;

}(window));
