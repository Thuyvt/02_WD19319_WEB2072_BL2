<script setup>
    import ConfirmDelete from "./Modal/ConfirmDelete.vue";
    import { ref , onMounted } from "vue";
    // Khai báo kết nối
    import instanceAxios from '@/ultis/configAxios';
    // Khai báo danh sách books
    const books = ref();
    // Tạo biến ẩn hiện modal
    const isShowModal = ref(false);
    // Biến lấy giá trị đối tượng được chọn
    const bookSelected = ref();
    // Lấy danh sách books
    const getListBooks = async() => {
        const response = await instanceAxios.get('books');
        if (response && response.data) {
            books.value = response.data;
        }
        console.log(books.value);
    }

    // hàm bật hiện modal
    const handleToggleModal = async(book) => {
      isShowModal.value = true;
      bookSelected.value = book;
    }
    // hàm đóng modal
    const handleCloseModel = () => {
      isShowModal.value = false;
    }
    // Gọi hàm lấy danh sách
    onMounted(() => {
        // Lấy danh sách sau khi load template lên Dom
        getListBooks();
    })
</script>

<template>
  <h3>Danh sách</h3>
  <RouterLink to="/create" class="btn btn-success">Tạo mới</RouterLink>
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
                      <!-- <RouterLink to="/detail/{{ book.id }}"> Xem </RouterLink> -->
                    <RouterLink class="btn btn-info me-3" :to="{name: 'detail', params: {id: book.id}}">Xem</RouterLink>
                          <!-- <a class="btn btn-info">Cập nhật</a> -->
                    <RouterLink
                      :to="{ name: 'update', params: { id: book.id } }"
                      class="btn btn-success me-3"> Cập nhật
                    </RouterLink>
                    <button class="btn btn-danger" @click="handleToggleModal(book)">Xóa</button>
                  </td>
            </tr>
        </tbody>
    </table>
    <!-- Dùng props lấy giá trị từ cha vào con,
     : truyền giá trị từ cha vào con -->
    <ConfirmDelete v-if="isShowModal"
    :isShowModal="isShowModal"
    :handleCloseModel="handleCloseModel"
    :bookSelected="bookSelected">
    </ConfirmDelete>
</template>
