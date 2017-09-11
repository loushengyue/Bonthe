$(function(){
    var i=0;
    var timer=null;

    $('.pic li').width($(".banner").width());
    $('.banner').innerHeight($('.pic li').innerHeight());
    $('.banner').height($('.pic li a img').height());

    $('.hd li').first().addClass('active');
    var firstImg=$('.pic li').first().clone();
    $('.pic').append(firstImg).width($('.pic li').length*$('.pic li').width());
    //下一张图效果
    $(".next").click(function(){
        i++;
        if(i==$('.pic li').length){
            i=1;
            $('.pic').css({left:0});
        }
        $(".pic").stop().animate({left:-i*$('.pic li').width()},500);

        if(i==$('.pic li').length-1){
            $(".hd li").eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $(".hd li").eq(i).addClass('active').siblings().removeClass('active');
        }
    })
    //上一张图效果
    $(".prev").click(function(){
        //$(".prev").hammer().on('tap',function(){
        i--;
        if (i==-1) {
            i=$('.pic li').length-2;
            $('.pic').css({left:-($('.pic li').length-1)*$('.pic li').width()});
        }

        $('.pic').stop().animate({left:-i*$('.pic li').width()},500);
        $('.hd li').eq(i).addClass('active').siblings().removeClass('active');
    })

    //自动播放
    timer=setInterval(function(){
        i++;
        if(i==$('.pic li').length){
            i=1;
            $('.pic').css({left:0});
        }
        $(".pic").stop().animate({left:-i*$('.pic li').width()},500);

        if(i==$('.pic li').length-1){
            $(".hd li").eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $(".hd li").eq(i).addClass('active').siblings().removeClass('active');
        }
    },1800);
    //点轮播效果
    //$(".hd li").mouseover(function(){
    $(".hd li").hammer().on('tap',function(){
        $('.pic').stop().animate({left:-$(this).index()*$('.pic li').width()},150);
        $('.hd li').eq($(this).index()).addClass('active').siblings().removeClass('active');
        i=$(this).index();
    });

    $('.banner').on('mouseenter',function(){
        clearInterval(timer);
    });
    $('.banner').on('mouseleave ',function(){
        //自动播放
        timer=setInterval(function(){
            i++;
            if(i==$('.pic li').length){
                i=1;
                $('.pic').css({left:0});
            }
            $(".pic").stop().animate({left:-i*$('.pic li').width()},500);

            if(i==$('.pic li').length-1){
                $(".hd li").eq(0).addClass('active').siblings().removeClass('active');
            }else{
                $(".hd li").eq(i).addClass('active').siblings().removeClass('active');
            }
        },1800);
    });

});