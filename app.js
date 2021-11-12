
const countrys =[];



fetch('https://coronavirus.m.pipedream.net/')
.then(data=>data.json())
.then(resp => countrys.push(...resp.rawData));




function findValue(userType, array){
    return array.filter(val=>{
        const regex = new RegExp(userType,'gi');
        return val.Country_Region.match(regex)
    })
}


function showResult(){
    const tableau = findValue(this.value, countrys)
    const tab = tableau.map(val=>{
        return `
        <div> 
        <span>${val.Country_Region} </span>
        <span>${val.Province_State} </span>
        <span>${val.Confirmed} </span>
        <span>${val.Deaths}</span>
        </div>
        <br>
        `
    });
    result.innerHTML = tab;

}

const input = document.getElementById('input')
const result = document.getElementById('ul')


input.addEventListener('change', showResult)
input.addEventListener('keyup', showResult)

