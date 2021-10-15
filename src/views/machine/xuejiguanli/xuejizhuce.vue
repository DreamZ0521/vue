<template>
  <el-transfer
    filterable
    :filter-method="filterMethod"
    filter-placeholder="请输入城市拼音"
    v-model="value"
    :data="data">
  </el-transfer>
</template>

<script>
export default {
  data() {
    const generateData = _ => {
      const data = [];
      const cities = ['学员类别', '学号', '姓名', '曾用名', '性别', '民族', '出生日期'];
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        });
      });
      return data;
    };
    return {
      data: generateData(),
      value: [],
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      }
    };
  }
};
</script>

<style scoped>

</style>
