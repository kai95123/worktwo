$(function(){
	var flag_username = false; //檢查帳號正確性
	var flag_password = false; //檢查密碼正確性
    var flag_re_password = false; //檢查確認密碼正確性
	// 帳號確認
	$("#username").bind("input propertychange",function(){
		if($("#username").val().length < 5){
			$("#error-name").html("不可低於五個字元~~!!!~~");
			$("#error-name").css("color","red");
			flag_username = false;
		}
		else{
			$("#error-name").html("");
			flag_username = true;
		}
	});
	//密碼確認
	$("#password").bind("input propertychange",function(){
		if($("#password").val().length < 8){
			$("#error-password").html("不可低於八個字元");
			$("#error-password").css("color","blue");
			flag_password = false;
		}
		else{
			$('#error-password').html("");
			flag_password = true;
		}
	//再次確認密碼宣告	
		if ($("re_password").val() != $("#password").val()){
			$("#error-re").html("請輸入相同密碼");
			$("#error-re").css("color","green");
			flag_re_password = false;
		}
		else{
			$("#error-re").html("");
			flag_re_password = true;
		}
	});

	//密碼再次確認
	$("#re_password").bind("input propertychange",function(){
		if($("#re_password").val()!= $("#password").val()){
			$("#error-re").html("請輸入相同密碼");
			$("#error-re").css("color","green");
			flag_re_password = false;
		}
		else{
			$("#error-re").html("");
			flag_re_password =true;
		}
	});

	$("#ok-btn").bind("click",function(){
		if(flag_username && flag_password && flag_re_password){
			var d = new Date();
  			var n = d.getFullYear();
  			var myage = n - $("#bday").val().substring(0,4) + 1;
  			if(myage == $("#age").val()){
		
		var mycheck = [];
		$.each($("input[name='ch01']:checked"),function(){
			mycheck.push($(this).val());
		});
		showhtml = "帳號: "+$("#username").val()+"<br>"+
				   "密碼: "+$("#password").val()+"<br>"+
				   "性別: "+$("#sex").val()+"<br>"+
				   "學歷: "+$("#edu").val()+"<br>"+
				   "生日: "+$("#bday").val()+"<br>"+
				   "年齡: "+$("#age").val()+"<br>"+
				   "興趣: "+mycheck.join("+")+"<br>"+
				   "血型: "+$("input[name='rad01']:checked").val();

				  $.mobile.changePage( "#two", { transition: "slideup", changeHash: false }); //換頁

				  $("#show").html(showhtml); 
		}else{
  				alert("請確認你的年齡!!");
  			}		  	
				  
		}else{
			if(flag_username == false){
				alert("帳號錯誤");
			}else if(flag_password == false){
				alert("密碼錯誤");
			}else if(flag_re_password == false){
				alert("再次確認密碼");
			}
		}

	});
});