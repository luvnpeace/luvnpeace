function idChk(){
	var id = document.getElementById("join_id");
	var chk = document.getElementById("join_idchk");
	chk.innerText = "";
	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/todo/etc/id.php', true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send('id='+id.value);
	xhr.onload = () => {
		if(xhr.status == 200){
			var obj = xhr.response;
			if(obj < 1 && id.value != "" && id.value != null){
				chk.innerText = 'Usable ID.';
				chk.style.color = 'green';
				id.style.color = 'green';
			}else{
				chk.innerText = 'Unusable ID.';
				chk.style.color = 'red';
				id.style.color = 'red';
				id.focus();
			}
		}else{
			console.log('connection failed.');
		}
	}
}


function phoneChk(val){
	var phone = document.getElementById("join_phone");
	phone.value = val.replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-");
}


function phoneChk2(val){
	var phone = document.getElementById("find_phone");
	phone.value = val.replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-");
}


function phoneChk3(e){
	var phone = e.target;
	phone.value = phone.value.replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-");
}

function phoneChk4(val){
	var phone = document.getElementById("modi_phone");
	phone.value = val.replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-");
}


function joinChk(){
	var frm = document.getElementById("join_frm");
	var id = document.getElementById("join_id");
	var pw = document.getElementById("join_pw");
	var pw2 = document.getElementById("join_pw2");
	var name = document.getElementById("join_name");
	var email = document.getElementById("join_email");
	var pwreg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
	var emailreg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

	if(id.value == "" || id.value == null){
		alert('Input your ID.');
		id.focus();
		return false;
	}

	if(pw.value == "" || pw.value == null || !pwreg.test(pw.value)){
		alert('PW must be at least 8 characters and at least one letter, one number and one special character.');
		pw.value = "";
		pw.focus();
		return false;
	}

	if(pw2.value == "" || pw2.value == null || !pwreg.test(pw2.value)){
		alert('Confirm your PW correctly.');
		pw2.value = "";
		pw2.focus();
		return false;
	}

	if(pw.value != pw2.value){
		alert('PWs are mismatched.');
		pw.value = "";
		pw2.value = "";
		pw.focus();
		return false;
	}

	if(name.value == "" || name.value == null){
		alert('Input your Name.');
		name.focus();
		return false;
	}

	if(email.value == "" || email.value == null || !emailreg.test(email.value)){
		alert('Input your Email correctly.');
		email.value = "";
		email.focus();
		return false;
	}

	frm.action = "/todo/etc/join_p.php";
	frm.submit();
}


function loginChk(){
	var frm = document.getElementById("login_frm");
	var id = document.getElementById("login_id");
	var pw = document.getElementById("login_pw");
	var chk = document.getElementById("login_chk");

	if(id.value == "" || id.value == null){
		alert('Input your ID.');
		id.focus();
		return false;
	}

	if(pw.value == "" || pw.value == null){
		alert('Input your PW.');
		pw.focus();
		return false;
	}

	chk.innerText = "";
	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/todo/etc/login_c.php', true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send('id='+id.value+'&pw='+pw.value);
	xhr.onload = () => {
		if(xhr.status == 200){
			var obj = xhr.response;
			if(obj < 1){
				chk.innerText = 'Check your ID or PW.';
				chk.style.color = 'red';
				id.focus();
			}else{
				frm.action = "/todo/etc/login_p.php";
				frm.submit();
			}
		}else{
			console.log('connection failed.');
		}
	}
}


function enterkey(){
	if (window.event.keyCode == 13) {
		loginChk();	
	}
}


function goJoin(){
	location.href = "/todo/etc/join.php";
}


function goFind(){
	location.href = "/todo/etc/find.php";
}


function goBack(){
	location.href = "/todo/index.php";
}


function findPwOp(){
	var div = document.getElementsByClassName("input")[1].childNodes[1];
	var input = document.createElement("input");
	input.type = "text";
	input.setAttribute("id", "find_id");
	input.setAttribute("placeholder", "Input your ID");
	input.setAttribute("maxlength", "15");
	input.setAttribute("title", "ID");
	div.appendChild(input);

	var div = document.getElementsByClassName("input")[1].childNodes[3];
	var input = document.createElement("input");
	input.type = "text";
	input.setAttribute("id", "find_phone2");
	input.setAttribute("placeholder", "Input your Phone");
	input.setAttribute("title", "Phone");
	input.setAttribute("maxlength", "13");
	input.addEventListener('keyup', phoneChk3);
	div.appendChild(input);

	var div = document.getElementById("find_pw_btn");
	div.innerText = "";
	var btn = document.createElement("button");
	btn.type = "button";
	btn.setAttribute("onclick", "modiPwOp();");
	btn.innerText = "Find";
	div.appendChild(btn);
}


function modiPwOp(){
	var id = document.getElementById("find_id");
	var phone = document.getElementById("find_phone2");
	var chk = document.getElementById("find_pw_chk");
	chk.innerText = "";
	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/todo/etc/find_pw_c.php', true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send('id='+id.value+'&phone='+phone.value);
	xhr.onload = () => {
		if(xhr.status == 200){
			var obj = xhr.response;
			if(obj < 1){
				chk.innerText = 'Check your ID or Phone.';
				chk.style.color = 'red';
				id.focus();
			}else{
				var pw1 = document.getElementsByClassName("input")[1].childNodes[1];
				var pw2 = document.getElementsByClassName("input")[1].childNodes[3];
				pw1.innerText = "";
				pw2.innerText = "";
				var input1 = document.createElement("input");
				input1.type = "password";
				input1.setAttribute("id", "find_pw");
				input1.setAttribute("placeholder", "Input your PW");
				input1.setAttribute("maxlength", "15");
				input1.setAttribute("title", "PW");
				pw1.appendChild(input1);
				var input2 = document.createElement("input");
				input2.type = "password";
				input2.setAttribute("id", "find_pw2");
				input2.setAttribute("placeholder", "Confirm your PW");
				input2.setAttribute("maxlength", "15");
				input2.setAttribute("title", "PW");
				pw2.appendChild(input2);
				var div = document.getElementById("find_pw_btn");
				div.innerText = "";
				var btn = document.createElement("button");
				btn.type = "button";
				btn.setAttribute("onclick", "modiPwChk('"+id.value+"');");
				btn.innerText = "Modify";
				div.appendChild(btn);
			}
		}else{
			console.log('connection failed.');
		}
	}
}


function modiPwChk(id){
	var pw = document.getElementById("find_pw");
	var pw2 = document.getElementById("find_pw2");
	var div1 = document.getElementsByClassName("n_pw")[0];
	var div2 = document.getElementsByClassName("n_pw")[1];
	var pwreg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
	
	if(pw.value == "" || pw.value == null || !pwreg.test(pw.value)){
		alert('PW must be at least 8 characters and at least one letter, one number and one special character.');
		pw.value = "";
		pw.focus();
		return false;
	}

	if(pw2.value == "" || pw2.value == null || !pwreg.test(pw2.value)){
		alert('Confirm your PW correctly.');
		pw2.value = "";
		pw2.focus();
		return false;
	}

	if(pw.value != pw2.value){
		alert('PWs are mismatched.');
		pw.value = "";
		pw2.value = "";
		pw.focus();
		return false;
	}

	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/todo/etc/find_pw_p.php', true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send('id='+id+'&pw='+pw.value);
	xhr.onload = () => {
		if(xhr.status == 200){
			var obj = xhr.response;
			if(obj > 0){
				alert('PW modified.');
				div1.innerText = "";
				div2.innerText = "";
				findPwOp();
			}else{
				alert('Modifying failed.');
				pw.value = "";
				pw2.value = "";
				pw.focus();
			}
		}else{
			console.log('connection failed.');
		}
	}
}


function findIdChk(){
	var name = document.getElementById("find_name");
	var phone = document.getElementById("find_phone");
	var chk = document.getElementById("find_id_chk");
	chk.innerText = "";
	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/todo/etc/find_id_p.php', true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send('name='+name.value+'&phone='+phone.value);
	xhr.onload = () => {
		if(xhr.status == 200){
			var obj = xhr.response;
			if(obj == null || obj == ""){
				chk.innerText = 'Check your Name or Phone.';
				chk.style.color = 'red';
				name.focus();
			}else{
				chk.innerText = obj;
				chk.style.color = 'green';
			}
		}else{
			console.log('connection failed.');
		}
	}
}


function logoutChk(){
	location.href = "/todo/etc/logout_p.php";
}


function goMypage(){
	location.href = "/todo/etc/mypage.php";
}


function pwBoxOp(){
	var div1 = document.getElementById("modi_pw_box1");
	var div2 = document.getElementById("modi_pw_box2");
	div1.innerText = "";
	div2.innerText = "";
}


function pwBoxOp2(){
	var div1 = document.getElementById("modi_pw_box1");
	var div2 = document.getElementById("modi_pw_box2");
	div1.innerText = "";
	div2.innerText = "";
	var input1 = document.createElement("input");
	input1.type = "password";
	input1.setAttribute("id", "modi_pw");
	input1.setAttribute("class", "nec");
	input1.setAttribute("name", "modi_pw");
	input1.setAttribute("placeholder", "Input your PW");
	input1.setAttribute("maxlength", "15");
	input1.setAttribute("title", "PW");
	div1.appendChild(input1);
	var input2 = document.createElement("input");
	input2.type = "password";
	input2.setAttribute("id", "modi_pw2");
	input2.setAttribute("class", "nec");
	input2.setAttribute("placeholder", "Confirm your PW");
	input2.setAttribute("maxlength", "15");
	input2.setAttribute("title", "PW");
	div2.appendChild(input2);
}


function pwBoxChk(){
	var div1 = document.getElementById("modi_pw_box1");
	var div2 = document.getElementById("modi_pw_box2");
	div1.innerText = "";
	div2.innerText = "";
	var chk = document.getElementById("modi_pw_chk");
	if(chk.checked){
		chk.value = "n";
		pwBoxOp();
	}else{
		chk.value = "y";
		pwBoxOp2();
	}
}


function modiChk(){
	var frm = document.getElementById("modi_frm");
	var chk = document.getElementById("modi_pw_chk");
	var name = document.getElementById("modi_name");
	var phone = document.getElementById("modi_phone");
	var email = document.getElementById("modi_email");
	var pwreg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
	var emailreg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

	if(!chk.checked){
		chk.value = "y";
		var pw = document.getElementById("modi_pw");
		var pw2 = document.getElementById("modi_pw2");
		
		if(pw.value == "" || pw.value == null || !pwreg.test(pw.value)){
			alert('PW must be at least 8 characters and at least one letter, one number and one special character.');
			pw.value = "";
			pw.focus();
			return false;
		}

		if(pw2.value == "" || pw2.value == null || !pwreg.test(pw2.value)){
			alert('Confirm your PW correctly.');
			pw2.value = "";
			pw2.focus();
			return false;
		}

		if(pw.value != pw2.value){
			alert('PWs are mismatched.');
			pw.value = "";
			pw2.value = "";
			pw.focus();
			return false;
		}
	}else{
		chk.value = "n";
	}

	if(name.value == "" || name.value == null){
		alert('Input your Name.');
		name.focus();
		return false;
	}

	if(email.value == "" || email.value == null || !emailreg.test(email.value)){
		alert('Input your Email correctly.');
		email.value = "";
		email.focus();
		return false;
	}

	frm.action = "/todo/etc/modi_p.php";
	frm.submit();
}