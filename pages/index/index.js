//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        list: [
            {
                name: '1',
                url: './images/1.png'
            },
            {
                name: '2',
                url: './images/2.png'
            },
            {
                name: '3',
                url: './images/3.png'
            },
            {
                name: '4',
                url: './images/4.png'
            },
            {
                name: '5',
                url: './images/5.png'
            },
            {
                name: '6',
                url: './images/6.png'
            },
            {
                name: '7',
                url: './images/7.png'
            },
            {
                name: '8',
                url: './images/8.png'
            },
            {
                name: '0'
            },
        ],
        initNum: 8,
        loaded: false,
    },
    onLoad: function () {
        for (var i = 0; i < 100; i++) {
            this.randomMove(this.data.initNum);
        }
        this.setData({
            loaded: true,
        })
    },
    randomMove: function (index) {
        switch (index) {
            case 0:
                var ranNum = parseInt(2 * Math.random() + 1);
                switch (ranNum) {
                    case 1:
                        this.ismove(index, index + 1);
                        this.setData({
                            initNum: index + 1,
                        })
                        break;
                    case 2:
                        this.ismove(index, index + 3);
                        this.setData({
                            initNum: index + 3,
                        })
                        break;
                }
                break;
            case 1:
                var ranNum = parseInt(3 * Math.random() + 1);
                switch (ranNum) {
                    case 1:
                        this.ismove(index, index - 1);
                        this.setData({
                            initNum: index - 1,
                        })
                        break;
                    case 2:
                        this.ismove(index, index + 1);
                        this.setData({
                            initNum: index + 1,
                        })
                        break;
                    case 3:
                        this.ismove(index, index + 3);
                        this.setData({
                            initNum: index + 3,
                        })
                        break;
                }
                break;
            case 2:
                var ranNum = parseInt(2 * Math.random() + 1);
                switch (ranNum) {
                    case 1:
                        this.ismove(index, index - 1);
                        this.setData({
                            initNum: index - 1,
                        })
                        break;
                    case 2:
                        this.ismove(index, index + 3);
                        this.setData({
                            initNum: index + 3,
                        })
                        break;
                }
                break;
            case 3:
                var ranNum = parseInt(3 * Math.random() + 1);
                switch (ranNum) {
                    case 1:
                        this.ismove(index, index - 3);
                        this.setData({
                            initNum: index - 3,
                        })
                        break;
                    case 2:
                        this.ismove(index, index + 1);
                        this.setData({
                            initNum: index + 1,
                        })
                        break;
                    case 3:
                        this.ismove(index, index + 3);
                        this.setData({
                            initNum: index + 3,
                        })
                        break;
                }
                break;
            case 4:
                var ranNum = parseInt(4 * Math.random() + 1);
                switch (ranNum) {
                    case 1:
                        this.ismove(index, index - 1);
                        this.setData({
                            initNum: index - 1,
                        })
                        break;
                    case 2:
                        this.ismove(index, index - 3);
                        this.setData({
                            initNum: index - 3,
                        })
                        break;
                    case 3:
                        this.ismove(index, index + 1);
                        this.setData({
                            initNum: index + 1,
                        })
                        break;
                    case 4:
                        this.ismove(index, index + 3);
                        this.setData({
                            initNum: index + 3,
                        })
                        break;
                }
                break;
            case 5:
                var ranNum = parseInt(3 * Math.random() + 1);
                switch (ranNum) {
                    case 1:
                        this.ismove(index, index - 3);
                        this.setData({
                            initNum: index - 3,
                        })
                        break;
                    case 2:
                        this.ismove(index, index - 1);
                        this.setData({
                            initNum: index - 1,
                        })
                        break;
                    case 3:
                        this.ismove(index, index + 3);
                        this.setData({
                            initNum: index + 3,
                        })
                        break;
                }
                break;
            case 6:
                var ranNum = parseInt(2 * Math.random() + 1);
                switch (ranNum) {
                    case 1:
                        this.ismove(index, index + 1);
                        this.setData({
                            initNum: index + 1,
                        })
                        break;
                    case 2:
                        this.ismove(index, index - 3);
                        this.setData({
                            initNum: index - 3,
                        })
                        break;
                }
                break;
            case 7:
                var ranNum = parseInt(3 * Math.random() + 1);
                switch (ranNum) {
                    case 1:
                        this.ismove(index, index - 1);
                        this.setData({
                            initNum: index - 1,
                        })
                        break;
                    case 2:
                        this.ismove(index, index - 3);
                        this.setData({
                            initNum: index - 3,
                        })
                        break;
                    case 3:
                        this.ismove(index, index + 1);
                        this.setData({
                            initNum: index + 1,
                        })
                        break;
                }
                break;
            case 8:
                var ranNum = parseInt(2 * Math.random() + 1);
                switch (ranNum) {
                    case 1:
                        this.ismove(index, index - 1);
                        this.setData({
                            initNum: index - 1,
                        })
                        break;
                    case 2:
                        this.ismove(index, index - 3);
                        this.setData({
                            initNum: index - 3,
                        })
                        break;
                }
                break;
        }
    },
    move: function ({ currentTarget: { dataset: { index } } }) {
        console.log(index);
        var name = this.data.list[index].name;
        console.log(2);
        if (name == 0) {
            return;
        }
        switch (index) {
            case 0:
                this.data.list[index + 1].name == '0' ? this.ismove(index, index + 1) : null;
                this.data.list[index + 3].name == '0' ? this.ismove(index, index + 3) : null;
                break;
            case 1:
                this.data.list[index - 1].name == '0' ? this.ismove(index, index - 1) : null;
                this.data.list[index + 1].name == '0' ? this.ismove(index, index + 1) : null;
                this.data.list[index + 3].name == '0' ? this.ismove(index, index + 3) : null;
                break;
            case 2:
                this.data.list[index - 1].name == '0' ? this.ismove(index, index - 1) : null;
                this.data.list[index + 3].name == '0' ? this.ismove(index, index + 3) : null;
                break;
            case 3:
                this.data.list[index - 3].name == '0' ? this.ismove(index, index - 3) : null;
                this.data.list[index + 1].name == '0' ? this.ismove(index, index + 1) : null;
                this.data.list[index + 3].name == '0' ? this.ismove(index, index + 3) : null;
                break;
            case 4:
                this.data.list[index - 3].name == '0' ? this.ismove(index, index - 3) : null;
                this.data.list[index - 1].name == '0' ? this.ismove(index, index - 1) : null;
                this.data.list[index + 1].name == '0' ? this.ismove(index, index + 1) : null;
                this.data.list[index + 3].name == '0' ? this.ismove(index, index + 3) : null;
                break;
            case 5:
                this.data.list[index - 3].name == '0' ? this.ismove(index, index - 3) : null;
                this.data.list[index - 1].name == '0' ? this.ismove(index, index - 1) : null;
                this.data.list[index + 3].name == '0' ? this.ismove(index, index + 3) : null;
                break;
            case 6:
                this.data.list[index + 1].name == '0' ? this.ismove(index, index + 1) : null;
                this.data.list[index - 3].name == '0' ? this.ismove(index, index - 3) : null;
                break;
            case 7:
                this.data.list[index - 1].name == '0' ? this.ismove(index, index - 1) : null;
                this.data.list[index - 3].name == '0' ? this.ismove(index, index - 3) : null;
                this.data.list[index + 1].name == '0' ? this.ismove(index, index + 1) : null;
                break;
            case 8:
                this.data.list[index - 1].name == '0' ? this.ismove(index, index - 1) : null;
                this.data.list[index - 3].name == '0' ? this.ismove(index, index - 3) : null;
                break;
        }
    },
    ismove: function (index, toindex) {
        var arr = this.data.list;
        var term = arr[index];
        arr[index] = arr[toindex];
        arr[toindex] = term;
        this.setData({
            list: arr,
        })
        if (this.data.list[8].name == '0') {
            this.isWin();
        }
    },
    isWin: function () {
        var arr = this.data.list;
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i].name != i + 1) {
                break;
            }
            if (i == 7) {
                console.log("win!win!win!");
            }
        }
    },
    getUserInfo: function (e) {
    }
})
