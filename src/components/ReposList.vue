<template>
  <div
    class="font-sans flex flex-col items-center bg-[#e9d5ff] w-full h-screen"
  >
    <!-- for v-if loading -->
    <div class="flex items-center justify-center h-screen" v-if="loading">
      <div class="flex items-center justify-center space-x-2">
        <div class="w-4 h-4 bg-gray-500 rounded-full animate-pulse"></div>
        <div class="w-4 h-4 bg-gray-500 rounded-full animate-pulse"></div>
        <div class="w-4 h-4 bg-gray-500 rounded-full animate-pulse"></div>
      </div>
    </div>

    <!-- for v-else -->
    <div
      v-else
      class="h-4/5 mt-2 w-6/12 bg-[#e9d5ff] flex flex-col content-center justify-center items-center shadow-grey-200 shadow-2xl"
    >
      <h1 class="text-center text-3xl font-bold">MY REPOSITORIES</h1>
      <ul>
        <li
          v-for="repo in paginatedRepositories"
          :key="repo.id"
          class="uppercase outline outline-black rounded border-2 border-[#4c1d95] m-4 px-4 py-2 hover:bg-[#4c1d95] hover:text-white text-xl font-bold"
        >
          <router-link :to="'/repositories/' + repo.name">{{
            repo.name
          }}</router-link>
        </li>
      </ul>

      <!-- pagination buttons -->
      <div class="flex items-center justify-between flex-wrap">
        <button
          @click="currentPage--"
          :disabled="currentPage === 1"
          :class="{ disabled: currentPage === 1 }"
          class="p-1 mr-2 font-bold text-black outline-[#4c1d95] outline outline-2 rounded outline-offset-2 ..."
        >
          Previous
        </button>
        <span
          >Page <strong>{{ currentPage }}</strong> of
          <strong>{{ totalPages }}</strong></span
        >
        <button
          @click="currentPage++"
          :disabled="currentPage === totalPages"
          :class="{ disabled: currentPage === totalPages }"
          class="p-1 ml-2 font-bold text-black outline-[#4c1d95] outline outline-2 rounded outline-offset-2 ..."
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ReposList",
  data() {
    return {
      repositories: [],
      currentPage: 1,
      perPage: 5,
      totalPages: 0,
      loading: true,
    };
  },
  methods: {
    async fetchRepositories() {
      this.loading = true;
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await axios.get(
          "https://api.github.com/users/oyin-systems/repos"
        );
        this.repositories = response.data;
        this.totalPages = Math.ceil(this.repositories.length / this.perPage);
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
  computed: {
    paginatedRepositories() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.repositories.slice(startIndex, endIndex);
    },
  },
  mounted() {
    this.fetchRepositories();
  },
};
</script>
