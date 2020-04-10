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
    },
    DELETE_POST(state, post) {
      state.posts.splice(
        state.posts.indexOf(state.posts.filter(x => x._id === post._id)[0]),
        1
      );
    },
    UPDATE_POST(state, payload) {
      state.posts
        .filter(x => x._id === payload.postId)
        .map(a => {
          return { ...a, ...payload.changes };
        });
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
      commit(
        "SET_POSTS",
        res.data.map(p => {
          return {
            ...p,
            spotifyLink: p.spotifyLink ? p.spotifyLink : ""
          };
        })
      );
      return res;
    },
    deletePost: async ({ commit }, postId) => {
      const res = await API.delete(`/posts/${postId}`);
      commit("DELETE_POST", res.data);
      return res;
    },
    updatePost: async ({ commit }, payload) => {
      const res = await API.put(`/posts/${payload.postId}`, {
        ...payload.changes
      });

      commit("UPDATE_POST", {
        postId: payload.postId,
        changes: res.data
      });
      return res;
    }
  },
  modules: {}
});
