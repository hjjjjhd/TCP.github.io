$(".nav-a").click(function(){
		$(this).addClass("select").siblings().removeClass("select");
	})
	$("#body-1").click(function(){
		$(".body-1").css("display","block");
		$(".body-2").css("display","none");
		$(".body-3").css("display","none");
	})
	$("#body-2").click(function(){
		$(".body-1").css("display","none");
		$(".body-2").css("display","block");
		$(".body-3").css("display","none");
	})
	$("#body-3").click(function(){
		$(".body-1").css("display","none");
		$(".body-2").css("display","none");
		$(".body-3").css("display","block");
	})
	var num=0;
	$(".next").click(function(){
		num++;
		if(num>4){
			num=4;
		}
		$(".one").eq(num).addClass("thispage");
		$(".one").eq(num).siblings().removeClass("thispage");
		$(".group").eq(num).css("display","block");
		$(".group").eq(num).siblings(".group").css("display","none");
	})
	$(".prev").click(function(){
		num--;
		if(num<0){
			num=0;
		}
		$(".one").eq(num).addClass("thispage");
		$(".one").eq(num).siblings().removeClass("thispage");
		$(".group").eq(num).css("display","block");
		$(".group").eq(num).siblings(".group").css("display","none");
	})
	$(".one").click(function(){
		num=$(this).index()-1;
		$(".one").eq(num).addClass("thispage");
		$(".one").eq(num).siblings().removeClass("thispage");
		$(".group").eq(num).css("display","block");
		$(".group").eq(num).siblings(".group").css("display","none");
	})
	$(".zhifu").click(function(){
		
		if($(".zhifu-box").length == 0) {
    		$(this).after("<div class='zhifu-box'><p id='close' >X</p><img src='images/zhifu.png' /><p>微信扫码支付</p></div>");
		}
		else{
			alert("请扫二维码进行支付！");
		}
	})
	$("body").on("click","#close",function(){
		$(this).parent().remove();
	})
	$(".more").click(function(){
		
		if($(".more-box").length == 0) {
    		$(this).parent().after("<div class='more-box'><p id='close-more' >X</p><img src='images/zhifu.png' /><p>此为付费内容，请扫码支付后查看更多</p></div>");
		}
		else{
			alert("请扫二维码进行支付！");
		}
	})
	$("body").on("click","#close-more",function(){
		$(this).parent().remove();
	})//,makeby hjj