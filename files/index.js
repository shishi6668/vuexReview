import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    }
});

new Vue({
    el:'#app',
    data(){
        return {
            localCount:3
        }
    },
    store,
    //原始方法
    // computed:{
    //     count(){
    //         return this.$store.state.count;
    //     }
    // }

    //mapState法一
    // computed:mapState({
    //     count:state=>state.count,
    //     countAlias:'count',
    //     countPlusLocalCount(state){
    //         return state.count + this.localCount;
    //     }
    // })

    //mapState法二，传入字符串
    computed:mapState(['count'])
})