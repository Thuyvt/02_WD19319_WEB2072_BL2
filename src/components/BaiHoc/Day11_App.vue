<script setup>
    import { ref , onMounted } from "vue";
    // Khai báo kết nối
    import instanceAxios from '@/ultis/configAxios';

    // Khai báo danh sách books
    const books = ref();
    const book = ref({
        id: "",
        name: "",
        author: "",
        price: 0,
        quantity: 0
    });

    // Lấy danh sách books
    const getListBooks = async() => {
        const response = await instanceAxios.get('books');
        if (response && response.data) {
            books.value = response.data;
        }
        console.log(books.value);
    }

    // Xóa sách
    const onClickDeleteBook = async(bookId) => {
        // confirm trước khi xóa
        const response = await instanceAxios.delete(`books/${bookId}`);
        // C1: call api lấy ds
        // getListBooks();
        // C2: dùng filter xử lý js
        books.value = books.value.filter((item) => item.id != bookId);
    }

    // Hàm validate
    const checkValidate = () => {
        if (!book.value.name || !book.value.author || !book.value.price || !book.value.quantity) {
            return false;
        }
        return true;
    }

    // Hàm tạo mới
    const onClickCreate =  async() => {
        // check validate
        if (!checkValidate()) {
            alert("Thông tin không hợp lệ");
            return;
        }
        if (books.value.length > 0) {
            book.value.id = books.value.length + 1 + ""
        } else {
            book.value.id = "1";
        }

        // call api
        const response = await instanceAxios.post('books', book.value);
        if (response) {
          alert("Tạo mới thành công");
          getListBooks();
        }
    }

    // Hàm xem chi tiết
    const onClickViewDetail = async(id) => {
        // call aip lấy thông tin chi tiết
        const response = await instanceAxios.get(`books/${id}`)
        if (response) {
          book.value = response.data;
        }
    }

    // Hàm cập nhật
    const onClickUpdate = async(id) => {
      // call api
      const response = await instanceAxios.put(`books/${id}`, book.value)
      if (response) {
        console.log(response);
        alert("Cập nhật thành công");
        // load lại dữ liệu mới
        getListBooks();
      }
    }
    // Gọi hàm lấy danh sách
    onMounted(() => {
        // Lấy danh sách sau khi load template lên Dom
        getListBooks();
    })
</script>

<template>
  <div>
    <h2>Danh sách sách</h2>
    <table class="table table-tripped">
        <thead>
            <tr>
                <th>Id</th>
                <th>Tên</th>
                <th>Tác giả</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th> Hành động</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="book in books" :key="book.id">
                <td>{{ book.id }}</td>
                <td>{{ book.name }}</td>
                <td>{{ book.author }}</td>
                <td>{{ book.price }}</td>
                <td>{{ book.quantity }}</td>
                <td>
                    <button class="btn btn-info me-3" @click="onClickViewDetail(book.id)">Xem</button>
                    <button class="btn btn-danger" @click="onClickDeleteBook(book.id)">Xóa</button>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
  <hr>
  <div>
    <h2>Tạo mới sách</h2>
    <form>
        <div class="mt-3">
            <span class="form-label">ID:</span>
            <input class="form-control" type="text" v-model.trim="book.id" disabled>
        </div>

        <div class="mt-3">
            <span class="form-label">Tên:</span>
            <input class="form-control" type="text" v-model.trim="book.name">
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
            <input class="form-control" type="text" v-model.number="book.price">

        </div>
        <div class="mt-3">
            <span class="form-label">Số lượng:</span>
            <input class="form-control" type="text" v-model.number="book.quantity">
        </div>

        <div class="mt-3 text-center">
            <a class="btn btn-success me-3" @click="onClickCreate">Tạo Mới</a>
            <a class="btn btn-info" @click="onClickUpdate(book.id)">Cập nhật</a>
        </div>
    </form>
  </div>
</template>
