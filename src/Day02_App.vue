<!--C1: OPTION API -->
<!-- <script>
  export default {
	// khai báo biến
    data() {
        return {
            count: 0
        }
    },
    // khai báo hàm
	  methods: {
		    increament() {
            this.count++;
        }
    }
  }
</script> -->
<!-- C2: COMPOSITION API -->
<script setup>
    import { ref, reactive} from "vue";
    // 1. Dùng ref với kiểu dữ liệu nguyên thủy
    const count = ref(0);
    const studentName = ref('Vũ Thị Thúy');
    const studentAge = 18;
    const status = ref(true);

    // 2. Dùng reactive với dữ liệu dạng đối tượng
    const studentInfor = reactive({
        name: 'Nguyễn Văn Lương',
        age: 18,
        status: false
    });

    // Có 2 cú pháp viết hàm
    const increament = () => {
        count.value++;
    }

    function increamentCount() {
        count.value++;
    }

</script>
<template>
    <!-- OPTION API -->
    <!-- Count: {{ count }}
    <button @click="increament">Tăng số lượng</button> -->
    <!-- COMPOSITION API -->
    Count: {{ count }}
    <button @click="increament" class="btn btn-primary">Tăng số lượng 1</button>
    Count: {{ count }}
    <button @click="increamentCount" class="btn btn-warning"> Tăng số lượng 2</button>
    <h3>Thông tin sinh viên 1</h3>
    <ul class="list-group">
        <!-- Hiển thị chuỗi -->
        <li class="list-group-item">Tên sinh viên: {{ studentName }}</li>
        <!-- Hiển thị số -->
        <li class="list-group-item">Tuổi: {{ studentAge }}</li>
        <li class="list-group-item">Trạng thái: {{ status ? 'Đang học' : 'Đã nghỉ'}}</li>
    </ul>
    <h3>Thông tin sinh viên 2</h3>
    <ul class="list-group">
        <!-- Hiển thị chuỗi -->
        <li class="list-group-item">Tên sinh viên: {{ studentInfor.name }}</li>
        <!-- Hiển thị số -->
        <li class="list-group-item">Tuổi: {{ studentInfor.age }}</li>
        <li class="list-group-item">Trạng thái: {{ studentInfor.status ? 'Đang học' : 'Đã nghỉ'}}</li>
    </ul>

</template>
