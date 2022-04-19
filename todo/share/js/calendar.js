var today = new Date();
var nowyear = "";
var nowmonth = "";

var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var leapdates = ['31','29','31','30','31','30','31','31','30','31','30','31'];
var dates = [];

var c_content = document.getElementsByClassName("c_content")[0];
var c_year_list = document.getElementsByClassName("c_year_list")[0];
var c_month_list = document.getElementsByClassName("c_month_list")[0];

var table = document.createElement("table");
var thead = document.createElement("thead");
table.appendChild(thead);
var thr = document.createElement("tr");
thead.appendChild(thr);
var thd = document.createElement("td");
thd.innerText = "Sun";
thr.appendChild(thd);
var thd = document.createElement("td");
thd.innerText = "Mon";
thr.appendChild(thd);
var thd = document.createElement("td");
thd.innerText = "Tue";
thr.appendChild(thd);
var thd = document.createElement("td");
thd.innerText = "Wed";
thr.appendChild(thd);
var thd = document.createElement("td");
thd.innerText = "Thu";
thr.appendChild(thd);
var thd = document.createElement("td");
thd.innerText = "Fri";
thr.appendChild(thd);
var thd = document.createElement("td");
thd.innerText = "Sat";
thr.appendChild(thd);
var tbody = document.createElement("tbody");
table.appendChild(tbody);
c_content.appendChild(table);


function timeChk(e){
	var t = e.target;
	var val = t.value;
	t.value = val.replace(/[^0-9]/g, "").replace(/([0-9]{2})([0-9]{2})$/,"$1:$2");
}


function checkSchedule(e){
	var t = e.target;
	var s_idx = t.getAttribute("value").split(":")[0];
	var ttime = t.getAttribute("value").split(":")[1];
	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/todo/main/schedule_d_c.php', true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send('s_idx='+s_idx);
	xhr.onload = () => {
		if(xhr.status == 200){
			var obj = xhr.response;
			if(obj > 0){
				dailyOp(ttime);
			}else{
				alert('Checking schedule failed.');
				return false;
			}
		}else{
			console.log('connection failed.');
		}
	}
}


function modiScheduleChk(e){
	var t = e.target;
	var s_idx = t.getAttribute("value").split(":")[0];
	var ttime = t.getAttribute("value").split(":")[1];

	var stime = t.parentElement.parentElement.childNodes[1].childNodes[0];
	var etime = t.parentElement.parentElement.childNodes[1].childNodes[1];
	var chtime = /^([01][0-9]|2[0-3]):([0-5][0-9])$/;
	var content = t.parentElement.parentElement.childNodes[2].childNodes[0];

	var snumber = parseInt(stime.value.replace(":", ""));
	var enumber = parseInt(etime.value.replace(":", ""));
	
	if((snumber > enumber) || stime.value == "" || etime.value == "" || !chtime.test(stime.value) || !chtime.test(etime.value)){
		alert("Input schedule time correctly.");
		stime.value = "";
		etime.value = "";
		stime.focus();
		return false;
	}

	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/todo/main/schedule_d_m.php', true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send('s_idx='+s_idx+'&stime='+stime.value+'&etime='+etime.value+'&content='+content.value);
	xhr.onload = () => {
		if(xhr.status == 200){
			var obj = xhr.response;
			if(obj > 0){
				dailyOp(ttime);
			}else{
				alert('Modifying schedule failed.');
				return false;
			}
		}else{
			console.log('connection failed.');
		}
	}
}


function modiSchedule(e){
	var t = e.target;
	var s_idx = t.getAttribute("value").split(":")[0];
	var ttime = t.getAttribute("value").split(":")[1];
	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/todo/main/schedule_d.php', true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send('s_idx='+s_idx);
	xhr.onload = () => {
		if(xhr.status == 200){
			var obj = JSON.parse(xhr.response);
			var div = document.getElementsByClassName("de_add")[0];
			div.innerText = "";
			var helper = document.createElement("div");
			helper.setAttribute("class", "add_helper");
			div.appendChild(helper);
			var time = document.createElement("div");
			time.setAttribute("class", "add_time");
			var input = document.createElement("input");
			input.type = "text";
			input.setAttribute("name", "stime");
			input.setAttribute("placeholder", "00:00");
			input.setAttribute("maxlength", "5");
			input.setAttribute("title", "Start time");
			input.value = obj.s_stime;
			input.addEventListener('keyup', timeChk);
			time.appendChild(input);
			var input = document.createElement("input");
			input.type = "text";
			input.setAttribute("name", "etime");
			input.setAttribute("placeholder", "23:59");
			input.setAttribute("maxlength", "5");
			input.setAttribute("title", "End time");
			input.value = obj.s_etime;
			input.addEventListener('keyup', timeChk);
			time.appendChild(input);
			div.appendChild(time);
			var schedule = document.createElement("div");
			schedule.setAttribute("class", "add_schedule");
			var input = document.createElement("input");
			input.type = "text";
			input.setAttribute("name", "content");
			input.setAttribute("placeholder", "Input your schedule");
			input.setAttribute("maxlength", "100");
			input.setAttribute("title", "Schedule");
			input.value = obj.content;
			schedule.appendChild(input);
			div.appendChild(schedule);
			var control = document.createElement("div");
			control.setAttribute("class", "add_control");
			var button = document.createElement("button");
			button.innerText = "modi";
			button.value = t.getAttribute("value");
			button.addEventListener('click', modiScheduleChk);
			control.appendChild(button);
			var button = document.createElement("button");
			button.innerText = "back";
			button.value = ttime;
			button.setAttribute("onclick", "dailyOp("+ttime+");");
			control.appendChild(button);
			div.appendChild(control);
			
		}else{
			console.log('connection failed.');
		}
	}
	
}


function delSchedule(e){
	var t = e.target;
	var s_idx = t.getAttribute("value").split(":")[0];
	var ttime = t.getAttribute("value").split(":")[1];
	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/todo/main/schedule_d_d.php', true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send('s_idx='+s_idx);
	xhr.onload = () => {
		if(xhr.status == 200){
			var obj = xhr.response;
			if(obj > 0){
				dailyOp(ttime);
			}else{
				alert('Deleting schedule failed.');
				return false;
			}
		}else{
			console.log('connection failed.');
		}
	}
}


function addDScehduleChk(e){
	var t = e.target;
	var ttime = t.value;
	var stime = t.parentElement.parentElement.childNodes[1].childNodes[0];
	var etime = t.parentElement.parentElement.childNodes[1].childNodes[1];
	var chtime = /^([01][0-9]|2[0-3]):([0-5][0-9])$/;
	var content = t.parentElement.parentElement.childNodes[2].childNodes[0];

	var snumber = parseInt(stime.value.replace(":", ""));
	var enumber = parseInt(etime.value.replace(":", ""));
	
	if((snumber > enumber) || stime.value == "" || etime.value == "" || !chtime.test(stime.value) || !chtime.test(etime.value)){
		alert("Input schedule time correctly.");
		stime.value = "";
		etime.value = "";
		stime.focus();
		return false;
	}

	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/todo/main/schedule_d_p.php', true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send('tdate='+ttime+'&stime='+stime.value+'&etime='+etime.value+'&content='+content.value);
	xhr.onload = () => {
		if(xhr.status == 200){
			var obj = xhr.response;
			if(obj > 0){
				dailyOp(ttime);
			}else{
				alert('Adding schedule failed.');
				return false;
			}
		}else{
			console.log('connection failed.');
		}
	}
}


function addDSchedule(e){
	var t = e.target;
	var ttime = t.value;

	var div = t.parentElement;
	div.innerText = "";
	var helper = document.createElement("div");
	helper.setAttribute("class", "add_helper");
	div.appendChild(helper);
	var time = document.createElement("div");
	time.setAttribute("class", "add_time");
	var input = document.createElement("input");
	input.type = "text";
	input.setAttribute("name", "stime");
	input.setAttribute("placeholder", "00:00");
	input.setAttribute("maxlength", "5");
	input.setAttribute("title", "Start time");
	input.addEventListener('keyup', timeChk);
	time.appendChild(input);
	var input = document.createElement("input");
	input.type = "text";
	input.setAttribute("name", "etime");
	input.setAttribute("placeholder", "23:59");
	input.setAttribute("maxlength", "5");
	input.setAttribute("title", "End time");
	input.addEventListener('keyup', timeChk);
	time.appendChild(input);
	div.appendChild(time);
	var schedule = document.createElement("div");
	schedule.setAttribute("class", "add_schedule");
	var input = document.createElement("input");
	input.type = "text";
	input.setAttribute("name", "content");
	input.setAttribute("placeholder", "Input your schedule");
	input.setAttribute("maxlength", "100");
	input.setAttribute("title", "Schedule");
	schedule.appendChild(input);
	div.appendChild(schedule);
	var control = document.createElement("div");
	control.setAttribute("class", "add_control");
	var button = document.createElement("button");
	button.innerText = "save";
	button.value = ttime;
	button.addEventListener('click', addDScehduleChk);
	control.appendChild(button);
	var button = document.createElement("button");
	button.innerText = "back";
	button.value = ttime;
	button.setAttribute("onclick", "dailyOp("+ttime+");");
	control.appendChild(button);
	div.appendChild(control);
}


function dailyOp(ttime){
	var year = new Date(ttime * 1000).getFullYear();
	var month = new Date(ttime * 1000).getMonth() + 1;
	var date = new Date(ttime * 1000).getDate();
	var ttime = ttime;

	var sch = document.getElementsByClassName("schedule")[0];
	sch.innerText = "";

	var box= document.createElement("div");
	box.setAttribute("class", "s_box");
	sch.appendChild(box);

	var de_title = document.createElement("div");
	de_title.setAttribute("class", "de_title");
	de_title.innerText = year + " / " + month + " / " + date;
	box.appendChild(de_title);

	var de_content = document.createElement("div");
	de_content.setAttribute("class", "de_content");
	box.appendChild(de_content);

	var de_head = document.createElement("div");
	de_head.setAttribute("class", "de_head");
	de_content.appendChild(de_head);
	var de_head_helper = document.createElement("div");
	de_head.appendChild(de_head_helper);
	var de_head1 = document.createElement("div");
	de_head1.innerText = "Time";
	de_head.appendChild(de_head1);
	var de_head2 = document.createElement("div");
	de_head2.innerText = "Schedule";
	de_head.appendChild(de_head2);
	var de_head3 = document.createElement("div");
	de_head3.innerText = "Control";
	de_head.appendChild(de_head3);

	var de_body = document.createElement("div");
	de_body.setAttribute("class", "de_body");
	de_content.appendChild(de_body);
	
	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/todo/main/schedule_d_l.php', true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send('date='+ttime);
	xhr.onload = () => {
		if(xhr.status == 200){
			var obj = JSON.parse(xhr.response);
			for(var o of obj){
				var row = document.createElement("div");
				de_body.appendChild(row);
				var row_helper = document.createElement("div");
				row.appendChild(row_helper);
				var row_stime = document.createElement("div");
				row_stime.innerText = o.s_stime;
				row.appendChild(row_stime);
				var row_etime = document.createElement("div");
				row_etime.innerText = o.s_etime;
				row.appendChild(row_etime);
				var row2 = document.createElement("div");
				row2.innerText = o.content;
				if(o.success == "y"){
					row2.setAttribute("class", "success");
				}
				row.appendChild(row2);
				var row3 = document.createElement("div");
				var row3_helper = document.createElement("div");
				row3.appendChild(row3_helper);
				var check = document.createElement("div");
				check.setAttribute("value", o.s_idx+":"+ttime);
				check.addEventListener('click', checkSchedule);
				row3.appendChild(check);
				var modi = document.createElement("div");
				modi.addEventListener('click', modiSchedule);
				modi.setAttribute("value", o.s_idx+":"+ttime);
				row3.appendChild(modi);
				var del = document.createElement("div");
				del.addEventListener('click', delSchedule);
				del.setAttribute("value",  o.s_idx+":"+ttime);
				row3.appendChild(del);
				row.appendChild(row3);
				de_body.appendChild(row);
			}
		}else{
			console.log('connection failed.');
		}
	}

	var de_add = document.createElement("div");
	de_add.setAttribute("class", "de_add");
	de_content.appendChild(de_add);
	var de_addbtn = document.createElement("button");
	de_addbtn.innerText = "Add";
	de_addbtn.value = ttime;
	de_addbtn.addEventListener('click', addDSchedule);
	de_add.appendChild(de_addbtn);
}


function getCDate(e){
	var t = e.target;
	var tyear = t.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[5].childNodes[1].value;
	var tmonth = parseInt(t.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[7].childNodes[1].value);
	tmonth = (tmonth - 1).toString();
	var tdate = t.innerText;
	var ttime = parseInt((new Date(tyear, tmonth, tdate).getTime() / 1000).toFixed(0));
	t.value = ttime;
	t.removeEventListener('click', getCDate);
	t.addEventListener('click', cancelCDate);
	
	var dates = document.getElementsByTagName("td");
	for(var d of dates){
		if(d.getAttribute("class") != null){
			if(d.getAttribute("class").indexOf("on") != -1 && d.getAttribute("class").indexOf("active") == -1){
				d.removeAttribute("class");
				d.setAttribute("class", "off");
			}else if(d.getAttribute("class").indexOf("on") != -1 && d.getAttribute("class").indexOf("active") != -1){
				d.removeAttribute("class");
				d.setAttribute("class", "off active");
			}
		}
	}

	if(t.getAttribute("class").indexOf("off") != -1 && t.getAttribute("class").indexOf("active") == -1){
		t.removeAttribute("class");
		t.setAttribute("class", "on");
	}else if(t.getAttribute("class").indexOf("off") != -1 && t.getAttribute("class").indexOf("active") != -1){
		t.removeAttribute("class");
		t.setAttribute("class", "on active");
	}

	dailyOp(ttime);
}


function cancelCDate(e){
	var t = e.target;
	t.removeEventListener('click', cancelCDate);
	t.addEventListener('click', getCDate);
	if(t.getAttribute("class").indexOf("on") != -1 && t.getAttribute("class").indexOf("active") == -1){
		t.removeAttribute("class");
		t.setAttribute("class", "off");
	}else if(t.getAttribute("class").indexOf("on") != -1 && t.getAttribute("class").indexOf("active") != -1){
		t.removeAttribute("class");
		t.setAttribute("class", "off active");
	}
}


function calendarOp(){
	tbody.innerText = "";
	nowyear = today.getFullYear();
	nowmonth = today.getMonth();
	c_year_list.innerText = "";
	c_month_list.innerText = "";
	if(nowyear % 4 == 0){
		dates = ['31','29','31','30','31','30','31','31','30','31','30','31'];
	}else{
		dates = ['31','28','31','30','31','30','31','31','30','31','30','31'];
	}
	for(var g=0; g<11; g++){
		var year_opt = document.createElement("option");
		year_opt.value = nowyear + 5 - g;
		year_opt.innerText = nowyear + 5 - g;
		if(year_opt.value == nowyear){
			year_opt.setAttribute("selected", "selected");
		}
		c_year_list.appendChild(year_opt);
	}
	for(var h=0; h<12; h++){
		var month_opt = document.createElement("option");
		month_opt.value = 12 - h;
		month_opt.innerText = 12 - h;
		if(month_opt.value == nowmonth + 1){
			month_opt.setAttribute("selected", "selected");
		}
		c_month_list.appendChild(month_opt);
	}
	var first = new Date(nowyear, nowmonth, 1);
	var firstday = first.getDay();
	var lastdate = parseInt(dates[nowmonth]);
	var last = new Date(nowyear, nowmonth, lastdate);
	var lastday = last.getDay();
	var lastweek = 5;
	var date = 1;

	for(var i=0; i<6; i++){
		if(date > lastdate){
			lastweek = i;
			break;	
		}
		var tr = document.createElement("tr");
		tbody.appendChild(tr);

		for(var j=0; j<7; j++){
			var td = document.createElement("td");
			if((i==0 && j<firstday) || (i==lastweek && j>lastday)){			
				td.innerText = "";				
			}else{
				td.innerText = date;
				td.addEventListener('click', getCDate);
				if((date == today.getDate()) && (nowmonth == today.getMonth()) && (nowyear == today.getFullYear())){
					td.removeAttribute("class");
					td.setAttribute("class", "off active");
				}else{
					td.setAttribute("class", "off");
				}
				date = date + 1;
			}
			tr.appendChild(td);
			if(date > lastdate){
				lastweek = i;
			}
		}
	}

	var ttime = parseInt((new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime() / 1000).toFixed(0));
	dailyOp(ttime);
}


function goLeft(){
	tbody.innerText = "";
	nowyear = parseInt(document.getElementsByClassName("c_year_list")[0].value);
	nowmonth = parseInt(document.getElementsByClassName("c_month_list")[0].value) - 1;
	c_year_list.innerText = "";
	c_month_list.innerText = "";
	if(nowyear % 4 == 0){
		dates = ['31','29','31','30','31','30','31','31','30','31','30','31'];
	}else{
		dates = ['31','28','31','30','31','30','31','31','30','31','30','31'];
	}
	if(nowmonth == 0){
		var left_year = nowyear - 1;
		var left_month = 11;
		var lastdate = 31;
	}else{
		var left_year = nowyear;
		var left_month = nowmonth - 1;
		var lastdate = parseInt(dates[nowmonth - 1]);
	}
	for(var g=0; g<11; g++){
		var year_opt = document.createElement("option");
		year_opt.value = left_year + 5 - g;
		year_opt.innerText = left_year + 5 - g;
		if(year_opt.value == left_year){
			year_opt.setAttribute("selected", "selected");
		}
		c_year_list.appendChild(year_opt);
	}
	for(var h=0; h<12; h++){
		var month_opt = document.createElement("option");
		month_opt.value = 12 - h;
		month_opt.innerText = 12 - h;
		if(month_opt.value == left_month + 1){
			month_opt.setAttribute("selected", "selected");
		}
		c_month_list.appendChild(month_opt);
	}
	var first = new Date(left_year, left_month, 1);
	var firstday = first.getDay();
	var last = new Date(left_year, left_month, lastdate);
	var lastday = last.getDay();
	var lastweek = 5;
	var date = 1;

	for(var i=0; i<6; i++){
		if(date > lastdate){
			lastweek = i;
			break;	
		}
		var tr = document.createElement("tr");
		tbody.appendChild(tr);

		for(var j=0; j<7; j++){
			var td = document.createElement("td");
			if((i==0 && j<firstday) || (i==lastweek && j>lastday)){			
				td.innerText = "";				
			}else{
				td.innerText = date;
				td.addEventListener('click', getCDate);
				if((date == today.getDate()) && (left_month == today.getMonth()) && (left_year == today.getFullYear())){
					td.removeAttribute("class");
					td.setAttribute("class", "off active");
				}else if(((date == today.getDate()) && (left_month == today.getMonth()) && (left_year == today.getFullYear())) && date == 1){
					td.removeAttribute("class");
					td.setAttribute("class", "on active");
					td.removeEventListener('click', getCDate);
					td.addEventListener('click', cancelCDate);
				}else if(!((left_month == today.getMonth()) && (left_year == today.getFullYear())) && date == 1){
					td.removeAttribute("class");
					td.setAttribute("class", "on");
					td.removeEventListener('click', getCDate);
					td.addEventListener('click', cancelCDate);
				}else{
					td.setAttribute("class", "off");
				}
				date = date + 1;
			}
			tr.appendChild(td);
			if(date > lastdate){
				lastweek = i;
			}
		}
	}

	if((left_month == today.getMonth()) && (left_year == today.getFullYear())){
		var ttime = parseInt((new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime() / 1000).toFixed(0));
	}else{
		var ttime = parseInt((first.getTime() / 1000).toFixed(0));
	}
	dailyOp(ttime);
}


function goRight(){
	tbody.innerText = "";
	nowyear = parseInt(document.getElementsByClassName("c_year_list")[0].value);
	nowmonth = parseInt(document.getElementsByClassName("c_month_list")[0].value) - 1;
	c_year_list.innerText = "";
	c_month_list.innerText = "";
	if(nowyear % 4 == 0){
		dates = ['31','29','31','30','31','30','31','31','30','31','30','31'];
	}else{
		dates = ['31','28','31','30','31','30','31','31','30','31','30','31'];
	}
	if(nowmonth == 11){
		var right_year = nowyear + 1;
		var right_month = 0;
		var lastdate = 31;
	}else{
		var right_year = nowyear;
		var right_month = nowmonth + 1;
		var lastdate = parseInt(dates[nowmonth + 1]);
	}
	for(var g=0; g<11; g++){
		var year_opt = document.createElement("option");
		year_opt.value = right_year + 5 - g;
		year_opt.innerText = right_year + 5 - g;
		if(year_opt.value == right_year){
			year_opt.setAttribute("selected", "selected");
		}
		c_year_list.appendChild(year_opt);
	}
	for(var h=0; h<12; h++){
		var month_opt = document.createElement("option");
		month_opt.value = 12 - h;
		month_opt.innerText = 12 - h;
		if(month_opt.value == right_month + 1){
			month_opt.setAttribute("selected", "selected");
		}
		c_month_list.appendChild(month_opt);
	}
	var first = new Date(right_year, right_month, 1);
	var firstday = first.getDay();
	var last = new Date(right_year, right_month, lastdate);
	var lastday = last.getDay();
	var lastweek = 5;
	var date = 1;

	for(var i=0; i<6; i++){
		if(date > lastdate){
			lastweek = i;
			break;	
		}
		var tr = document.createElement("tr");
		tbody.appendChild(tr);

		for(var j=0; j<7; j++){
			var td = document.createElement("td");
			if((i==0 && j<firstday) || (i==lastweek && j>lastday)){			
				td.innerText = "";				
			}else{
				td.innerText = date;
				td.addEventListener('click', getCDate);
				if((date == today.getDate()) && (right_month == today.getMonth()) && (right_year == today.getFullYear())){
					td.removeAttribute("class");
					td.setAttribute("class", "off active");
				}else if(((date == today.getDate()) && (right_month == today.getMonth()) && (right_year == today.getFullYear())) && date == 1){
					td.removeAttribute("class");
					td.setAttribute("class", "on active");
					td.removeEventListener('click', getCDate);
					td.addEventListener('click', cancelCDate);
				}else if(!((right_month == today.getMonth()) && (right_year == today.getFullYear())) && date == 1){
					td.removeAttribute("class");
					td.setAttribute("class", "on");
					td.removeEventListener('click', getCDate);
					td.addEventListener('click', cancelCDate);
				}else{
					td.setAttribute("class", "off");
				}
				date = date + 1;
			}
			tr.appendChild(td);
			if(date > lastdate){
				lastweek = i;
			}
		}
	}
	
	if((right_month == today.getMonth()) && (right_year == today.getFullYear())){
		var ttime = parseInt((new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime() / 1000).toFixed(0));
	}else{
		var ttime = parseInt((first.getTime() / 1000).toFixed(0));
	}
	dailyOp(ttime);
}


function goYM(){
	tbody.innerText = "";
	nowyear = parseInt(document.getElementsByClassName("c_year_list")[0].value);
	nowmonth = parseInt(document.getElementsByClassName("c_month_list")[0].value) - 1;
	c_year_list.innerText = "";
	c_month_list.innerText = "";
	if(nowyear % 4 == 0){
		dates = ['31','29','31','30','31','30','31','31','30','31','30','31'];
	}else{
		dates = ['31','28','31','30','31','30','31','31','30','31','30','31'];
	}
	for(var g=0; g<11; g++){
		var year_opt = document.createElement("option");
		year_opt.value = nowyear + 5 - g;
		year_opt.innerText = nowyear + 5 - g;
		if(year_opt.value == nowyear){
			year_opt.setAttribute("selected", "selected");
		}
		c_year_list.appendChild(year_opt);
	}
	for(var h=0; h<12; h++){
		var month_opt = document.createElement("option");
		month_opt.value = 12 - h;
		month_opt.innerText = 12 - h;
		if(month_opt.value == nowmonth + 1){
			month_opt.setAttribute("selected", "selected");
		}
		c_month_list.appendChild(month_opt);
	}
	var first = new Date(nowyear, nowmonth, 1);
	var firstday = first.getDay();
	var lastdate = parseInt(dates[nowmonth]);
	var last = new Date(nowyear, nowmonth, lastdate);
	var lastday = last.getDay();
	var lastweek = 5;
	var date = 1;

	for(var i=0; i<6; i++){
		if(date > lastdate){
			lastweek = i;
			break;	
		}
		var tr = document.createElement("tr");
		tbody.appendChild(tr);

		for(var j=0; j<7; j++){
			var td = document.createElement("td");
			if((i==0 && j<firstday) || (i==lastweek && j>lastday)){			
				td.innerText = "";				
			}else{
				td.innerText = date;
				td.addEventListener('click', getCDate);
				if((date == today.getDate()) && (nowmonth == today.getMonth()) && (nowyear == today.getFullYear())){
					td.removeAttribute("class");
					td.setAttribute("class", "off active");
				}else if(((date == today.getDate()) && (nowmonth == today.getMonth()) && (nowyear == today.getFullYear())) && date == 1){
					td.removeAttribute("class");
					td.setAttribute("class", "on active");
					td.removeEventListener('click', getCDate);
					td.addEventListener('click', cancelCDate);
				}else if(!((nowmonth == today.getMonth()) && (nowyear == today.getFullYear())) && date == 1){
					td.removeAttribute("class");
					td.setAttribute("class", "on");
					td.removeEventListener('click', getCDate);
					td.addEventListener('click', cancelCDate);
				}else{
					td.setAttribute("class", "off");
				}
				date = date + 1;
			}
			tr.appendChild(td);
			if(date > lastdate){
				lastweek = i;
			}
		}
	}
	
	if((nowmonth == today.getMonth()) && (nowyear == today.getFullYear())){
		var ttime = parseInt((new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime() / 1000).toFixed(0));
	}else{
		var ttime = parseInt((first.getTime() / 1000).toFixed(0));
	}
	dailyOp(ttime);
}


