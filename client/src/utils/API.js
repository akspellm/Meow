getChat: function(id) {
    return axios.get("/api/chat/" + id);
  },
