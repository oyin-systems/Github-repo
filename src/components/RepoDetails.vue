<template>
  <div class="font-sans flex flex-col items-center bg-[#e9d5ff] w-full h-screen">
    <!-- <span v-if="loading">Loading...</span> -->
    <div class="h-4/5 mt-2 w-6/12 bg-[#e9d5ff] flex flex-col content-center justify-center items-center shadow-grey-200 shadow-2xl">
      <h2 class="uppercase text-center text-3xl font-bold">{{ repository.name }}</h2>
      
      <div class="mx-6">
      <div class="border-b border-l border-[#4c1d95] rounded-bl-bg pl-2 pb-2 flex items-center my-1">
        <label class="border border-[#4c1d95] text-sm p-1 rounded">ID</label>
        <p class="text-sm tracking-widest ml-2"><strong>{{ repository.id }}</strong></p>
      </div>

      <div class="border-b border-l border-[#4c1d95] rounded-bl-bg pl-2 pb-2 flex items-center my-4">
        <label class="border border-[#4c1d95] text-sm p-1 rounded">Owner</label>
        <p class="text-sm tracking-widest ml-2"><strong>{{ repository.owner.login }}</strong></p>
      </div>

      <div class="border-b border-l border-[#4c1d95] rounded-bl-bg pl-2 pb-2 flex items-center my-1">
        <label class="border border-[#4c1d95] text-sm p-1 rounded">Branch</label>
        <p class="text-sm tracking-widest ml-2"><strong>{{ repository.default_branch }}</strong></p>
      </div>

      <div class="border-b border-l border-[#4c1d95] rounded-bl-bg pl-2 pb-2 flex items-center my-1">
        <label class="border border-[#4c1d95] text-sm p-1 rounded">Visibility</label>
        <p class="text-sm tracking-widest ml-2"><strong>{{ repository.visibility }}</strong></p>
      </div>

      <div class="border-b border-l border-[#4c1d95] rounded-bl-bg pl-2 pb-2 flex items-center my-1">
        <label class="border border-[#4c1d95] text-sm p-1 rounded">Language</label>
        <p class="text-sm tracking-widest ml-2"><strong>{{ repository.language }}</strong></p>
      </div>

      <div class="border-b border-l border-[#4c1d95] rounded-bl-bg pl-2 pb-2 flex items-center my-1">
        <label class="border border-[#4c1d95] text-sm p-1 rounded">URL</label>
        <p class="text-sm tracking-widest ml-2"><strong><a :href="repository.html_url"> {{ repository.html_url }}</a></strong></p>
      </div>

      <div class="border-b border-l border-[#4c1d95] rounded-bl-bg pl-2 pb-2 flex items-center my-1">
        <label class="border border-[#4c1d95] text-sm p-1 rounded">Description</label>
        <p class="text-sm tracking-widest ml-2"><strong>{{ repository.description }}</strong></p>
      </div>
    </div>

      <div class="flex items-center justify-between flex-wrap my-3">
        <div class="mx-2 text-center"><strong>Created at:</strong><br/> {{ repository.created_at }}</div>
        <div class="mx-2 text-center"><strong>Updated at:</strong><br/> {{ repository.updated_at }}</div>
        <div class="mx-2 text-center"><strong>Pushed at:</strong><br/> {{ repository.pushed_at }}</div>
      </div>
      <button @click="redirectToHome" class="p-1 font-bold text-black outline-[#4c1d95] outline outline-2 rounded outline-offset-2 ...">Back</button></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      repository: {},
      loading: true,
    };
  },
  created() {
    axios.get(`https://api.github.com/repos/oyin-systems/${this.$route.params.repoName}`)
      .then(response => {
        this.repository = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },

  methods: {
    redirectToHome() {
      this.$router.push("/repositories");
    },
  },
  mounted() {},
};
</script>
