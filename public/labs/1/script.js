function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const checkRoute = () => {
      if (getCookie("userId") && window.localStorage.getItem("user")) {
          return
      } else {
          window.location.href = "/";
      }
  }