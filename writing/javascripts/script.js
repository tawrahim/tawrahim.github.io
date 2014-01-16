var Tawheed = {

    init:function () {
        this.currentDate();
    },

    currentDate: function () {
        $("#mainDate").append(new Date());
    },

};

$(function () {
    Tawheed.init();
})
