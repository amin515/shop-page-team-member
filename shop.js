

// Shop page start


// get element for shop page

const sec_form = document.querySelector('#form-three');
const shop_btn = document.querySelector('#shop_btn');
const close2 = document.querySelector('#close1');
const form_threee = document.querySelector('.form-threee');
const result_shop = document.querySelector('.result_shop');


console.log(form_threee);


shop_btn.addEventListener('click', function(b){
    b.preventDefault();
    form_threee.setAttribute('style', 'transform: scaleY(1)');
});

close2.addEventListener('click', function(c){
    c.preventDefault();
    form_threee.style.display="none";
});


sec_form.addEventListener('submit' , function(m){
m.preventDefault();

let name = this.querySelector('input[name="name"]');
let regular = this.querySelector('input[name="regular"]');
let sale = this.querySelector('input[name="sale"]');
let photo = this.querySelector('input[name="photo"]');




let data_array = '';
if(getData('shop')){
    data_array = getData('shop');
}else{
    data_array = [];
}


data_array.push({

    name_a     : name.value,
    regular_a  : regular.value,
    sale_a     : sale.value,
    photo_a    : photo.value,

})

dataSend('shop', data_array);

shopDesign();

// console.log(`${name.value} ${regular.value} ${sale.value} ${photo.value}`);
});
shopDesign()

function shopDesign(){
    let all_items = getData('shop');


    let data = '';

    all_items.map(data2 =>{


        data += `
        
        <div class="col-md-4 my-2" id="row_close">
                            <div class="card">
                            <button class="close" id="off_btn">&times</button>
                                <img style="width: 100%; height: 250px; object-fit: cover;" src="${data2.photo_a}"
                                    alt="">
                                <div class="card-body ">

                                    <h4>${data2.name_a}</h4>
                                    <span><p class="p-span"> Regular Price: <span class="text-decoration-line-through">$${data2.regular_a ? data2.regular_a : data2.sale_a}</span> <span> Sale Price: ${data2.sale_a ? data2.sale_a :data2.sale_a}</span></p></span>
                                </div>
                                <li style="list-style: none; text-align: center;display:flex;">
                                    <button><span><i class="far fa-heart"></i></span></button>
                                    <button class="btn btn-light btn-block w-50" value="Add to chart">Add to chart</button>
                                    <button><span><i class="fas fa-sync-alt"></i></span></button>
                                </li>
                              
                            </div>
                        </div>
        
        
        `;
    });

    result_shop.innerHTML = data;


}


