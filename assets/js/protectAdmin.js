// // protect.js

  // $(document).ready(function () {
  //   const token = sessionStorage.getItem("adminToken");
  //   console.log("Stored Token:", token);

  //   if (!token) {
  //     Swal.fire({
  //       icon: 'warning',
  //       title: 'Unauthorized!',
  //       text: 'You must be logged in to access this page.',
  //       confirmButtonText: 'Go to Login'
  //     }).then(() => {
  //       window.location.href = "index.html";
  //     });
  //   } else {
  //     fetch("http://localhost:3010/api/v1/cosmicforge/admin/dashboard", {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json"
  //       }
  //     })
  //     .then(response => {
  //       if (!response.ok) {
  //         return response.json().then(err => { throw err });
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log("Access granted:", data.message);
  //       Toast.fire({
  //         icon: 'success',
  //         title: 'Access granted'
  //       });
  //     })
  //     .catch(err => {
  //       console.error("Verification failed:", err.message);
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Session Expired!',
  //         text: err.message || 'Token invalid or expired. Please login again.',
  //         confirmButtonText: 'Go to Login'
  //       }).then(() => {
  //         sessionStorage.removeItem("adminToken");
  //         window.location.href = "index.html";
  //       });
  //     });
  //   }
  // });


$(document).ready(function () {
    const token = sessionStorage.getItem("adminToken");
    console.log(token);
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
        // url: "http://localhost:3010/api/v1/cosmicforge/admin/dashboard", 
        url: "https://cosmicforge-api.onrender.com/api/v1/cosmicforge/admin/dashboard", 
        method: "GET", 
        headers: {
          Authorization:`Bearer ${token}`,
          "Content-Type": "application/json"
        },
        success: function (res) {
          console.log("Access granted:", res.message);
         
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


// $(document).ready(function () {
//   const token = sessionStorage.getItem("adminToken");

//   if (!token) {
//     Swal.fire({
//       icon: 'warning',
//       title: 'Unauthorized!',
//       text: 'You must be logged in to access this page.',
//       confirmButtonText: 'Go to Login'
//     }).then(() => {
//       window.location.href = "index.html";
//     });
//     return;
//   }

//   $.ajax({
//     url: "http://localhost3010/api/v1/cosmicforge/admin/dashboard",
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`
//     },
//     success: function (res) {
//       console.log("Admin data:", res.data);
//       Toast.fire({
//         icon: 'success',
//         title: 'Welcome back!'
//       });
//       // You can now populate admin info if needed
//     },
//     error: function (err) {
//       console.error("Token invalid:", err?.responseJSON?.message);
//       Swal.fire({
//         icon: 'error',
//         title: 'Session Expired!',
//         text: 'Please log in again.',
//         confirmButtonText: 'Go to Login'
//       }).then(() => {
//         sessionStorage.removeItem("adminToken");
//         window.location.href = "index.html";
//       });
//     }
//   });
// });
