document.addEventListener("deviceready", loadContacts, false);

function loadContacts() {
    let options = new ContactFindOptions();
    options.filter = "resp";
    options.multiple = true;
    options.hasPhoneNumber = true;
    let fields = ['name'];

    navigator.contacts.find(fields, showContacts, handleError, options);
}

function showContacts(contacts) {
    let code = '';

    for (let i = 0; i < contacts.length; i++) {
        code += `<li>
                    <a href="#">
                        <img src="images/avatar.jpg" alt="photo de profil du contact">
                        <h1>${contacts[i].name.formatted}</h1>
                        <p>${contacts[i].phoneNumbers[0].value}</p>
                    </a>
                 </li>`;
    }

    document.getElementById('contactList').innerHTML = code;
    $("#contactList").listview('refresh');
}

function handleError(error) {
    console.log(error);
    alert('Une erreur inattendue s\'est produite');
}
