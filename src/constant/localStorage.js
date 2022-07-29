
const LocalStorageHelper = {

    getItemFromLocalStorage(key) {
      try {
        return JSON.parse(localStorage.getItem(key));
      } catch (e) {
        return {}
      }
    },
  
    getItem (key) {
      try {
        return localStorage.getItem(key);
      } catch (error) {
        console.error(error);
      }
    },
    
    setItemIntoLocalStorage(key, value) {
      localStorage.setItem(key, value);
    },
  
    removeItemFromLocalStorage(key) {
      localStorage.removeItem(key);
    },
  
    logout() {
      localStorage.clear();
      window.location.href = '/';
    }
  
  }
  
  export default LocalStorageHelper
  