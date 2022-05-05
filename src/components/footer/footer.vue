<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{ itemsLeft }}</strong>
      <span> {{ itemText }} 剩余</span>
    </span>
    <ul class="filters">
      <li v-for="filterTitle in filterTitles" :key="filterTitle.key">
        <a href="./#" :class="{ selected: filterTitle.key === filter }" @click="onFilterSelect(filterTitle.key)">
          {{ filterTitle.value }}
        </a>
      </li>
    </ul>
    <button v-if="completedCount" class="clear-completed" @click="onClearCompleted">清除已完成</button>
  </footer>
</template>
<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import { FILTERS } from '../../constants/filter';

export default {
  methods: {
    ...mapActions(['onClearCompleted', 'onFilterSelect'])
  },
  computed: {
    ...mapState(['todos', 'filter']),
    ...mapGetters(['itemsLeft', 'completedCount']),
    itemText() {
      return this.itemsLeft === 1 ? '项' : '项';
    },
    filterTitles() {
      return [
        { key: FILTERS.all, value: '所有' },
        { key: FILTERS.active, value: '待完成' },
        { key: FILTERS.completed, value: '已完成' }
      ];
    }
  }
};
</script>
