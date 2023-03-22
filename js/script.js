const { createApp } = Vue

  createApp({
    data() {
      return {
        email: [],
        
      }
    },
    mounted() {
        this.createEmailList();
    },
    methods: {
        createEmailList() {
            for (let index = 0; index < 10; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail?&items=10').then((res) => {
                    this.email[index]= res.data.response;
                });
                
            }

        }
    }, 
  }).mount('#app')