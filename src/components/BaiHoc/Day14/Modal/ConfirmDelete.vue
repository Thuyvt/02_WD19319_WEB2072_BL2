<script setup>
  import {ref} from "vue";
  import instanceAxios from "@/ultis/configAxios";

  // sử dụng defineProps để khai báo props nhận giá trị cho cha truyền vào
  const props = defineProps({
    isShowModal: Boolean,
    handleCloseModal: Function,
    bookSelected: Object
  });
  // định nghĩa emit trong sẽ sủ dung
  const emit = defineEmits(['abc']);
  // Hàm xóa object
  const onClickDelete = async() => {
    const response = await instanceAxios.delete(`/books/${props.bookSelected.id}`)
    if (response) {
      // thông báo xóa thành công
      // phát sự kiện emit từ com con ra com cha
      emit('handleCloseModal');
      emit('getNewList');
    }
  }
</script>
<template>
  <div class="modal" style="display:block" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Xác nhận xóa</h5>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="onClickDelete">Đồng ý</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="handleCloseModal">
            Hủy bỏ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
