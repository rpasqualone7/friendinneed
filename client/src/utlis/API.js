import axios from "axios";

export default {

	getThreads: function() {
		return axios.get("/api/post/forum")
	},

	saveThreads: function(threadData) {
		return axios.post("/api/post/forum", threadData);
	  },
	
	  getPosts: function() {
		return axios.get("/api/post/thread")
	},

	savePosts: function(postData) {
		return axios.post("/api/post/thread", postData);
	},
};