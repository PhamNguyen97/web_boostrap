var menuIcon= document.getElementById("menu-icon");
menuIcon.addEventListener("click",function(){
	makeViTog("menu-content");
});

function makeViTog(targetId){
	var target = document.getElementById(targetId);
	if (target.style.display==="block")
		target.style.display="none";
	else
		target.style.display="block";
};
