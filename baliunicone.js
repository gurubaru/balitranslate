	function change(){
		var textarea = document.getElementById('textarea1');
		textarea.scrollTop = textarea.scrollHeight;		
	}
	
	function fun(value){
		 keyboard.display.value += value;			 			 
	}
	
	var c = 0;
	var f = 0;
	var a = 0;
	
			
	function caps(){
			f= f+1;
			if (f<2){
				document.getElementById('capslk').style.backgroundColor="white" ;

				
				document.getElementById('ᬳ').value="᭄ᬳ" //ha//
				document.getElementById('ᬦ').value="᭄ᬦ" //na//
				document.getElementById('ᬘ').value="᭄ᬘ" //ca//
				document.getElementById('ᬭ').value="᭄ᬭ" //ra//
				document.getElementById('ᬓ').value="᭄ᬓ" //ka//
				document.getElementById('ᬤ').value="᭄ᬤ" //da//
				document.getElementById('ᬢ').value="᭄ᬢ" //ta//
				document.getElementById('ᬲ').value="᭄ᬲ" //sa//
				document.getElementById('ᬯ').value="᭄ᬯ" //wa//
				document.getElementById('ᬮ').value="᭄ᬮ" //la//
				document.getElementById('ᬫ').value="᭄ᬫ" //ma//
				document.getElementById('ᬕ').value="᭄ᬕ" //ga//
				document.getElementById('ᬩ').value="᭄ᬩ" //ba//
				document.getElementById('ᬗ').value="᭄ᬗ" //nga//
				document.getElementById('ᬧ').value="᭄ᬧ" //pa//
				document.getElementById('ᬚ').value="᭄ᬚ" //ja//
				document.getElementById('ᬬ').value="᭄ᬬ" //ya//
				document.getElementById('ᬜ').value="᭄ᬜ" //nya//
				document.getElementById('ᬔ').value="᭄ᬔ" //kha//
				document.getElementById('ᬖ').value="᭄ᬖ" //gha//
				document.getElementById('ᬝ').value="᭄ᬝ" //telatik//
				document.getElementById('ᬰ').value="᭄ᬰ" //sesaga//
				document.getElementById('ᬱ').value="᭄ᬱ" //sesapa//
				document.getElementById('ᬡ').value="᭄ᬡ" //narambat//
				document.getElementById('ᬥ').value="᭄ᬥ" //dha//
				document.getElementById('ᬣ').value="᭄ᬣ" //tatawa//
				document.getElementById('ᬪ').value="᭄ᬪ" //bha//
				document.getElementById('᭞').value="᭝"//titik dua//
				document.getElementById('ᬙ').value="᭄ᬙ" //claca//
				document.getElementById('ᬋ').value="ᬺ" //rerepa
				document.getElementById('᭟').value="᭛" //mangajapa//
				document.getElementById('ᬵ').value="ᬒᬁ" //ongkara//
				document.getElementById('ᬸ').value="ᬹ" //suku ilut//
				document.getElementById('ᬾ').value="ᬿ" //taleng merepa//
				document.getElementById('ᬶ').value="᭚" //pemada//
				document.getElementById('ᬛ').value="᭄ᬛ" //airsanya//
				document.getElementById('').value=""
            }else{
            	document.getElementById('capslk').style.backgroundColor="buttonface" ;
				document.getElementById('ᬳ').value="ᬳ"
				document.getElementById('ᬦ').value="ᬦ"
				document.getElementById('ᬘ').value="ᬘ"
				document.getElementById('ᬭ').value="ᬭ"
				document.getElementById('ᬓ').value="ᬓ"
				document.getElementById('ᬤ').value="ᬤ"
				document.getElementById('ᬢ').value="ᬢ"
				document.getElementById('ᬲ').value="ᬲ"
				document.getElementById('ᬯ').value="ᬯ"
				document.getElementById('ᬮ').value="ᬮ"
				document.getElementById('ᬫ').value="ᬫ"
				document.getElementById('ᬕ').value="ᬕ"
				document.getElementById('ᬩ').value="ᬩ"
				document.getElementById('ᬗ').value="ᬗ"
				document.getElementById('ᬧ').value="ᬧ"
				document.getElementById('ᬚ').value="ᬚ"
				document.getElementById('ᬬ').value="ᬬ"
				document.getElementById('ᬜ').value="ᬜ"
				document.getElementById('ᬔ').value="ᬔ"
				document.getElementById('ᬖ').value="ᬖ"
				document.getElementById('ᬝ').value="ᬝ"
				document.getElementById('ᬰ').value="ᬰ"
				document.getElementById('ᬱ').value="ᬱ"
				document.getElementById('ᬡ').value="ᬡ"
				document.getElementById('ᬥ').value="ᬥ"
				document.getElementById('ᬣ').value="ᬣ"
				document.getElementById('ᬪ').value="ᬪ"
				document.getElementById('᭞').value="᭞"
				document.getElementById('ᬙ').value="ᬙ"
				document.getElementById('ᬋ').value="ᬋ" //rerepa
				document.getElementById('᭟').value="᭟" //mangajapa//
				document.getElementById('ᬵ').value="ᬵ" //ongkara//
				document.getElementById('ᬸ').value="ᬸ" //suku ilut//
				document.getElementById('ᬾ').value="ᬾ" //taleng merepa//
				document.getElementById('ᬶ').value="ᬶ" //pemada//
				document.getElementById('ᬛ').value="ᬛ" //airsanya//
				f=0
				
			};}