const customerList = [{
        customerName: "Mutlu",
        customerEnemy : [{
                EnemyName: "Can",
                EnemyAdressList : ["beykoz", "sariyer", "ümraniye"] 
            },
            {
                EnemyName: "Mecit",
                EnemyAdressList :["dikmen", "yildiz", "ulus"]
            }
        ]
    },
    {
        customerName: "Mesut",
        customerEnemy : [{
                EnemyName: "Nedim",
                EnemyAdressList : ["tokyo", "pekin", "askabat"]
            },
            {
                EnemyName: "Bülent",
                EnemyAdressList : ["zürih", "berlin", "paris"]
            },
            {
                EnemyName: "Melih",
                EnemyAdressList : ["helsinki", "oslo", "kopenhag"]
            }
        ]
    },
    {
        customerName: "Salih",
        customerEnemy : [{
                EnemyName: "Oguz",
                EnemyAdressList : ["sam", "kudüs", "bagdat"]
            },
            {
                EnemyName: "Lütfü",
                EnemyAdressList : ["prag", "moskova", "bosna"]
            },
            {
                EnemyName: "Kamil",
                EnemyAdressList : ["panama", "kansas", "utah"]
            }
        ]
    }
]

const mainContainer = document.querySelector("#main-container");

//Sayfa yüklendiginde müsteri listesi olusturma eventi.
window.onload = () => {
    createCustomerList(customerList);
};

/**
 * bu fonksiyon parametre olarak gönderilen arrayden müsteri listesi olusturur.
 * @param {array} pCustomerList 
 */
function createCustomerList(pCustomerList){
    document.querySelector("#main-container").innerHTML =  `
    <div class="list-group w-25">
    ${pCustomerList.map(getCustomerName).join("")}
    </div>
`;
}

//map methodunun callback fonksiyonu(parametresini kendi olusturur.arraydaki siradaki elementi alir.)
function getCustomerName(customer){
 return`
    <button type="button" data-name = "${customer.customerName}" class="customer list-group-item  list-group-item-action ">
    ${customer.customerName}
    </button>`;
}