<template>
  <div class="main-content font-sans flex flex-col items-center bg-[#e9d5ff] p-6 w-full h-screen">
    
    <div class="flex flex-col items-center">
      <img src="../assets/oyind.jpeg" alt="Oyin" class="w-40 h-40 rounded-full" />
      <h1 class="text-4xl font-bold m-2">Oyin A.</h1>
      <p class="text-xl font-bold">Frontend Developer</p> 
    </div>

    <div class="text-center">
      <h3 class="mt-10 text-2xl italic">Hey! It's so nice to see you here!</h3>
      <p class="m-6 text-2xl font-bold leading-loose">
        This is an Application that shows you the list of<br />
        all my Github Repositories, including some details about them.
      </p>
    </div>

    <div class="m-4">
      <button type="button">
        <router-link to="/repositories" class="border-2 border-[#4c1d95] px-4 py-2 hover:bg-[#4c1d95] hover:text-white text-xl font-bold rounded-full"
          >Click here to view my repos</router-link
        >
      </button>
    </div>
  </div>
  <footer class="bg-[#4c1d95] text-white py-4">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2023 OyinA. All rights reserved.</p>
      </div>
    </footer>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
