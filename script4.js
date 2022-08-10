const result=document.getElementById('result')
const filter=document.getElementById('filter')

const listItems=[]

getData()

filter.addEventListener('input',(e)=>filterData(e.target.value)) //filterData we goona create function


 /////////////this is for fetching data from api/////////////////////////////
async function getData(){               
    const res=await fetch('https://randomuser.me/api?results=100')

    // const data=await res.json()
    const {results}=await res.json()
    // console.log(data)
    // console.log(results)

    //clear  result before we do anything
    // results.innerHTML='' it will show loading at upper
    result.innerHTML=''

    // data.results

    results.forEach(user=>{
        //construct thr li (list)
        const li=document.createElement('li')

        listItems.push(li)
        li.innerHTML=`
            <img src="${user.picture.large}"alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(li)
    })

}

///////////////////////////////////////////////////////////////////////////////////////////////
// console.log("hey Dhiraj hoe are you")


function filterData(searchTerm){
    // console.log(searchTerm)
    listItems.forEach(item=>{
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        }else{
            item.classList.add('hide')
        }
    })
}



