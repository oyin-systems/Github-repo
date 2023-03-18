<template>
    <nav class="flex items-center justify-between flex-wrap bg-[#4c1d95] p-6 top-0 w-full">
      <div class="text-white text-3xl font-bold font-mono">OyinA.</div>
      <div>
        <ul>
          <li class="sm:inline-block font-extrabold"><router-link to="/" class="mr-10 p-3 text-[#c4b5fd] hover:text-white outline-white outline outline-2  outline-offset-2 ...">Home</router-link></li>
          <li class="sm:inline-block font-extrabold"><router-link to="/repositories" class="mr-10 p-3 text-[#c4b5fd] hover:text-white outline-white outline outline-2  outline-offset-2 ...">Repositories</router-link></li>
          <li class="sm:inline-block font-extrabold"><router-link to="*" class="mr-10 p-3 text-[#c4b5fd] hover:text-white outline-white outline outline-2  outline-offset-2 ...">N.F.</router-link></li>
        </ul>
    </div>
    </nav>
  </template>

  <script>
  export default {
    name: "NavBar",
  };
  </script>
  