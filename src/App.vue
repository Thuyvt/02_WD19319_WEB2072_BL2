<script setup>
	import Header from "./components/Lab3_4/Header.vue";
	import Footer from "./components/Lab3_4/Footer.vue";
	// import Main from "./components/Lab3_4/Main.vue";
  // import Main from "./components/BaiHoc/Day11_App.vue";
</script>
<template>
	<Header></Header>
    <div class="container mt-4 mb-4">
	    <!-- <Main></Main> -->
       <!-- Hiển thị nội dung main dựa vào router -->
        <router-view></router-view>
    </div>
	<Footer></Footer>
</template>
