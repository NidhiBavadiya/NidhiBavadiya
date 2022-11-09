
Vue.component('greeting',{
    template:'<p>hello name is:-{{name}} <button v-on:click="changename=changename"> change name</button></p>',
    data:function(){
        return{
        name:'riya'
    }
    },
    methods:{
       changename:function(){
        this.name='jiya';
       }  
    }
});

new Vue({
    el:'#first'

});
new Vue({
    el:'#second'

});
