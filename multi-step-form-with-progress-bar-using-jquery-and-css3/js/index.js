
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})

var signature = document.createElement("div");
var compname = document.createElement("strong");
var title = document.createElement("p");
var branch = document.createElement("p");

compname.innerHTML = "Versacor Enterprises, LLC";
signature.setAttribute('style','font-family: calibri;');
signature.setAttribute('align','left');

function hello(){
	var name = document.createElement("strong");
	var phone = document.createElement("p");
	var pline;
	name.innerHTML = document.getElementsByName("email")[0].value;
	title.innerHTML = document.getElementsByName("title")[0].value;

	var temp = document.getElementsByName("branch")[0].value;

	if(temp == "Home Office"){ //could have been a switch case I know
		branch.innerHTML = "485 Cherry Lane | Southlake, TX 76092";
		pline = "T: 817-310-3525 | ";
		var cellnum =document.getElementById("cellbox");
		if(title.innerHTML == "Service Manager" || title.innerHTML == "Service Specialist" ){
			cellnum.setAttribute('style','display:none;');
		}
		else{
			cellnum.setAttribute('style','display:block;');
		}
	}
	else if(temp == "Dallas"){
		branch.innerHTML = "485 Cherry Lane | Southlake, TX 76092";
		pline = "T: 817-310-3525 | ";
	}
	else if(temp == "Fort Worth"){
		branch.innerHTML = "485 Cherry Lane | Southlake, TX 76092";
		pline = "T: 817-310-3525 | ";
	}
	else if(temp == "San Antonio"){
		branch.innerHTML = "2437 Boardwalk Street | San Antonio, TX 78217";
		pline = "T: 210-305-1258 | ";
	}
	else if(temp == "Wichita Falls"){
		branch.innerHTML = "485 Cherry Lane | Southlake, TX 76092";
		pline = "T: 940-696-8222 | ";
	}
	else if(temp == "Houston"){
		branch.innerHTML = "5635 NW Central Drive, Ste E-106 | Houston TX 77092";
		pline = "T: 832-247-7670 | ";
	}


	console.log(name);
	console.log(title);
	console.log(branch);

	signature.appendChild(name);
	signature.appendChild(title);
	signature.appendChild(compname);
	signature.appendChild(branch);
	document.getElementById("sig under").appendChild(signature);


}






