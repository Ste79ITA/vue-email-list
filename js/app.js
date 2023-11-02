const { createApp } = Vue;

createApp({
  data() {
    return {
      mails: [],
      api: 'https://flynn.boolean.careers/exercises/api/random/mail',
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
  },
}).mount('#app');
