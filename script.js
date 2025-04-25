function highlight() {
	let strong=document.querySelectorAll("strong")
	strong.forEach(word=>{
		word.style.color="rgb(0,128,0)"
	})

}


function return_normal() {
	let strong=document.querySelectorAll("strong")
		strong.forEach(word=>{
			word.style.color="rgb(0,0,0)"
		})
    
}
