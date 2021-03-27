$(document).ready(function () {


    const App = Vue.createApp({

        created() {

            function products() {
                var ss;
                $.ajax({
                    url: "/data.json", //json檔案位置
                    type: "GET", //請求方式為get
                    dataType: "json", //返回資料格式為json
                    async: false,
                    success: function (data) { //請求成功完成後要執行的方法 
                        ss = data
                    }
                })
                return ss;
            }

            function products_item() {
                var ss;
                $.ajax({
                    url: "/products.json", //json檔案位置
                    type: "GET", //請求方式為get
                    dataType: "json", //返回資料格式為json
                    async: false,
                    success: function (data) { //請求成功完成後要執行的方法 
                        ss = data
                    }
                })
                return ss;
            }

            this.products = products()
            this.products_item = products_item()
            console.log(this.products_item);

        },

        methods: {
            productFi(fit) {
                console.log(fit);
                this.fit = fit;
                this.isshow = true;
                this.msgsnow = false;
            },

            productmsg(hit){
                this.hit = this.products[hit].msg
                this.isshow = false;
                this.msgsnow = true;
            }
        },

        computed: {

            productFit() {
                return this.products.filter(item => {
                    console.log(item);
                    return item.id.match(this.fit);
                })
            }

        },

        data() {
            return {
                fit: '',
                hit: '',
                products: [],
                products_item: [],
                isshow: false,
                msgsnow: true,
            }
        },


    });


    App.mount('#app');

})