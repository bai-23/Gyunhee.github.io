// 监听导航条下拉菜单移入移除事件
// $("#drop").mouseover(function () {
//     $('#drop').addClass('open')
// });
// $("#drop").mouseout(function () {
//     $('#drop').removeClass('open')
// });

// 监听logo触发事件
$('.toplogo span i').hover(function(){
    $(this).addClass('animate__animated animate__hinge')
},function (){
    $(this).removeClass('animate__animated animate__hinge')
})

setInterval(function(){
	imgs=$('.window img');

	imgs.eq(2).stop().fadeOut(500,function(){
		$(this).show().prependTo('.window');
	});
},1000);

// 弹窗事件
$('.now').click( function (){
	// alert('加入成功，奖励一把串串')
	confirm('加入成功，奖励一把串串')
})
$('.after1').click(function(){
	confirm('你串没了~')
})


