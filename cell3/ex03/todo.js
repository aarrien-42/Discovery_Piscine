function createToDo() {
	tareaTexto = window.prompt("Tarea:");
	if (tareaTexto != "") {
		let tarea = document.createElement("div");
		tarea.classList.add('tarea'); /* se puede hacer con setAttribute */
		tarea.setAttribute('onclick', 'deleteToDo()');
		tarea.innerHTML = tareaTexto;
		document.getElementById("ft_list").prepend(tarea); /* append lo pone al final */
		addCookie(tareaTexto);
	}
}

function deleteToDo() {
	confirmation = confirm("¿Está seguro de que desea borrar la tarea?");
	if (document.cookie){
		var splitted = document.cookie.split("_");
		document.cookie = document.cookie + ";max-age=0";
	}
	var i = 0;
	var finalCookies;
	if (confirmation == true)
	{
		console.log("target.content = ", event.target.innerHTML);
		while (splitted[i])
		{
			if (event.target.innerHTML != splitted[i])
			{
				if (finalCookies == "")
					document.cookie = splitted[i] + "_";
				else
					document.cookie = document.cookie + splitted[i] + "_";
			}
			i++;
		}
		event.target.remove();
	}
}

function addCookie(content) {
	if (!document.cookie)
		document.cookie = tareaTexto + "_";
	else
		document.cookie = document.cookie + tareaTexto + '_';
}

function checkCookies() {
	var i = 0;
	var splitted = document.cookie.split("_");
	while (splitted[i]) {
		let tarea = document.createElement("div");
		tarea.classList.add('tarea');
		tarea.setAttribute('onclick', 'deleteToDo()');
		tarea.innerHTML = splitted[i];
		document.getElementById("ft_list").prepend(tarea);
		i++;
	}
}
