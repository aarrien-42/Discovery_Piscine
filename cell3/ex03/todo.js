function createToDo() {
	tareaTexto = window.prompt("Tarea:");
	if (tareaTexto != "") {
		let tarea = document.createElement("div");
		tarea.classList.add('tarea'); /* se puede hacer con setAttribute */
		tarea.setAttribute('onclick', 'deleteToDo()');
		tarea.innerHTML = tareaTexto;
		document.getElementById("ft_list").prepend(tarea); /* append lo pone al final */
	}
}
function deleteToDo() {
	confirmation = confirm("¿Está seguro de que desea borrar la tarea?");
	if (confirmation == true)
		event.target.remove();
}
