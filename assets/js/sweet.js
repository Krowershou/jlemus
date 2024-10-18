function good() {
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
  });
}

function peligro() {
  Swal.fire({
    icon: "error",
    title: "Esta seguro",
    text: "pagina peligrosa",
    footer: '<a href="#">Dios esta aqui</a>',
  });
}

function truth() {
  Swal.fire({
    icon: "error",
    title: "Rayos",
    text: "pagina peligrosa",
    footer: '<a href="#">Dios esta aqui</a>',
  });
}

function trhee() {
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Hola",
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Esta guardado!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("CNo se guardaron los cambios", "", "info");
    }
  });
}
