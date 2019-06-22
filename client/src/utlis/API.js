import axios from "axios";

export default {

	getThreads: function() {
		return axios.get("/API/api")
	},

	saveThreads: function(threadData) {
		return axios.post("/API/api", threadData);
	  }
	
};