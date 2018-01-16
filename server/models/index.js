
const models = require('./models.json');
const {merge} = require('lodash')

// 将多个schema、resolve引入并处理
const resolvers = {}
const typeDefs = models.models.map((v) => {
    // 合并resolver
    merge(resolvers,require(`${v.path}/resolver`))
    // 返回typeDefs数组
    return require(`${v.path}/schema`)
})



module.exports = {typeDefs,resolvers};