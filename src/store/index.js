import Vue from "vue";
import Vuex from "vuex";
import API from "../axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    createdPost: null,
    post: null,
    posts: []
  },
  mutations: {
    SET_CREATED_POST(state, post) {
      state.createdPost = post;
    },
    SET_POST(state, post) {
      state.post = post;
    },
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    PUSH_POST(state) {
      state.posts.push(state.createdPost);
    }
  },
  actions: {
    createPost: async ({ commit }, payload) => {
      const res = await API.post(`/posts/`, payload);
      commit("SET_CREATED_POST", res.data);
      commit("PUSH_POST");
      return res;
    },
    getPost: async ({ commit }, postId) => {
      const res = await API.get(`/posts/${postId}`);
      commit("SET_POST", res.data);
      return res;
    },
    listPosts: async ({ commit }) => {
      const res = await API.get(`/posts/`);
      commit("SET_POSTS", res.data);
      return res;
    }
  },
  modules: {}
});
