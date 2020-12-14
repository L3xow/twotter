import { createStore } from 'vuex'
import { userModule} from "./user";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user: userModule
  }
})
