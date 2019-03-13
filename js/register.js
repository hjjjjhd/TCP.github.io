$(function(){

		var countDown=10;
	function setTime(val){
		
		if(countDown == 0){
			val.removeAttribute("disabled"); 
			$(val).removeClass("click");
			$(val).text("获取验证码");
			countDown=10;
			return;
		}
		else{
			$(val).addClass("click");
			val.setAttribute("disabled", true); 
			$(val).text("重新发送"+countDown);
			countDown--;
		}
		setTimeout(function(){
			setTime(val)
		},1000)
	};


	
	$("#register").click(function(){
		var sum=0;
		$(".form-group").each(function(){
			if($(this).find("span").hasClass("text_success")){
				sum++;
			}
			if(sum==1){
				window.location.href="login.html";
			}
		})
	})



	phone.onblur=function(){
	if(this.validity.valueMissing){
		this.nextElementSibling.innerHTML="手机号码不能为空";
		this.nextElementSibling.className="text_default";
		this.setCustomValidity("手机号码不能为空");
	}
	else{
	if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone.value))){
		this.nextElementSibling.innerHTML="手机号码不正确";
		this.nextElementSibling.className="text_default";
		this.setCustomValidity("手机号码不正确");
	}
	else{
		this.nextElementSibling.innerHTML="手机号码正确";
		this.nextElementSibling.className="text_success";
		this.setCustomValidity("手机号码正确");
	}
	}	
	}

	password.onblur=function(){

		if(this.validity.valueMissing){
		this.nextElementSibling.innerHTML="密码不能为空";
		this.nextElementSibling.className="text_default";
		this.setCustomValidity("密码不能为空");
	}
	else 
	{
		if(this.validity.tooShort){
			this.nextElementSibling.innerHTML="密码不能少于6位";
			this.nextElementSibling.className="text_default";
			this.setCustomValidity("密码不能少于6位");

		}
		else{
			this.nextElementSibling.innerHTML="密码格式正确";
			this.nextElementSibling.className="text_success";
			this.setCustomValidity("");
			var data=document.getElementById("phone").value;
			if(!data){
				return;
			}
		}
	}
	}
})