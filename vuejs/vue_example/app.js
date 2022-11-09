new Vue({                       //first creat vue instance 
    el:'#vue_ex',                        // el property connect with div using id control div 
    data:{ 
        name:'nidhi',
        l_name:'bavadiya',
        website:'https://www.w3school.com' ,              // data binding v-bind  data of different attribute
        age:25,
        link:'<a href="https://www.w3school.com"> w3school website</a>',
       
    },                              // data property store data of instance 
    methods:{                               //create method 
        demo:function(time){                    //create function in method return function value 
            return 'good' +' '+ time +' '+ this.name;                 // it concat with function perameter / ' ' define space / this keyword define the instance
        },
        add:function(inc){
            this.age+=inc;
        },
        sub:function(){
            this.age--;
        },
     
    },
});

new Vue({  
    el:'#display',
    data:{
        x:0,
        y:0
    },
    methods:{
        mouse_function:function(event){
            this.x=event.offsetX;
            this.y=event.offsetY;
           
        }
    }
});
