/**Olusturulan fonksiyonlari sayfaya yazdirma fonksiyonu*/
function updateUI() {
    mainElement.innerHTML = createPageHeader() +
        createRegisterComponent()
}

/**sayfanin basligini olusturma fonksiyonu*/
function createPageHeader() {
    return `
        <h1 class="display-3 fw-bold text-danger text-center">School Registration System</h1>
    `
}

/**basligin altinda yer alan form ve tabloyu olusturma fonksiyonu*/
function createRegisterComponent() {
    return `
    <article id="register-component">
        <section class="container w-25" id="form-resgister">
            ${createFormHeader()}
            ${createFormGrup()}
            ${createAddButton()}
        </section>
        <section class="container w-50 mt-4 " id="student-list">
            ${createDisplayTableComponent()}
        </section>
    </article>
    `
}

/**sol taraftaki formun basligini olusturma fonksiyonu*/
function createFormHeader() {
    return `
        <h2 class="display-6">Student</h2>
    `
}

/**form grubunu olusturma fonksiyonu*/
function createFormGrup() {
    return `
    <form>
        <div class="form-group">
            <label for="Name">Name</label>
            <input type="name" class="form-control" id="input-name">
            </div>
            <div class="form-group">
            <label for="Surname">Surname</label>
            <input type="surname" class="form-control" id="input-surname">
            </div>
            <div class="form-group">
            <label for="age">Age</label>
            <input type="age" class="form-control" id="input-age">
        </div>
    </form>
    `
}

/**add butonunu olusturma fonksiyonu*/
function createAddButton() {
    return `
        <button id="button-add" type="submit" class="btn btn-outline-primary mt-3">Add</button>
    `
}