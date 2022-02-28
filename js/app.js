const loadData = () => {

    const searchText = document.getElementById('search-text');
    if (searchText.value === '') {
        alert("please Insert Phone name")
    }
    else {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText.value}`)
            .then(res => res.json())
            .then(data => displayData(data.data))
    }

    const getPhonesSect = document.getElementById('phones');
    getPhonesSect.innerHTML = '';
    searchText.value = "";

}
const displayData = (data) => {
    const getPhonesSect = document.getElementById('phones');
    for (const phone of data) {
        const div = document.createElement('div');
        div.classList.add('col-lg-4');

        div.innerHTML = `
        
                        <div class="card " style="width: 18rem;">
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
const phoneDetail = (slug) => {
    fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
        .then(res => res.json())
        .then(data => displayDetails(data.data))
    const displayDetails = (data) => {
        const getPhoneDetailId = document.getElementById('phone-detail')
        const detailDiv = document.createElement('div');
        const getPhonesSect = document.getElementById('phones');
        console.log(data)
        getPhonesSect.innerHTML = '';
        document.getElementById('search').addEventListener('click', function () {
            document.getElementById('phone-detail').innerHTML = ''
        })
        detailDiv.innerHTML = `
        <div class="d-flex w-100  gap-5">
                            <div class="text-center my-3">
                                <img class="card-img-top img-fluid " src="${data.image}" alt="Card image cap">
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
                                
                            </div>
        </div>
        `;
        getPhoneDetailId.appendChild(detailDiv);
    }
}