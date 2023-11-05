function borrar(){
    
   formT.reset();
   return false;
}

const alertList = document.querySelectorAll('.alert')
const alerts = [...alertList].map(element => new bootstrap.Alert(element))