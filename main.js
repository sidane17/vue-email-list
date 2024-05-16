const {createApp}= Vue;

createApp({
    data(){
        return{
            adress:'https:flynn.boolean.careers/exercises/api/random/mail',
            email:[],
            num:0
        }
    },
    methods:{
        getEmail(){
            for(let i=0;i<this.num;i++){
                axios.get(this.adress).then((result)=>{
                    let risposta=result.data;
                    console.log(risposta)
                    this.email.push(risposta.response)
                // console.log("montata")
                // window.vue=this;
                // this.getEmail();
                })
            }
        }
    },
    
}).mount('#app')