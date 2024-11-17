<script setup>
    import {reactive} from "vue";

    const product = reactive({
        name: "",
        category_id: "",
        description: "",
        price: 0,
        status: ""
    })
    // Biến chứa thông báo lỗi
    const errors= reactive({});
    // Biến danh sách sản phẩm
    const list_products = reactive([]);
    // Biến trạng thái click nút tạo mới
    let isClickCreateBtn = false;
    function validateForm() {
        // Đánh dấu trạng thái form
        let result = true;
        // check ô nhập tên
        if (!product.name || product.name.trim == "") {
            errors.name = "Tên bắt buộc nhập"
            return false;
        } else {
            result = true;
            errors.name = "";
        }
        // check ô nhập giá
        if (!product.price || product.price < 0) {
            errors.price = "Giá là bắt buộc và phải lớn hơn 0";
            return false;
        } else {
            errors.price = "";
            result = true;
        }
        return result;
    }

    function submitForm() {
        console.log('Gọi hàm submit');
        // gọi hàm validate kiểm tra dữ liệu form
        console.log(validateForm());
        if (validateForm()) {
            // tạo 1 danh sách đối tượng sản phẩm
            // nhấn tạo mới thông tin đối tượng được thêm vào danh sách sản phẩm
            list_products.push({
                
            });
            // console.log(list_products);
        }
    }

    function onClickCreate() {
        isClickCreateBtn = !isClickCreateBtn;
        console.log(isClickCreateBtn)
    }

</script>

<template>
    <div>
      <h2>Danh sách sản phẩm</h2>
      <button class="btn btn-success" @click="onClickCreate"> Tạo mới sản phẩm</button>
      <table class="table table-tripped">
			<thead>
				<tr>
					<th>Tên</th>
					<th>Danh mục</th>
					<th>Mô tả</th>
					<th>Giá</th>
					<th>Trạng thái</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="pro in list_products" :key="pro">
					<td>{{ pro.name }}</td>
					<td>{{ pro.category_id }}</td>
					<td>{{ pro.description }}</td>
					<td>{{ pro.price }}</td>
					<td>{{ pro.status ? "Còn hàng" : "Hết hàng"}}</td>
				</tr>
			</tbody>
      </table>
    </div>
    <hr>
    <!-- Form tạo mới -->
    <div v-show="true">
        <h2>Tạo mới sản phẩm</h2>
        <form @submit.prevent="submitForm">
            <!-- Khung nhập tên sản phẩm -->
            <div class="mb-3">
                <span class="form-label">Tên sản phẩm:</span>
                <input type="text" class="form-control" placeholder="Nhập tên" v-model.trim="product.name">
                <span v-if="errors.name" class="text-danger">{{ errors.name }}</span>
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
                <span v-if="errors.price" class="text-danger">{{ errors.price }}</span>
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
    </div>

</template>
