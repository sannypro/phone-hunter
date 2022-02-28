const loadData = () => {

    const searchText = document.getElementById('search-text');
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText.value}`)
        .then(res => res.json())
        .then(data => displayData(data.data))

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
    const getPhonesSect = document.getElementById('phones');
    fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
        .then(res => res.json())
        .then(data => console.log(data.data))
}