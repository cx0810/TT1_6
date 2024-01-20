import Swal from "sweetalert2";

export const swalSuccess = (message) => {
  return Swal.fire({
    title: "Success",
    text: message,
    icon: "success",
    confirmButtonText: "Dismiss",
    confirmButtonColor: "#4B4CDC",
  });
};

export const swalError = (error) => {
  return Swal.fire({
    title: "Error",
    text: error,
    icon: "error",
    confirmButtonText: "Try Again",
    confirmButtonColor: "#CF0542",
  });
};

export const swalConfirmation = (message, title = "") => {
  return Swal.fire({
    title: title ?? "Are you sure?",
    text: message,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#4B4CDC",
    cancelButtonColor: "#CF0542",
    confirmButtonText: "Confirm",
    reverseButtons: true,
  });
};

export const swalTextInput = (message) => {
  return Swal.fire({
    title: message,
    input: "text",
    showCancelButton: true,
    reverseButtons: true,
    confirmButtonColor: "#4B4CDC",
    cancelButtonColor: "#CF0542",
    confirmButtonText: "Confirm",
    inputValidator: (value) => {
      if (!value) {
        return "You need to write something!";
      }
    },
  });
};
