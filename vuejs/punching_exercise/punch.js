new Vue({
    el:'#punching_app',
    data:{
        a:100,
        ended:false
    },
    methods:{
        punch:function(){
            this.a -= 10;
            if(this.a <= 0){
                this.ended = true;
            } 
        },
        restart:function(){
            this.a=100;
            this.ended = 0;
        }
    }
});