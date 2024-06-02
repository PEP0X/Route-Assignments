// Global Variables
let bmNameInput = document.getElementById('bmName');
let bmURLInput = document.getElementById('bmURL');
let bookmarkList = [];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('bookmarks')) {
        bookmarkList = JSON.parse(localStorage.getItem('bookmarks'));
        displayBookmarks(bookmarkList);
    }
});

function addBookmark() {
    if (!validateInputs(bmNameInput.value, bmURLInput.value)) {
        showModal();
        return;
    }
    let bookmark = {
        name: bmNameInput.value,
        url: bmURLInput.value
    };
    bookmarkList.push(bookmark);
    setLocalStorage();
    displayBookmarks(bookmarkList);
    console.log("Added Successfully ! \n", bookmarkList);
    updateInputs();
}

function setLocalStorage() {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkList));
}

function updateInputs(config) {
    bmNameInput.value = config ? config.name : '';
    bmURLInput.value = config ? config.url : '';
    bmNameInput.classList.remove('is-valid', 'is-invalid');
    bmURLInput.classList.remove('is-valid', 'is-invalid');
}

function displayBookmarks(list) {
    let cartona = ``;
    for (let i = 0; i < list.length; i++) {
        cartona += `<tr>
                        <th class="fw-light">${i}</th>
                        <th class="fw-light">${list[i].name}</th>
                        <th>
                            <button onclick="visitBookmark('${list[i].url}')" class="btn btn-info fw-medium">Visit</button>
                        </th>
                        <th>
                            <button onclick="deleteBookmark(${i})" class="btn btn-danger fw-medium">Delete</button>
                        </th>
                    </tr>`;
    }
    document.getElementById('tableContent').innerHTML = cartona;
}

function visitBookmark(url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
    }
    window.open(url, '_blank');
}

function deleteBookmark(index) {
    bookmarkList.splice(index, 1);
    setLocalStorage();
    displayBookmarks(bookmarkList);
}

function validateInputs(name, url) {
    const urlPattern = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;
    
    return name.trim().length >= 3 && urlPattern.test(url);
}

function validateName() {
    const name = bmNameInput.value;
    if (name.trim().length >= 3) {
        bmNameInput.classList.remove('is-invalid');
        bmNameInput.classList.add('is-valid');
    } else {
        bmNameInput.classList.remove('is-valid');
        bmNameInput.classList.add('is-invalid');
    }
}

function validateURL() {
    const url = bmURLInput.value;
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (urlPattern.test(url)) {
        bmURLInput.classList.remove('is-invalid');
        bmURLInput.classList.add('is-valid');
    } else {
        bmURLInput.classList.remove('is-valid');
        bmURLInput.classList.add('is-invalid');
    }
}

function showModal() {
    let validationModal = new bootstrap.Modal(document.getElementById('validationModal'));
    validationModal.show();
}
