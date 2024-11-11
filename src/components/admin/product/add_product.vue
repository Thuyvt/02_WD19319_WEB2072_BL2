<script setup>
    import {reactive} from "vue";

    const product = reactive({
        name: "",
        category_id: "",
        description: "",
        price: 0,
        status: ""
    })

    function submitForm() {
        console.log('Gọi hàm submit');
        console.log(product);
        // tạo 1 danh sách đối tượng sản phẩm
        // nhấn tạo mới thông tin đối tượng được thêm vào danh sách sản phẩm
    }
</script>

<template>
    <h2>Tạo mới sản phẩm</h2>
    <form @submit.prevent="submitForm">
        <!-- Khung nhập tên sản phẩm -->
        <div class="mb-3">
            <span class="form-label">Tên sản phẩm:</span>
            <input type="text" class="form-control" placeholder="Nhập tên" v-model.trim="product.name">
        </div>
        <!-- Khung nhập mô tả sản phẩm -->
        <div class="mb-3">
            <span class="form-label">Mô tả sản phẩm:</span>
            <textarea class="form-control" v-model.trim="product.description"></textarea>
        </div>
        <!-- Khung nhập danh mục sản phẩm -->
        <div class="mb-3">
            <span class="form-label">Danh mục sản phẩm:</span>
            <select name="" id="" v-model="product.category_id" class="form-control">
                <option value="">-- Lựa chọn --</option>
                <option value="1">Danh mục 1</option>
                <option value="2">Danh mục 2</option>
            </select>
        </div>
        <!-- Khung nhập giá sản phẩm -->
        <div class="mb-3">
            <span class="form-label">Giá sản phẩm:</span>
            <input type="number" v-model.number="product.price" class="form-control" placeholder="Nhập giá">
        </div>
        <!-- Khung nhập Trạng thái sản phẩm -->
        <div class="mb-3">
            <span class="form-label">Trạng thái:</span>
            <input type="checkbox" class="form-check-input" v-model="product.status"> Còn hàng
        </div>
        <div class="d-flex justify-content-center">
            <button class="btn btn-success">Tạo mới</button>
        </div>
    </form>
</template>
