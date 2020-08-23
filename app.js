
const rentalItemsWrapper = document.getElementById("rentalItemsWrapper");
async function getItems () {
    const response = await fetch ("http://134.209.156.166/items/");
    const data = await response.json();

    return data;
}

getItems().then(data => {
    console.log(data);
    updateUI(data);
});

function updateUI(data) {
    let innerHtml = "";

    data.forEach(item => {
        innerHtml += `
        <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <a href="#"><img class="card-img-top" src="https://cdn.pocket-lint.com/r/s/970x/assets/images/142419-speakers-review-jbl-flip-4-review-image2-cxskqkeddm-jpg.webp" alt=""></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">${item.itemName}</a>
            </h4>
            <h5>&#8377 ${item.rentalAmount}</h5>
            <p class="card-text">${item.itemDescription}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small><br><br>
            <button class="btn btn-primary">Rent this product</button>
          </div>
        </div>
      </div>
        `;
    })
    rentalItemsWrapper.innerHTML = innerHtml;
}
