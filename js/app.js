const { createApp } = Vue;
// const axios = require('axios');

createApp({
  data() {
    return {
      mails: [],
      api: 'https://flynn.boolean.careers/exercises/api/random/mail',
      message: 'vue-email-list',
      mail: '',
    };
  },
  methods: {
    createArray() {
      for (let i = 0; i < 10; i++) {
        axios.get(this.api).then((res) => {
          this.mails.push(res.data.response);
        });
      }
    },
  },
  created() {
    this.createArray();
    console.log(this.mails);
  },
}).mount('#app');
