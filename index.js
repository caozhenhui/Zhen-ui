import Switch from './src/packages/switch'
import Table from './src/packages/table'

const arr = [
  Switch,
  Table
]

export default {
  install (Vue) {
    arr.map(item => {
      Vue.use(item)
    })
  }
}
