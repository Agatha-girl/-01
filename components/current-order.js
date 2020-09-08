const currentOrder = {
    props:["list"],
   
    methods:{
        add(index){
            this.$emit("add", index);
        },

        minus(index){
            this.$emit("minus", index);
        },

        deleteItem(index){
            this.$emit("delete-item", index);
        }
    },

    template:`
    <div>
        <div class="order-item-wrap">
            <div class="oder-item">商品名称</div>
            <div class="oder-item">数量</div>
            <div class="oder-item">价格</div>
            <div class="oder-item">操作</div>
        </div>
        <div class="order-item-wrap" v-for="(item,index) in list">
            <div class="oder-item">{{item.name}}</div>
            <div class="oder-item">{{item.count}}</div>
            <div class="oder-item">{{item.price}}元</div>
            <div class="oder-item">
                <span @click="add(index)">+</span>
                <span @click="minus(index)">-</span>
                <span @click="deleteItem(index)">删除</span>
            </div>
        </div>
    </div>
    `
};


export default currentOrder;