import axios from "axios";

export default {
  
  getGoogleBooks: function(query) {
    return axios.get("/api/books/google-results", {params: {q: query}})
  },
  //working:
  getBooks: function(query) {
    const apikey = process.env.REACT_APP_GOOGLE_KEY;
    return axios.get("https://www.googleapis.com/books/v1/volumes", {params: {q: query, key: apikey}})
  }

}