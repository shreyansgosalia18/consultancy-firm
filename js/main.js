$(function(){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Back Step',
            next : 'Next Step',
            finish : 'Submit',
            current : ''
        },
    });
    $("#date").datepicker({
        dateFormat: "MM - DD - yy",
        showOn: "both",
        buttonText : '<i class="zmdi zmdi-chevron-down"></i>',
    });
});

function sendUserData(){

	let finalData = {
		fname: document.getElementById("fname").value,
		lname: document.getElementById("lname").value,
		email: document.getElementById("email").value,
		phone : document.getElementById("phone").value,
		address : document.getElementById("address").value,
		currentdegree : document.getElementById("currentdegree").value,
		currentyear : document.getElementById("currentyear").value,
		branch : document.getElementById("branch").value,
		college : document.getElementById("college").value,
		interestedLanguage: {
			java : document.getElementById("Java Programming").checked,
			javascript : document.getElementById("JavaScript Programing").checked,
			html5 : document.getElementById("HTML 5").checked,
			css3 : document.getElementById("CSS 3").checked,
			bootstrap : document.getElementById("Bootstrap").checked,
			webdesign : document.getElementById("Web Design").checked,
			graphicdesign : document.getElementById("Graphic Design").checked,
		},
		liveprojects : document.getElementById("liveproject").value,
		careergoal : document.getElementById("careergoal").value,
		efforts : document.getElementById("efforts").checked,
		keenlearner : document.getElementById("keenlearner").checked,
		resume : document.getElementById("cv").value,
	}
	console.log(finalData)
	alert(finalData)
}