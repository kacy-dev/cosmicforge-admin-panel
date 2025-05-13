
$(document).ready(function () {
    const token = sessionStorage.getItem("adminToken");
    if (!token) {
      Swal.fire({
        icon: 'warning',
        title: 'Unauthorized!',
        text: 'You must be logged in to access this page.',
        confirmButtonText: 'Go to Login'
      }).then(() => {
        window.location.href = "index.html";
      });
    } else {
      $.ajax({
        url: "https://cosmicforge-api.onrender.com/api/v1/cosmicforge/admin/dashboard", 
        method: "GET", 
        headers: {
          Authorization:`Bearer ${token}`,
          "Content-Type": "application/json"
        },
        success: function (res) {
          
          Toast.fire({
            icon: 'success',
            title: 'Access granted'
          });
        },

        error: function (err) {
          console.error("Verification failed:", err.statusText);
          Swal.fire({
            icon: 'error',
            title: 'Session Expired!',
            text: 'Your token is invalid or has expired. Please login again.',
            confirmButtonText: 'Go to Login'
          }).then(() => {
            sessionStorage.removeItem("adminToken");
            window.location.href = "index.html";
          });
        }
      });
    }
  });



