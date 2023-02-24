<template>
  <div>
    <ul class="logsUl">
      <li
        class="logsLi"
        v-for="log in listLogs"
        :key="log.text"
        :class="log.clss"
      >
        {{ log.text }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "LogsJogo",
  props: ["listLogs"],
};
</script>
<style>
.logsUl {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}
.logsLi {
  display: flex;
  justify-content: center;
  margin: 4px 0px;
  padding: 3px 0px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 3px;
  width: 400px;
}
</style>
