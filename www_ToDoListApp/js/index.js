function ajouterTache() {
    let taskFieldText = document.getElementById("taskFieldText");
    const taskList = document.getElementById("taskList");

    if (taskFieldText.value) {
        const li_element = document.createElement("li");
        li_element.innerHTML = taskFieldText.value;
        $(li_element).on("swiperight", handleRightSwipe);
        $(li_element).on("swipeleft", handleLeftSwipe);

        taskList.appendChild(li_element);
        $("#taskList").listview("refresh");

        taskFieldText.value = '';
        $("#taskFieldText").focus();
    }
}

function reinitialiserListe() {
    document.getElementById("taskList").innerHTML = '';
    document.getElementById("completedTaskList").innerHTML = '';
}

function handleRightSwipe(event) {
    if (event.target) {
        const taskList = document.getElementById("taskList");
        const completedTaskList = document.getElementById("completedTaskList");
        const targetElement = event.target;

        if (targetElement.parentElement.id === "taskList") {
            completedTaskList.appendChild(targetElement);
        } else {
            taskList.appendChild(targetElement);
        }

        $("#taskList").listview("refresh");
        $("#completedTaskList").listview("refresh");
    }
}

function handleLeftSwipe(event) {
    if (event.target) {
        event.target.parentElement.removeChild(event.target);
    }
}
