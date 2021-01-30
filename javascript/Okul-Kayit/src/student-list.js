/**forma girilen bilgiler bu arraye gönderilmektedir.*/
let studentList = [];

/**
 * bu fonksiyonda sagdaki tablo olusturulmaktadir.
 */
function createDisplayTableComponent() {
    return `
    <section class="container w-75 mt-4 " id="student-list">
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Age</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody id="display-table-create-new-row"></tbody>
            <tfoot id="display-table-create-foot">
                <tr>
                <th scope="row" colspan="3">Toplam Ögrenci Sayisi</th>
                <td id="total-number-student" colspan="2">0</td>
                </tr>
            </tfoot>
        </table>
    </section>
    `
}

/**
 * bu fonksiyonda sagdaki tablonun her satirina eklenecek silme butonu olusturulmaktadir.
 */
function createRemoveButton() {
    return `
        <button id="button-remove" type="submit" class="btn btn-outline-danger">Delete</button>
    `
}