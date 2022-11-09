var a=new Vue({
    el:'#first_instance',
    data:{
        one:'hello...',
        one_text:'welcome'
    },
    methods:{

    }
});
var b=new Vue({
    el:'#second_instance',
    data:{
        two:'world',
        two_text:'welcome'
    },
    methods:{
        change_value:function(){
           a.one='hiiii';
        }

    },
});

// b.two='hello'   bydefult change value of b