<template>
  <header class="header">
    <h1>编辑代办事项</h1>
    <input
      class="new-todo"
      placeholder="输入您的代办事项 ?"
      :value="name"
      @input="handleChange"
      @keyup="handleSubmit"
    />
  </header>
</template>
<script>
import { mapActions } from 'vuex';

const ENTER_KEY = 'Enter';

export default {
  data: () => ({
    name: ''
  }),
  methods: {
    handleChange(event) {
      this.name = event.target.value;
    },
    handleSubmit(event) {
      if (event.key !== ENTER_KEY) {
        return;
      }

      this.onCreate(this.name);
      this.name = '';
    },
    ...mapActions(['onCreate'])
  }
};
</script>
