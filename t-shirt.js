// get Element 

const main_form = document.querySelector('#main_form');
const result = document.querySelector('.result');




// main_form.addEventListener('submit', function (e) {
//     e.preventDefault();


//     let name = this.querySelector('input[name="name"]');
//     let gender = this.querySelector('input[name="gender"]:checked');
//     let skill = this.querySelectorAll('input[name="skills"]:checked');
//     let photo = this.querySelector('input[name="photo"]');



//     let skills_arr = [];
//     for (let i = 0; i < skill.length; i++) {
//         skills_arr.push(skill[i].value);
//     }




//     let data_arr;
//     if (getData('devs')) {
//         data_arr = getData('devs')
//     } else {
//         data_arr = [];
//     }


//     data_arr.push({
//         name: name.value,
//         Gender: gender.value,
//         skill: skills_arr,
//         photo: photo.value,
//     })




//     dataSend('devs', data_arr)


//     fullDevs();

// });

//    fullDevs();

//     function fullDevs(){

//         let full_devs = getData('devs');

//         let data = '';
//         full_devs.map((data1 =>{



//         let lists = '';
//         data1.skill.map(list =>{
//             lists += `<li class="list-group-item">${list}</li>`
//         })


//             data += `

//             <div class="col-md-4 my-2">
//                         <div class="card shadow">
//                             <img style="width: 100%; height: 270px; object-fit: cover;"
//                                 src="${data1.photo}"
//                                 alt="">
//                             <div class="card-body">

//                                 <h2>${data1.name}</h2>
//                                 <p>Gender : ${data1.Gender}</p>
//                                 Skill
//                                 <hr>
//                                 <ul class="list-group">
//                                    ${lists}
//                                 </ul>
//                             </div>
//                         </div>
//                     </div> 


//             `;




//         }));

//         result.innerHTML = data;


//     }


const form_two = document.querySelector('.form-2');
const btn = document.querySelector('#btn');
const close1 = document.querySelector('#close');

const fab = document.querySelector('#facebook');


// fab.addEventListener('click', function(){
//     fab.innerHTML = `<a href="http://facebook.com"></a>`
// })


btn.addEventListener('click', function (p) {
    p.preventDefault();
    form_two.style.display = "block"
})

close1.addEventListener('click', function (q) {
    q.preventDefault();
    form_two.style.display = "none"
})




main_form.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = this.querySelector('input[name="name"]');
    let gender = this.querySelector('input[name="gender"]:checked');
    let skill = this.querySelectorAll('input[name="skills"]:checked');
    let photo = this.querySelector('input[name="photo"]');


    let facebook = document.querySelector('input[name="facebook"]');
    let linkedin = document.querySelector('input[name="linkedin"]');
    let twitter = document.querySelector('input[name="twitter"]');


       

    

    let skill_arr = [];

    for (let i = 0; i < skill.length; i++) {
        skill_arr.push(skill[i].value);

    };

    let data_arr = '';

    if (getData('devs')) {
        data_arr = getData('devs');
    } else {
        data_arr = [];
    };

    data_arr.push({
        name1: name.value,
        gender1: gender.value,
        skills1: skill_arr,
        photo1: photo.value,
        facebook : facebook.value,
        linkedin : linkedin.value,
        twitter : twitter.value,
    });

    dataSend('devs', data_arr);

    devFunc();
});

devFunc();

function devFunc() {
    let all_devs = getData('devs');

    let data = '';
    all_devs.map((data1 => {

        let lists = '';

        data1.skills1.map(list => {
            lists += `<li class="list-group-item">${list}</li>`
        })


        data += `
    
    <div class="col-md-4 my-2">
    <div class="card shadow">
        <img style="width: 100%; height: 270px; object-fit: cover;"
            src="${data1.photo1}"
            alt="">
        <div class="card-body shop">

            <h2>${data1.name1}</h2>
            <p>Gender : ${data1.gender1}</p>
            Skill
            <hr>
            <ul class="list-group">
                ${lists}
            </ul>
           
            <span class="span1" style="cursor:pointer; width:43px;height:43px;background:black;display:block;border-radius:50%;text-align:center;position:absolute;line-height:44px;top:329px; left:261px;"><a href="${data1.facebook}" target="_blank"><i class="fab fa-facebook-f"></a></i></span>

            <span class="span1" style="cursor:pointer; width:43px;height:43px;background:black;display:block;border-radius:50%;text-align:center;position:absolute;line-height:44px;top: 375px; left:261px;"><a href="${data1.linkedin}" target="_blank"><i class="fab fa-linkedin"></a></i></span>
            
            <span class="span1" style="cursor:pointer; width:43px;height:43px;background:black;display:block;border-radius:50%;text-align:center;position:absolute;line-height:44px;top:284px; left:261px;"><a href="${data1.twitter}" target="_blank"><i class="fab fa-twitter"></a></i></span>
            

          
        </div>
    </div>
</div> 
    
    `;

    }))

    result.innerHTML = data;
   
}

//  team member end 
