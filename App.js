messages = document.getElementById('messages')
input = document.getElementById('input')
botblock = document.getElementById('botblock')
userblock = document.getElementById('userblock')

msgno = 0

dataitems = {
"provident fund":{amount:12000},
"maternity":{amount:3000},
"esi":{amount:6000},
"pension":{amount:50000},
"termination benefit":{amount:25000},
"gratuity":{amount:35000},
"bonus":{amount:35000},
"posh":{amount:15000},
}


function taketheinput(event) {
	

	if(event.key === "Enter"&&input.value!=""){
// create a user message block
		messages.innerHTML += userblock.outerHTML
		// and change its id
		msgno += 1
		messages.lastChild.id = msgno
		//changing its text
		messages.lastChild.childNodes[1].textContent = input.value
		// process the input 
		processinput(input.value.toLowerCase())
		input.value = ""

	}
	
}

function processinput(inputval){

	if(inputval!=""){
		messages.innerHTML += botblock.outerHTML
		// and change its id
		msgno += 1
		messages.lastChild.id = msgno
		//now changing its text
		messages.lastChild.childNodes[1].textContent = reply(inputval)	
	}

}



function reply(inputval) {
	result = inputval.match(/(how)|(\w+)/g)

	if(result.includes("how")){
		return "Good 😊"
	}
	if(result.includes("amount")){
		return recentproduct.amount
	}
	if(result.includes("hello")){
		return "Hi there"
	}
	
	a=null;
	result.forEach(function(data){
		if(dataitems.hasOwnProperty(data)){
			a = "What would you like to know about " + data+ " ?"
			recentproduct = dataitems[data]
		}
	})
	if(a){
		return a;
	}


	return "Sorry! I don't understand"
	
}


