import axios from "axios";

export default {

	getThreads: function() {
		return axios.get("/api/forum");
	},

	getThread: function(id) {
<<<<<<< HEAD
		return axios.get("/api/forum/" + id);
=======
		return axios.get("/api/thread/" + id);
>>>>>>> 9495f7b4212a0af35bff5b3359d06331051e05a1
	},

	saveThreads: function(threadData) {
		return axios.post("/api/forum", threadData);
	  },
	
	  getPosts: function() {
		return axios.get("/api/forum")
	},

	savePosts: function(postData) {
		return axios.post("/api/forum", postData);

	},

		saveUser: function(userData) {
			return axios.post("/api/thread", userData);
	},
};