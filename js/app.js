//  data loading from Api

const loadData = () => {

    const searchText = document.getElementById('search-text');
    const lowerCase = searchText.value.toLowerCase();

    if (searchText.value === '') {
        alert("please Insert Phone name")
    }
    else {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${lowerCase}`)
            .then(res => res.json())
            .then(data => displayData(data.data))

    }

    const getPhonesSect = document.getElementById('phones');
    getPhonesSect.innerHTML = '';
    searchText.value = "";

}


// data showing in website




const displayData = (data) => {

    if (data == false) {
        alert('No result Found')
    }
    else {
        const getPhonesSect = document.getElementById('phones');
        const sliceArray = data.slice(0, 20)
        for (const phone of sliceArray) {
            const div = document.createElement('div');
            div.classList.add('col-lg-4', 'col-md-6');

            div.innerHTML = `
        
                        <div class="card  back-ground " style="width: 18rem;">
                            <div class="text-center my-3">
                                <img class="card-img-top w-75 " src="${phone.image}" alt="Card image cap"></div>
                            <div class="card-body">
                                <h5 class="card-title">${phone.phone_name}</h5>
                                <p class="card-text">Brand Name: ${phone.brand}</p>
                                <a onclick="phoneDetail('${phone.slug}')" class="btn btn-primary">Details</a>
                            </div>
                        </div>
        `;
            getPhonesSect.appendChild(div);
        }
    }

}




// detail of every phone



const phoneDetail = (slug) => {
    fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
        .then(res => res.json())
        .then(data => displayDetails(data.data))
    const displayDetails = (data) => {
        const getPhoneDetailId = document.getElementById('phone-detail')
        const detailDiv = document.createElement('div');
        getPhoneDetailId.innerHTML = '';
        const getPhonesSect = document.getElementById('phones');
        document.getElementById('search').addEventListener('click', function () {
            document.getElementById('phone-detail').innerHTML = ''
        })
        if (data.releaseDate == '') {
            detailDiv.innerHTML = `
            <div id="closeDetail" class="d-flex card flex-column w-75 mx-auto detail-bg gap-5">
                                <div class="text-center my-3">
                                    <img class=" w-25 " src="${data.image}" alt="Card image cap">
                                </div>
                                <div class="">
                                    <h5>${data.brand}</h5>
                                    <p><b>Name: </b>${data.name}</p>
                                    <p>Release Date: no result found</p>
                                    <h1>Main Feature</h1>
                                    <p><b>Chipset:</b> ${data.mainFeatures.chipSet}</p>
                                    <p ><b>Display Size:</b> ${data.mainFeatures.displaySize}</p>
                                    <p ><b>Memory:</b> ${data.mainFeatures.memory}</p>
                                    <p ><b>Storage:</b> ${data.mainFeatures.storage}</p>
                                    <h5> Some sensors :</h5>
                                    <p>${data.mainFeatures.sensors}</p>
                                    <h2> Other info :</h2>
                                    <p><b>Bluetooth:</b> ${data.others.Bluetooth}</p>
                                    <p><b>GPS: </b>${data.others.GPS}</p>
                                    <p><b>NFC: </b>${data.others.NFC}</p>
                                    <p><b>Radio: </b> ${data.others.Radio}</p>
                                    <p><b>USB: </b>${data.others.USB}</p>
                                    <p><b>WLAN:</b> ${data.others.WLAN}</p>
                                </div>
                                <button onclick='closeDetail()' class="btn btn-primary w-50 mx-auto"> close </button>
            </div>
            `;
            getPhoneDetailId.appendChild(detailDiv);
        }
        else {
            if (data.others == undefined) {
                detailDiv.innerHTML = `
            <div id="closeDetail" class="d-flex card flex-column w-75 mx-auto detail-bg gap-5">
                                <div class="text-center my-3">
                                    <img class=" w-25 " src="${data.image}" alt="Card image cap">
                                </div>
                                <div class="">
                                    <h5>${data.brand}</h5>
                                    <p><b>Name: </b>${data.name}</p>
                                    <p>Release Date: ${data.releaseDate}</p>
                                    <h1>Main Feature</h1>
                                    <p><b>Chipset:</b> ${data.mainFeatures.chipSet}</p>
                                    <p ><b>Display Size:</b> ${data.mainFeatures.displaySize}</p>
                                    <p ><b>Memory:</b> ${data.mainFeatures.memory}</p>
                                    <p ><b>Storage:</b> ${data.mainFeatures.storage}</p>
                                    <h2> Some sensors :</h2>
                                    <p>${data.mainFeatures.sensors}</p>
                                    <h2> Other info :</h2>
                                    <p>NO info Found</p>
                                    
                                    
                                </div>
                                <button onclick='closeDetail()' class="btn btn-primary  w-50 mx-auto"> close </button>
            </div>
            `;
            }
            else {
                detailDiv.innerHTML = `
            <div id="closeDetail" class="d-flex card flex-column w-75 mx-auto detail-bg gap-5">
                                <div class="text-center my-3">
                                    <img class=" w-25 " src="${data.image}" alt="Card image cap">
                                </div>
                                <div class="w-75 mx-auto">
                                    <h5>${data.brand}</h5>
                                    <p><b>Name: </b>${data.name}</p>
                                    <p>Release Date: ${data.releaseDate}</p>
                                    <h1>Main Feature</h1>
                                    <p><b>Chipset:</b> ${data.mainFeatures.chipSet}</p>
                                    <p ><b>Display Size:</b> ${data.mainFeatures.displaySize}</p>
                                    <p ><b>Memory:</b> ${data.mainFeatures.memory}</p>
                                    <p ><b>Storage:</b> ${data.mainFeatures.storage}</p>
                                    <h2> Some sensors :</h2>
                                    <p>${data.mainFeatures.sensors}</p>
                                    <h2> Other info :</h2>
                                    <p><b>Bluetooth:</b> ${data.others.Bluetooth}</p>
                                    <p><b>GPS: </b>${data.others.GPS}</p>
                                    <p><b>NFC: </b>${data.others.NFC}</p>
                                    <p><b>Radio: </b> ${data.others.Radio}</p>
                                    <p><b>USB: </b>${data.others.USB}</p>
                                    <p><b>WLAN:</b> ${data.others.WLAN}</p>
                                    
                                </div>
                                <button onclick='closeDetail()' class="btn btn-primary w-50 mx-auto"> close </button>
            </div>
            `;

            }
        }


        // scroll to the top



        getPhoneDetailId.appendChild(detailDiv);
        document.body.scrollTop = 200; // For Safari
        document.documentElement.scrollTop = 200; // For Chrome, Firefox, IE and Opera
    }
}
const closeDetail = () => {
    const phonedetail = document.getElementById('phone-detail');
    phonedetail.innerHTML = '';
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}