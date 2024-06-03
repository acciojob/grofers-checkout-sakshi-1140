const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices=document.querySelectorAll(".price");
	let totalPrice=0
	
	prices.forEach((item)=> totalPrice+=Number(item.textContent))
	// remove total 
	const total=document.getElementById("total")
    if(total) total.remove();
	//add total
	const table= document.querySelector("table")
	const row=document.createElement("tr")
    row.setAttribute("id", "total");
	row.innerHTML=`
	        <td class="item">Total</td>
	      <td class="prices" id="ans">${totalPrice}</td>
	      `
	   table.append(row)

  
};

getSumBtn.addEventListener("click", getSum);

       ==