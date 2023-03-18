<template>
  <div class="flex justify-center items-center">
    <img src="@/assets/error.jpg" class="w-100 h-64 m-4" />
  </div>

  <div class="font-bold text-2xl justify-center items-center text-center">
    <h1 class="m-4 text-5xl">Oops!</h1>
    <h3 class="m-4">404-PAGE NOT FOUND</h3>
    <p class="m-4 italic">
      The page you are looking for might have been removed,<br />
      had its name changed or it never existed.
    </p>
    <button type="button">
      <router-link
        to="/"
        class="border-2 border-[#4c1d95] m-4 px-4 py-2 hover:bg-[#4c1d95] hover:text-white text-xl font-bold"
        >GO HOME</router-link
      >
    </button>
  </div>
</template>
