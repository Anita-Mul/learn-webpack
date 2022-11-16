// Shimming 预设全局变量
// import _ from 'lodash'
// console.log(_.join(['hello', 'webpack'], ' '))

// 细粒度 Shimming
// this.alert('hello webpack')

// 全局 exports
const { file, parse } = require("./globals");
console.log(file);
parse();
