/**
 * Created by zhoutao on 16/9/1.
 */

//添加视频
function addMovie(){

    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        //安卓手机


        //alert(1);
        window.control.addVideo();
    }
    if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
        //ios

        //alert(2);
        OCModel.addVideo();
    }


}

function goBack(){

    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        //安卓手机


        //alert(1);callGoBack
        window.control.goBack();
    }
    if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
        //ios

        //alert(2);
        OCModel.goBack();
    }


}


function addResumeCallback(json){

    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        //安卓手机


        //alert(1);
        window.control.callbackSuccess(JSON.stringify(json));
        //window.control.callbackSuccess("123");
        //window.control.callbackSuccess();
    }
    if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
        //ios

        //alert(2);
        //xiangmi.formWarn("请填写职能目标！" + json.msg);
        //OCModel.callbackSuccess(json);
        //var ret = {'aaaa':'aaa'};
        OCModel.callbackSuccess(json);
    }


}

//提交简历
function addResume(){
    var target=$(".target").val();
    var salaries=$(".salaries").val();
    var comeTime=$(".comeTime").val();
    //var  movieTitle=$(".movie .title").text();
    //var  movieUrl=$(".movie .title").attr("data");

    var  movieTitle=$("#title").val();
    var  movieUrl=$("#videoUrl").val();

    var token = $("#token").val();
    var name = $("#name").val();
    var id = $("#id").val();

    if(!target){

        xiangmi.formWarn("请填写职能目标！");
        return false;
    }
    if(!salaries){

        if(!isNaN(salaries)||salaries<0){

            xiangmi.formWarn("薪资请输入数字！");
            return false;
        }

        xiangmi.formWarn("请填写期望薪资！");
        return false;
    }
    if(!comeTime){

        xiangmi.formWarn("请填写到岗时间！");
        return false;
    }
    if(!movieUrl){

        xiangmi.formWarn("请填添加视频！");
        return false;
    }
    var url="resume/edit"



    //var data='{"job":"'+target+'","salary":"'+salaries+'","arrivalTime":"'+comeTime+'","title":"'+movieTitle+'","token":"'+token+'","videoUrl":"'+movieUrl+'"}';
    var data={"job":target,"salary":salaries,"arrivalTime":comeTime,"title":movieTitle,"token":token,"name":name,"id":id, "videoUrl":movieUrl};

    //window.control.callbackSuccess();

    //xiangmi.formWarn("aaaaaaaaaaa000000！");

    xiangmi.loadingDate(url,data,"addResume","POST");

    //window.control.callbackSuccess();

    //xiangmi.formWarn("请填添加视频！222222222222222222222222");
}

function  callback(json,method){
    switch(method){
        case "addResume":

            addResumeCallback(json);
            break;
    }

}


//添加视频回调方法
function addMovieCallback(token, title,url){

    $("#token").val(token);
    //$(".movie .title").text(title);
    //$(".movie .title").attr("data",url);

    $("#title").val(title);
    $("#videoUrl").val( url);

    $(".movie video").attr("poster", url + 's.jpg');

    $("#movie").attr("src",   $("#imgUrl").val() + url);
    $(".movie video").attr("poster",  $("#imgUrl").val() + url + 's.jpg');
    $(".movie video").attr("src",  $("#imgUrl").val() + url );
    //$(".movie video").attr("autoplay","true");//直接播

    $(".movie .add").hide();
    $(".movie video").show();
    //$(".editor,.refresh").show();

    //$(".movie .title").text('dddd');
    //$(".movie .title").attr("data",'dddd');
    ////
    //$("#token").val('6231b3323d1d5ca8e933d045601f59e2');
}



function paly(){

    //$(".editor,.refresh").hide();
    //$(".refresh").hide();
}
function stop(){

    //$(".editor,.refresh").show();
    //$(".refresh").show();
}


// 编辑个人信息
function editInfo(name, gender, age , phone ,email ,university ,major , city){

    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        //安卓手机


        //alert(1);
        window.control.editInfo(name, gender, age , phone ,email ,university ,major , city);
    }
    if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
        //ios

        //alert(2);
        OCModel.editInfo(name, gender, age , phone ,email ,university ,major , city);
    }


}

//个人信息展示
//function editInfoCallback(name, gender, age , phone ,email ,university ,major , city,specialty
//){
//    //用JS对象存起来
//        var person={
//            name:name,
//            //name:"你好",
//            gender:gender,
//            age:age,
//            phone:phone,
//            email:email,
//            university:university,
//            major:major,
//            city:city,
//            specialty:specialty
//        }
//    var one=template('template01',person);
//    //获取test元素然后渲染到test的元素内
//    var test01=document.getElementById("one-data");
//    test01.innerHTML=one;
//    $("#head-face-userface").html(person.name);
//    console.log("one请求成功");
//}


//个人信息展示editInfoCallback回调
//function geteditInfoCallback(){
//    var gender=$(".gender").html();
//    var age=$(".age").html();
//    var city=$(".city").html();
//    var university=$(".university").html();
//    var major=$(".major").html();
//    var email=$(".email").html();
//    var phone=$(".phone").html();
//    var specialty=$(".specialty").html();
//    var name=$(".head-face-userface").html();
//    //editInfoCallback(name, gender, age , phone ,email ,university ,major , city,specialty);
//    console.log(age,city);
//}



function editInfoCallback(name,age,gender,suozaidi,nianxian,phone,huji){
    //用JS对象存起来
        var person={
            name:name,
            age:age,
            gender:gender,
            suozaidi:suozaidi,
            nianxian:nianxian,
            phone:phone,
            huji:huji
        }
    var one=template('template01',person);
    $("#one-data").html(one);
    //用户名
    $("#head-face-userface").html(person.name);
}

//个人信息展示editInfoCallback回调
function geteditInfoCallback(){
    var name=$(".head-face-userface").html();
    var age=$(".age").html();
    var gender=$(".gender").html();
    var phone=$(".phone").html();
    //editInfoCallback(name, gender, age , phone ,email ,university ,major , city,specialty);

}





// 期望工作
function editExpect(job, salary, arrivalTime){

    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        //安卓手机


        //alert(1);
        window.control.editExpect(job, salary, arrivalTime);
    }
    if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
        //ios

        //alert(2);
        OCModel.editExpect(job, salary, arrivalTime);
    }


}

//期望工作(阉割)
function editExpectCallback(job, salary, arrivalTime){
    //用person02存起来
    var person02={
        job:job,
        salary:salary,
        arrivalTime:arrivalTime
    }
    //获取模板html,然后把person导入进去
    var two=template('template02',person02);
    //获取test元素然后渲染到test的元素内
    var test02=document.getElementById("two-data");
    test02.innerHTML=two;
    //console.log(two);
    console.log("two请求成功");

    //geteditExpectCallback()
}

//期望工作(阉割)editExpectCallback回调
function geteditExpectCallback(){
    //获取值回调
    var job=$(".job").html();
    var salary=$(".salary").html();
    var arrivalTime=$(".arrivalTime").html();
    editExpectCallback(job, salary, arrivalTime);
}


// 个人评价
function editEvaluation(evaluation){

    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        //安卓手机


        //alert(1);
        window.control.editEvaluation(evaluation);
    }
    if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
        //ios

        //alert(2);
        OCModel.editEvaluation(evaluation);
    }


}

//工作经验和特长 ----添加了工作经验时间和公司的形参
function editEvaluationCallback(time,definition,evaluation){
    //用person03存起来
    var person03={
        time:time,
        definition:definition,
        evaluation:evaluation
    }
    //获取模板html,然后把person导入进去
    var three=template('template03',person03);
    //获取test元素然后渲染到test的元素内
    var test03=document.getElementById("three-textarea");
    test03.innerHTML=three;
}


//工作经验和特长editEvaluationCallback回调
function geteditEvaluationCallback(){
    var time=$(".three-time").html();
    var definition=$(".three-definition").html();
    var evaluation=$(".three-evaluation").html();
    //editEvaluationCallback(time,definition,evaluation);
}


//个人特长
function editSpecialtyCallback(specialty){


}

//个人特长editSpecialtyCallback回调
function geteditSpecialtyCallback(){


}



//个人信息点击按钮
function oneClick(){
    var one=document.getElementById("main-one-click");
    one.addEventListener('click',function(){
        //个人信息
        alert(111);
        editInfoCallback(1,2,3,4,5,6,7)
    })
}



//工作经验和特长点击事件
function threeClick(){
    var three=document.getElementById("main-three-click");
    three.addEventListener('click',function(){
        //跳转工作经验编辑
        alert(222);
        editEvaluationCallback(1,2,3);
    })
}

//视频简历点击事件
function fourClick(){
    var four=document.getElementById("main-four-click");
    four.addEventListener('click',function(){
        //跳转个人特长编辑
        alert(333);
    })
}



//封装头像路径
function face(face){
    var userface=document.getElementById("userface");
    //document.getElementsByTagName('img')[0]
    //以有'src'属性,更改值为'face',达到换图片的目的;
    userface.setAttribute('src',face);
}
//封装视频替换链接
function video(video){
    var userVideo=document.getElementById("jobvideo");
    userVideo.setAttribute('src',video);
}


(function(){
    var mainOne=document.getElementById("main-one-click");
    var mainThree=document.getElementById("main-three-click");
    var mainFour=document.getElementById("main-four-click");

    click(mainOne,oneClick());
    click(mainThree,threeClick());
    click(mainFour,fourClick());


    function click(id,fn){
            id.addEventListener('click',function(){
                fn;
                //removeBtn();
            })

    }

    //删除编辑按钮
    function removeBtn(){
        // 按 id 获取要删除的元素
        //var mainOne=document.getElementById('main-one-click');
        // 让 “要删除的元素” 的 “父元素” 删除 “要删除的元素”
        mainOne.parentNode.removeChild(mainOne);
        mainThree.parentNode.removeChild(mainThree);
        mainFive.parentNode.removeChild(mainFour);
    }
})()