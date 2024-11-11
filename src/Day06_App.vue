<script setup>
	import Header_Admin from "./components/admin/Header_Admin.vue";
	import Footer_Admin from "./components/admin/Footer_Admin.vue";

	import Create_Product from "./components/admin/product/add_product.vue";
</script>

<template>
    <!-- Header -->
    <Header_Admin></Header_Admin>
    <!-- Main -->
    <main class="d-flex">
        <!-- Menu -->
        <div class="col-3">

        </div>
        <!-- Nội dung chính -->
        <div class="col-9">
            <Create_Product></Create_Product>
        </div>
    </main>
	<footer>
		<Footer_Admin></Footer_Admin>
	</footer>
</template>
