const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  // $(document).ready(function() {
  //   $('#adminLoginForm').on('submit', function (e) {
  //     e.preventDefault();

  //     const email = $('#email').val();
  //     const password = $('#password').val();

  //     // Show loading modal
  //     Swal.fire({
  //       title: 'Logging in...',
  //       text: 'Please wait while we verify your credentials.',
  //       allowOutsideClick: false,
  //       didOpen: () => {
  //         Swal.showLoading();
  //       }
  //     });

  //     $.ajax({
  //       url: 'https://cosmicforge-api.onrender.com/api/v1/cosmicforge/admin/login',
  //       method: 'POST',
  //       contentType: 'application/json',
  //       data: JSON.stringify({ email, password }),
  //       success: function (response) {
  //         const token = response.data; // This should be the JWT returned from the backend
  //         sessionStorage.setItem("adminToken", token); 
  //         if (response.successful) {
  //           // Close loading and show toast
  //           Swal.close();
  //           Toast.fire({
  //             icon: "success",
  //             title: "Signed in successfully"
  //           });

  //           // Wait 5 seconds before redirecting
  //           setTimeout(() => {
  //             window.location.href = '/home.html';
  //           }, 5000);
  //         } else {
  //           Swal.close();
  //           Toast.fire({
  //             icon: "error",
  //             title: response.message

  //           });
  //         }
  //       },
  //       error: function (xhr) {
  //         Swal.close();
  //         const res = xhr.responseJSON;
  //         console.log(xhr.responseJSON);
  //         Toast.fire({
  //           icon: "error",
  //           title: res?.message || 'Something went wrong'
  //         });
  //       }
  //     });
  //   });
  // });


// const Toast = Swal.mixin({
//   toast: true,
//   position: "top-end",
//   showConfirmButton: false,
//   timer: 3000,
//   timerProgressBar: true,
//   didOpen: (toast) => {
//     toast.onmouseenter = Swal.stopTimer;
//     toast.onmouseleave = Swal.resumeTimer;
//   },
// });

// $(document).ready(function () {
//   // const AUTH_URL = "http://localhost:3010/api/v1/cosmicforge/admin/login"; // Replace with your correct endpoint
//   const AUTH_URL = "https://cosmicforge-api.onrender.com/api/v1/cosmicforge/admin/login"; // Replace with your correct endpoint

//   let formData = { email: "", password: "" };

//   // Handle form data change
//   $('#email, #password').on('input', function (e) {
//     const { name, value } = e.target;
//     formData[name] = value;
//   });

//   // Handle form submission
//   $('#adminLoginForm').on('submit', function (e) {
//     e.preventDefault();

//     const { email, password } = formData;
//     if (!email || !password) {
//       return Toast.fire({
//         icon: "error",
//         title: "Please enter both email and password"
//       });
//     }

//     // Show loading modal
//     Swal.fire({
//       title: 'Logging in...',
//       text: 'Please wait while we verify your credentials.',
//       allowOutsideClick: false,
//       didOpen: () => {
//         Swal.showLoading();
//       }
//     });

//     $.ajax({
//       url: AUTH_URL,
//       method: 'POST',
//       contentType: 'application/json',
//       data: JSON.stringify({ email, password }),
//       success: function (response) {
//         if (response.successful) {
//           // Close loading and show toast
//           Swal.close();
//           Toast.fire({
//             icon: "success",
//             title: "Signed in successfully"
//           });

//           // Store user data in session storage
//           // const { id, username } = response.data.user;
//           // sessionStorage.setItem("user", JSON.stringify({ id, username }));

//           // Redirect to dashboard after 1 second
//           setTimeout(() => {
//             window.location.href = '/admin/dashboard.html';
//           }, 1000);
//         } else {
//           Swal.close();
//           Toast.fire({
//             icon: "error",
//             title: response.message || "Login failed"
//           });
//         }
//       },
//       error: function (xhr) {
//         Swal.close();
//         const res = xhr.responseJSON;
//         Toast.fire({
//           icon: "error",
//           title: res?.message || 'Something went wrong'
//         });
//       }
//     });
//   });
// });


// $(document).ready(function () {
//   $('#adminLoginForm').on('submit', function (e) {
//     e.preventDefault();

//     const formData = $(this).serialize(); // automatically URL-encodes form fields

//     Swal.fire({
//       title: 'Logging in...',
//       text: 'Please wait...',
//       allowOutsideClick: false,
//       didOpen: () => {
//         Swal.showLoading();
//       }
//     });

//     $.ajax({
//       // url: 'https://cosmicforge-api.onrender.com/api/v1/cosmicforge/admin/login',
//       url: 'http://localhost:3010/api/v1/cosmicforge/admin/login',
//       method: 'POST',
//       data: formData, // No stringify
//       success: function (response) {
//         Swal.close();
//         if (response.success) {
//           Toast.fire({
//             icon: "success",
//             title: "Signed in successfully",
//           });
//           setTimeout(() => {
//             window.location.href = '/admin/dashboard.html';
//           }, 3000);
//         } else {
//           Toast.fire({
//             icon: "error",
//             title: response.message
//           });
//         }
//       },
//       error: function (xhr) {
//         Swal.close();
//         const res = xhr.responseJSON;
//         console.log(res);
//         Toast.fire({
//           icon: "error",
//           title: res?.message || 'Something went wrong'
//         });
//       }
//     });
//   });
// });

// $(document).ready(function () {
//   $('#adminLoginForm').on('submit', function (e) {
//     e.preventDefault();

//     const email = $('#email').val().trim();
//     const password = $('#password').val().trim();

//     if (!email || !password) {
//       return Toast.fire({
//         icon: "warning",
//         title: "Please enter email and password",
//       });
//     }

//     // Show loading modal
//     Swal.fire({
//       title: 'Logging in...',
//       text: 'Please wait while we verify your credentials.',
//       allowOutsideClick: false,
//       didOpen: () => {
//         Swal.showLoading();
//       }
//     });

//     $.ajax({
//       url: 'https://cosmicforge-api.onrender.com/api/v1/cosmicforge/admin/login',
//       method: 'POST',
//       contentType: 'application/json',
//       data: JSON.stringify({ email, password }),
//       success: function (response) {
//         Swal.close();

//         if (response.success) {
//           Toast.fire({
//             icon: "success",
//             title: "Signed in successfully",
//           });

//           // Save token (optional) and redirect
//           setTimeout(() => {
//             window.location.href = '/admin/dashboard.html';
//           }, 3000);
//         } else {
//           Toast.fire({
//             icon: "error",
//             title: response.message || "Login failed",
//           });
//         }
//       },
//       error: function (xhr) {
//         Swal.close();
//         const errorMsg = xhr.responseJSON?.message || "Something went wrong!";
//         Toast.fire({
//           icon: "error",
//           title: errorMsg,
//         });
//       }
//     });
//   });
// });
