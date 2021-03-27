$(document).ready(function () {
    const App = {

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

        mounted() {
            this.initMap();
        },

        methods: {
            initMap() {
                this.map = new google.maps.Map(document.getElementById('map'), {
                    //地圖中心位置
                    center: {
                        //緯度
                        lat: 3.234285788836388,
                        //經度
                        lng: 101.6435297891297
                    },
                    //縮放比
                    zoom: 16,
                });
            },
        },

        data() {
            return {
                map: null,
                products: [],
                products_item: [],
            }
        },

    };
    Vue.createApp(App).mount('#app');

})