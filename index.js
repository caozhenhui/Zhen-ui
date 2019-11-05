import Switch from './packages/switch'
import Table from './packages/table'

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
