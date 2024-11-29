<script setup>
import { ref, onMounted } from "vue";
import instanceAxios from "@/ultis/configAxios";
// Khai báo hàm để lấy thông tin tham số trên url
import { useRoute } from "vue-router";

const book = ref({
  id: "",
  name: "",
  author: "",
  price: 0,
  quantity: 0,
});
// biến hứng giá trị tham số trên url
console.log(useRoute().params);
const bookId = useRoute().params.id;

// Hàm lấy thông tin đối tượng
const getDetail = async() => {
  // call api lấy thoogn tin chi tiết
  const response = await instanceAxios.get(`/books/${bookId}`);
  if (response) {
    book.value = response.data
  }
}

onMounted(() => {
  // Gọi hàm lấy thông tin chi tiết đối tượng
  getDetail();
})
</script>

<template>
  <h3>Cập nhật</h3>
  <form>
    <div class="mt-3">
      <span class="form-label">ID:</span>
      <input class="form-control" type="text" v-model.trim="book.id" disabled />
    </div>

    <div class="mt-3">
      <span class="form-label">Tên:</span>
      <input class="form-control" type="text" v-model.trim="book.name" />
    </div>

    <div class="mt-3">
      <span class="form-label">Tác giả:</span>
      <select class="form-control" v-model="book.author">
        <option value="">- Lựa chọn -</option>
        <option value="Nguyễn Nhật Ánh">Nguyễn Nhật Ánh</option>
        <option value="Vũ Trọng Phụng">Vũ Trọng Phụng</option>
        <option value="Nam Cao">Nam Cao</option>
      </select>
    </div>

    <div class="mt-3">
      <span class="form-label">Giá:</span>
      <input class="form-control" type="text" v-model.number="book.price" />
    </div>
    <div class="mt-3">
      <span class="form-label">Số lượng:</span>
      <input class="form-control" type="text" v-model.number="book.quantity" />
    </div>

    <div class="mt-3 text-center">
      <a class="btn btn-success me-3" @click="onClickCreate">Tạo Mới</a>
      <a class="btn btn-info" @click="onClickUpdate(book.id)">Cập nhật</a>
    </div>
  </form>
</template>
