new Vue({
    el:'#first',
    data:{
        name:'name is:-'
    },
    methods:{
        refchange:function(){
           console.log(this.$refs.input.value); 
          this.name=this.$refs.input.value;
           console.log(this.$refs.test.innerText)
        }
    }

});