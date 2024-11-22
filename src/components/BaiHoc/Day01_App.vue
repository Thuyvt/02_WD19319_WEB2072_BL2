<!-- import thư viện, khai báo biến, hàm -->
<script setup>
  // Khai báo biến dạng chuỗi
  const studentName = 'Vũ Thị Thúy';
  const studentCode = 'PH12345';
  // Khai báo biến dạng số
  const studentAge = 19;
  // Khai báo biến dạng boolean
  const isActive = true;
</script>

<!-- Code html -->
<template>
  <!-- Khai báo id đã được dùng trong main.js -->
  <div id="app">
    <div>
      <h3> Thông tin:</h3>
      <ul>
        <li>Họ và tên: {{ studentName }}</li>
        <li>Mã sinh viên: {{ studentCode }}</li>
        <li>Tuổi: {{ studentAge }}</li>
        <li>Trạng thái: {{ isActive ? 'Đang học' : 'Đã nghỉ'}} </li>
      </ul>
    </div>
  </div>
</template>
