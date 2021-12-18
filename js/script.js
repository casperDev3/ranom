function quote() {
	fetch('https://zerodott.herokuapp.com/getPhrase')
	.then((response) => {
		return response.json();
	})
	.then((data) => {
  	let quoteRandom = JSON.stringify(data[0].text);
  	document.getElementById('quotation').innerHTML = quoteRandom;
  })
	.catch(error =>{
		console.log(error);
	})
}


quote();
document.querySelector("button").addEventListener('click', quote)

$( document ).ready(function(){
	  $( ".button" ).click(function(){ 
	    $( ".block-generator" ).fadeOut(); 
	});
	  $( ".button" ).click(function(){ 
	    $( ".block-generator" ).fadeIn(2000); 
	});
	});

$( document ).ready(function(){
	  $( ".button" ).click(function(){
	      $( ".lds-ring" ).removeClass('active').delay(50).fadeOut(300) 
	  });
	   $( ".button" ).click(function(){
	      $( ".lds-ring" ).addClass('active').delay(50).fadeIn(300)
	  });
	    $( ".button" ).click(function(){ 
	      $( ".lds-ring" ).removeClass('active').delay(50).fadeOut(300) 
	  });
	});

