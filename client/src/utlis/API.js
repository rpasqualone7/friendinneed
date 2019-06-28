import axios from "axios";

export default {

	getThreads: function() {
		return axios.get("/api/forum");
	},

	getThread: function(id) {
		return axios.get("/api/thread/" + id);
	},

	saveThreads: function(threadData) {
		return axios.post("/api/forum", threadData);
	  },
	
	  getPosts: function() {
		return axios.get("/api/thread")
	},

	savePosts: function(postData) {
		return axios.post("/api/thread", postData);
	},
};