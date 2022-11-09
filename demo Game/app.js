new Vue({
    el:'#game',
    data:{
        jaimi:100,
        ended:false,
    },
    methods:{
        punchBox:function(){
            console.log("punch");
            this.display -= 10;
            if(this.display <= 0){
                this.ended = true;
            } 
        },
        restart:function(){
            console.log("restart");
            this.display=100;
            this.ended = 0;
        }
    }
});