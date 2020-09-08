import currentOrder from "../components/current-order.js";
import payedOrder from "../components/payed-order.js";
import guaOrder from "../components/gua-order.js";
import cancelOrder from "../components/cancel-order.js";

import mainMenu from "../components/main-menu.js";
import commonFood from "../components/common-food.js";

new Vue({
    el:"#app",
    data:{
        orderName:"current-order",

        productName:"common-food",

        orderList:[]
    },

    methods:{
        orderTabClick(name){
            this.orderName = name;
        },

        foodTabClick(name){
            this.productName = name;
        },

        add(index){
            this.orderList[index].count++;
        },

        minus(index){
            if(this.orderList[index].count==1){
                this.orderList.splice(index, 1);
            }else{
                this.orderList[index].count--;
            }
        },

        deleteItem(index){
            this.orderList.splice(index, 1);
        },

        addFood(item){
            let index = -1;
            for(let i=0; i<this.orderList.length; i++){
                if(this.orderList[i].name == item.name){
                    index = i;
                }
            }

            if(index<0){
                this.orderList.push({
                    name:item.name,
                    price:item.price,
                    count:1
                });
            }else{
                this.orderList[index].count++;
            }
        }
    },

    components:{
        "current-order":currentOrder,
        "payed-order":payedOrder,
        "gua-order":guaOrder,
        "cancel-order":cancelOrder,

        "common-food":commonFood,
        "main-menu":mainMenu
    }
});