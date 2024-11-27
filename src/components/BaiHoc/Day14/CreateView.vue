<script setup>
import { ref } from "vue";
import instanceAxios from "@/ultis/configAxios";

const book = ref({
        id: "",
        name: "",
        author: "",
        price: 0,
        quantity: 0
    });
// Hàm validate
const checkValidate = () => {
  if (
    !book.value.name ||
    !book.value.author ||
    !book.value.price ||
    !book.value.quantity
  ) {
    return false;
  }
  return true;
};

// Hàm tạo mới
const onClickCreate = async () => {
  // check validate
  if (!checkValidate()) {
    alert("Thông tin không hợp lệ");
    return;
  }
  // if (books.value.length > 0) {
  //     book.value.id = books.value.length + 1 + ""
  // } else {
  //     book.value.id = "1";
  // }

  // call api
  const response = await instanceAxios.post("books", book.value);
  if (response) {
    alert("Tạo mới thành công");
  }
};
</script>
<template>
  <h3>Tạo mới</h3>
  <form>
    <div class="mt-3">
      <span class="form-label">ID:</span>
      <input class="form-control" type="text" v-model.trim="book.id">
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
    </div>
  </form>
</template>
