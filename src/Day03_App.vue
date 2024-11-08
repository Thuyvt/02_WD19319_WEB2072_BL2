<script setup>
    import { ref, reactive } from "vue";
    // DATA BINDING
    // 1. Gắn kết nội suy - Interpolation binding
    const product = reactive({
        id: "SP01",
        name: "Vòi hoa sen",
        price: 10000,
        category: "Nhà tắc"
    });

    // 2. Gắn kết thuộc tính - Property binding
    const cauNoiYeuThich = "Muốn ngồi vị trí không ai ngồi được phải chịu được cảm giác không ai chịu được";
    const logoUrl = "/img/logo1.png"; // đường dẫn trực tiếp tới thư mục public

    // 3. Event binding
    const onClickDangKy = () => {
        alert("Đăng ký thành công");
    }

    function onBlurInput() {
        alert("Gọi hàm onblur thành công");
    }

    // 4. 2way data binding
    const hoVaTen = ref("Vũ Thị Thúy");

    // Mảng đối tượng
    const categoryInfo = reactive({
        id: "CT01",
        name: "Iphone",
        amount: 100,
        listPros: [
            { id: "SP01", name: "Iphone 14 plus", price: 10000,  status: true },
            { id: "SP02", name: "Iphone 14 pro", price: 23000,  status: false },
            { id: "SP03", name: "Iphone 15 plus", price: 40000,  status: true }
        ]
    });
</script>

<template>
    <div class="container">
        <!-- 1. Interpolation view -->
        <div class="mb-3">
            <h3>Thông tin sản phẩm</h3>
            <ul class="list-group">
                <li class="list-group-item">
                    ID sản phẩm: {{ product.id }}
                </li>
                <li class="list-group-item">
                    Tên sản phẩm: {{ product.name }}
                </li>
                <li class="list-group-item">
                    Giá sản phẩm: {{ product.price }}
                </li>
                <li class="list-group-item">
                    Danh mục sản phẩm: {{ product.category }}
                </li>
            </ul>
        </div>
        <!-- 2. Property binding view
            C1: Sử dụng v-bind:[attribue]="tên_biến"
        -->
        <hr>
        <div class="mb-3">
            <h6>Property value</h6>
            <input type="text" class="form-control" v-bind:value="cauNoiYeuThich">
            <h6>Property src</h6>
            <img :src="logoUrl" alt="" style="height: 100px;">
        </div>
        <hr>
        <!-- 3. Event Binding  -->
        <div class="mb-3">
            <h3>Event binding</h3>
            <h6>Bắt sự kiện click</h6>
            <button class="btn btn-primary" @click="onClickDangKy()"> Đăng ký </button>
            <h6>Bắt sự kiện blur</h6>
            <input type="text" class="form-control" @blur="onBlurInput()">
        </div>
        <!-- 4. 2way data binding:
         dùng để đồng bộ dữ liệu từ code js và html sử dụng v-model -->
        <hr>
        <div class="mb-3">
            <input type="text" class="form-control" v-model="hoVaTen">
            <p> Xin chào {{ hoVaTen }}</p>
        </div>

        <!-- Interpolation mảng -->
         <hr>
         <div class="mb-3">
            <h3>Thông tin danh mục sản phẩm</h3>
            <p>Id danh mục: {{ categoryInfo.id }}</p>
            <p>Tên danh mục: {{ categoryInfo.name }}</p>
            <p>Số lượng sản phẩm trong danh mục: {{ categoryInfo.amount }}</p>
            <p>Danh sách sản phẩm</p>
            <ul>
                <li v-for="pro in categoryInfo.listPros" :key="pro.id">
                    {{ pro.id }} - {{ pro.name }} - {{ pro.price }}
                    - {{ pro.status ? 'Còn hàng' : 'Hết hàng' }}
                </li>
            </ul>

         </div>
    </div>
</template>
