<script setup>
	  import { ref, reactive} from 'vue';

	const age = ref(15);
    const score = ref(8);

    // Khai báo biến để theo dõi trạng thái điểm danh
    const isAbsent = ref(true);
    function toggleAbsent() {
        isAbsent.value = !isAbsent.value;
    }

    const arr_foods = reactive(['Pizza', 'Burger', 'Shushi', 'Pasta']);
    const des_arr = reactive({pizza: 200000, burger: 80000, shushi:300000, pasta: 15000});
    const list_foods = reactive([
        {id: "F01", name: "Pizza", quantity: 10, price:20000},
        {id: "F02", name: "Burger", quantity: 2, price:2440000},
        {id: "F03", name: "Shushi", quantity: 5, price:150000},
        {id: "F04", name: "Paster", quantity: 12, price:150000},
    ])

    // Tăng giảm số lượng sản phẩm trong giỏ hàng
    function increaseQuantity(index) {
        list_foods[index].quantity++;
    }

    // Tính tổng tiền trong giỏ hàng
    function totalCart() {
        // const total = 0;
        // for (const item of list_foods) {

        // }
        return list_foods.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0).toFixed(2);
    }

    // Xóa sản phẩm ra khỏi giỏ hàng
    const deleteItem = (id) => {
        console.log(id);
        // tìm index của đối tượng bầng index
        const index = list_foods.findIndex(item => item.id == id);
        // xóa đối tượng khỏi danh sách bằng index
        list_foods.splice(index, 1);
    }

</script>
<template>
	<div class="container">
		<h3>V-IF/ V-ElSE</h3>
		<div v-if="age >= 18" class="text-success">
			  Bạn đã đủ 18 tuổi
		</div>
    <div v-else class="text-danger">
        Bạn chưa đủ tuổi
    </div>
    <div>
        <p>Thông báo điểm số : {{ score }} -
            <span v-if="score>=9">Xuất sắc</span>
            <span v-else-if="score>=8">Giỏi</span>
            <span v-else-if="score>=7">Khá</span>
            <span v-else-if="score>=6">Trung Bình</span>
            <span v-else>Yếu</span>
        </p>
    </div>

    <hr>
    <h3>V-SHOW</h3>
    <div v-show="age >= 18" class="text-success">
			  Bạn đã đủ 18 tuổi
		</div>
    <div v-show="age < 18" class="text-danger">
        Bạn chưa đủ tuổi
    </div>
    <!--Kiểm tra điểm danh -->
    <button :class="isAbsent ? 'btn btn-danger' : 'btn btn-primary'" @click="toggleAbsent">
        {{ isAbsent ? "Vắng mặt" : "Có mặt"}}
    </button>
    <hr>
    <div>
        <h3>LIST RENDERING</h3>
        <p>Danh sách món ăn</p>
        <ul v-for="item in arr_foods" :key="item">
            <li>{{ item }}</li>
        </ul>
        <p>Danh sách món ăn kèm theo index</p>
        <ul v-for="(food, index) in arr_foods" :key="food" >
            <li>{{ index }} - {{ food }}</li>
        </ul>
        <p>Danh sách món ăn destructuring</p>
        <!-- Value: trước, key: sau -->
        <ul>
            <li v-for="(price, food, index) in des_arr" :key="index">
                {{ index }}. {{ food }} : {{ price }} VND
            </li>
        </ul>

        <hr>
        <div>
            <h3>Áp dụng giỏ hàng</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(food, index) in list_foods" :key="food.id">
                        <td>{{ food.id }}</td>
                        <td>{{ food.name }}</td>
                        <td>{{ food.price }}</td>
                        <td>
                            <button class="btn" :disabled="food.quantity < 1" @click="food.quantity--"> - </button>
                            <input type="text" class="form-controll" v-model="food.quantity">
                            <button class="btn" @click="increaseQuantity(index)"> + </button>
                        </td>
                        <td>{{ (food.price * food.quantity).toFixed(2) }}</td>
                        <td>
                            <button class="btn btn-danger" @click="deleteItem(food.id)">Xóa</button>
                        </td>
                    </tr>
                    <tr>
                        Tổng tiền : {{ totalCart() }} VND
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

	</div>
</template>
