/**
 * Created by apple on 15/2/8.
 */
var other_event = new Array(
    {name: "other_canvas_big", text: "加入外联部", x_p: 2012.7, y_p: -70, md: 30, flag: 0,flag1:0},
    {name: "other_canvas_big", text: "理工大经纬网摄影记者", x_p: 2013.2, y_p: 90, md: 30, flag: 0,flag1:0},
    {name: "other_canvas_big", text: "电子商务协会部长", x_p: 2013.7, y_p: -50, md: 30, flag: 0,flag1:0},
    {name: "other_canvas_big", text: "外联部副部长", x_p: 2013.9, y_p: 50, md: 100, flag: 0,flag1:0},
    {name: "other_canvas_big", text: "参加网络虚拟运营大赛", x_p: 2014.4, y_p: -100, md: 30, flag: 0,flag1:0},
    {name: "other_canvas_big", text: "参加有关无线城市的研究", x_p: 2014.7, y_p: 80, md: 30, flag: 0,flag1:0},
    {name: "other_canvas_big", text: "设计校园互助APP校园帮帮", x_p: 2014.9, y_p: -50, md: 30, flag: 0,flag1:0}
);
var course = new Array(
    {name: "电子商务安全技术", grade: 83.6, detail: "电子商务安全技术 83.6分"},
    {name: "电子商务物流与供应链管理", grade: 92.15, detail: "电子商务物流与供应链管理 92.15分"},
    {name: "电子商务应用开发技术", grade: 92.1, detail: "电子商务应用开发技术 92.1分"},
    {name: "网络推广与网络营销策划", grade: 94, detail: "网络推广与网络营销策划 94分"},
    {name: "网络营销A", grade: 90.75, detail: "网络营销A 90.75分"},
    {name: "XML与电子商务应用", grade: 86.3, detail: "XML与电子商务应用 86.3分"},
    {name: "财务管理A", grade: 88.8, detail: "财务管理A 88.8分"},
    {name: "网络营销A", grade: 90.75, detail: "网络营销A 90.75"},
    {name: "电子商务算法结构", grade: 95.7, detail: "电子商务算法结构 95.7分"},
    {name: "电子商务程序设计", grade: 85, detail: "电子商务程序设计 85分"},
    {name: "电子商务数据库技术", grade: 81, detail: "网络营销A 81分"},
    {name: "计算机程序设计基础(C语言)", grade: 94, detail: "计算机程序设计基础(C语言) 94分"},
    {name: "管理学原理A", grade: 80, detail: "管理学原理A 80分"},
    {name: "宏微观经济学", grade: 82, detail: "宏微观经济学 82分"},
    {name: "电子商务设计与开发", grade: 95, detail: "电子商务设计与开发 95分"},
    {name: "服务科学与电子商务", grade: 92, detail: "服务科学与电子商务 92分"},
    {name: "计算机网络设计", grade: 89.98, detail: "计算机网络设计 89.98分"},
    {name: "电子商务支付与金融", grade: 94.1, detail: "电子商务支付与金融 94分"},
    {name: "可视化编程", grade: 88, detail: "可视化编程 88分"});
var show_number = -1;
var show_number_sum = -1;
var flag_othersize = -1;

var course_sum = new Array(
    {name: "第一学期", grade: 84.11, detail: "2012-2013-1学分绩点为3.411"},
    {name: "第二学期", grade: 84.31, detail: "2012-2013-2学分绩点为3.431"},
    {name: "第三学期", grade: 86.79, detail: "2013-2014-1学分绩点为3.679"},
    {name: "第四学期", grade: 85.81, detail: "2013-2014-2学分绩点为3.581"},
    {name: "第五学期", grade: 87.74, detail: "2014-2015-1学分绩点为3.774"}
);

$(document).ready(function () {
    var flag_skill = 0, flag_course = 0, flag_ability = 0, flag_other = 0;
    var width = $(document).width();
    var height = 700;
    //alert(width);
    onscrollchange(height);
    $("#callme").css("height", height);
    $("#welcome").css("height", height);

    window.onresize = changesize;
    window.onscroll = function () {
        onscrollchange(height);
        if ($(document).scrollTop() > 2.5 * height && flag_skill == 0) {
            var s = $(".grade");
            getBarChart(s);
            flag_skill++;
        }
        if ($(document).scrollTop() > 0.8 * height && flag_ability == 0) {
            var s = $(".ability_grade");
            getBarChart(s);
            flag_ability++;
        }
        if ($(document).scrollTop() > 1.5 * height && flag_course == 0) {
            var c = document.getElementById("myCanvas");
            var c2 = document.getElementById("myCanvas2");
            var context = c.getContext("2d");
            var context2 = c.getContext("2d");
            axis(c.width, c.height, "myCanvas");//绘制坐标轴
            axis(c2.width, c2.height, "myCanvas2");//绘制坐标轴
            creatPoint("myCanvas", course);
            creatLine(c2, course_sum);
            flag_course++;
        }
        if ($(document).scrollTop() > 3.8 * height && flag_other == 0) {
            creatTimeLiney("other_canvas_small", 1);
            creatTimeLine("other_canvas_big", 1);
            flag_other++;
        }

    }


    //creatEvent("other_canvas_big","加入外联部",2012.7,-50,30);
    //creatEvent("other_canvas_big","理工大经纬网摄影记者",2013,100,30);
    //creatEvent("other_canvas_big","电子商务协会部长",2013.7,-50,30);
    //creatEvent("other_canvas_big","外联部副部长",2013.8,50,30);
    //creatEvent("other_canvas_big","参加网络虚拟运营大赛",2014.4,-70,30);
    //creatEvent("other_canvas_big","参加有关无线城市的研究",2014.7,-50,30);
    //creatEvent("other_canvas_big","设计校园互助APP校园帮帮",2014.7,50,30);


})

//各窗口大小
function changesize() {
    var width = $(window).width();
    //alert(width);
    $("#container").css("width", width);
}

//导航栏状态
function onscrollchange(height) {
    var height1 = $("#welcome").height();
    var height2 = $("#detail").height();
    var height3 = $("#course").height();
    var height4 = $("#other").height();
    var height5 = $("#callme").height();
    var navli = $(".nav li");
    var top = $(document).scrollTop();
    var cc = $("#cc");
    //cc.css("background-color","red");
    navli.removeClass("active");
    if (top > height) {
        cc.css({
            "position": "fixed",
            "top": "0px"
            //"background-color":"#cccccc"
        });
    } else {
        cc.css({
            "position": "absolute",
            "top": height
        });
    }
    if (top > height1 + height2 + height3 + height4 + height5 - 350) {
        navli.eq(4).addClass("active");
    } else if (top > height1 + height2 + height3 + height4 - 350) {
        navli.eq(3).addClass("active");
    } else if (top > height1 + height2 + height3 - 350) {
        navli.eq(2).addClass("active");
    } else if (top > height1 + height2 - 350) {
        navli.eq(1).addClass("active");
    } else if (top > height1 - 350) {
        navli.eq(0).addClass("active");
    }

}

//———————————————————————————————————skill中柱状图函数——————————————————————————————————————————
function getBarChart(s) {
    s.each(function (index) {
        //console.log($(this).attr("data-grade"));
        getBarWidth(this);
    });
    //console.log(s.eq(1).attr("data-grade"));

}
function getBarWidth(dd) {
    var width = $(dd).attr("data-grade");
    //$(dd).css("width",width+"%");
    $(dd).animate({
        width: width + "%"
    }, 3000);
}
//———————————————————————————————————course中球函数——————————————————————————————————————————

//输入参数为宽  长  显示的数组   生成球球
function showChartDetail(e, array) {
    //console.log(e);
    var x = e.pageX, y = e.pageY;
    //console.log("x:"+array[1].x+"   "+x+"   "+"y:"+array[1].y+"   "+y);
    for (var i = 0; i < array.length; i++) {
        if (x > array[i].x - 5 && x < array[i].x + 5 && y > array[i].y - 5 && y < array[i].y + 5) {
            if ($(".showdetail").length > 0) {
            } else {
                show_number = i;
                $("#container").after("<div class='showdetail'><p>" + array[i].detail + "</p></div>");
                $(".showdetail").css({
                    "top": e.pageY,
                    "left": e.pageX
                });
            }
        }
        if (show_number > -1) {
            if (x < array[show_number].x - 5 || x > array[show_number].x + 5 || y < array[show_number].y - 5 || y > array[show_number].y + 5) {
                $(".showdetail").remove();
                show_number = -1;
            }
        }
    }


}
//输入参数为宽  长  显示的数组   生成球球
function creatPoint(name, array) {
    var c=document.getElementById(name);
    var context = c.getContext("2d");
    var x = c.width, y = c.height;
    var k = (x / array.length).toFixed(3) - 0.2;
    var x0 = 20, y0 = 0, r, min = array[0].grade, max = array[0].grade;
    var i = 0;
    var t = (2.5 / array.length).toFixed(3) * 1000;
    for (var ii = 0; ii < array.length; ii++) {
        if (array[ii].grade > max) max = array[ii].grade;
        if (array[ii].grade < min) min = array[ii].grade;
    }
    //alert(getpos(c).t);
    setInterval(function () {
        if (i < array.length) {
            context.beginPath();
            y0 = y - (array[i].grade - min) / (max - min) * (y - 10) * 0.8 - 20;
            r = (array[i].grade - (max - min) ) / min * 5;
            if (y0 < 0.35 * y) {
                context.fillStyle = "red";
            } else {
                context.fillStyle = "#cccccc";
            }
            context.arc(x0, y0, r, 0, Math.PI * 2, true);
            array[i].x = x0+getpos(c).l;
            array[i].y = y0+getpos(c).t;

            context.closePath();
            context.fill();
            i++;
            x0 += k;
        }
    }, t);
    //for (var i = 0; i < array.length; i++, x0 += k) {
    //    context.beginPath();
    //    y0 = y - (array[i].grade - 60) / 40 * (y - 10) * 0.8 - 20;
    //    r = array[i].grade / 100 * 5;
    //    if (y0 < 0.5 * y) {
    //        context.fillStyle = "#111111";
    //    } else {
    //        context.fillStyle = "#cccccc";
    //    }
    //    context.arc(x0, y0, r, 0, Math.PI * 2, true);
    //    course[i].x = x0;
    //    course[i].y = y0;
    //    context.closePath();
    //    context.fill();
    //
    //}

}

function creatLine(c, array) {
    var context = c.getContext("2d");
    var x = c.width, y = c.height;
    var k = (x / array.length).toFixed(3) - 0.2;
    var x0 = 20, y0 = 0, x1, y1, r, min = array[0].grade, max = array[0].grade;
    var i = 0, f = 0, yy, xx;
    var t = (2.5 / array.length).toFixed(3) * 1000;
    var pos=getpos(c);
    for (var ii = 0; ii < array.length; ii++) {
        if (array[ii].grade > max) max = array[ii].grade;
        if (array[ii].grade < min) min = array[ii].grade;
    }
    for (var n = 0; n < array.length; n++, x0 += k) {
        y0 = y - (array[n].grade - min) / (max - min) * (y - 10) * 0.8 - 20;
        array[n].x = x0+ pos.l;
        array[n].y = y0+pos.t;
    }

    x0 = array[0].x-pos.l;
    y0 = array[0].y-pos.t;
    x1 = array[1].x-pos.l;
    y1 = array[1].y-pos.t;
    xx = x0;
    yy = y0;
    setInterval(function () {
        if (i < array.length - 1) {
            if (f > 101) {
                i++;
                if (i != array.length - 1) {
                    x0 = array[i].x-pos.l;
                    y0 = array[i].y-pos.t;
                    x1 = array[i + 1].x-pos.l;
                    y1 = array[i + 1].y-pos.t;
                    xx = x0;
                    yy = y0;
                    f = 1;
                }

            }
            context.beginPath();

            if (f == 100 || f == 0) {
                context.arc(xx, yy, 5, 0, Math.PI * 2, true);
            } else {
                context.arc(xx, yy, 1, 0, Math.PI * 2, true);
            }
            context.fillStyle = "#cccccc";
            context.closePath();
            context.fill();
            xx = xx + (x1 - x0) / 100;
            yy = yy + (y1 - y0) / 100;
            f++

        }
    }, 5);
}

function getpos(e){
    var t=e.offsetTop;
    var l=e.offsetLeft;
    var height=e.offsetHeight;
    while(e=e.offsetParent){
        t+=e.offsetTop;
        l+=e.offsetLeft;
    }
    var size=new Object();;
    size.t=t;
    size.l=l;
    return size;
}

function axis(x, y, name) {
    var x0 = 0;
    var y0 = y;

    var c = document.getElementById(name);
    var context = c.getContext("2d");
    setInterval(function () {
        x0 += 1;
        y0 -= 1;
        if (x0 < x) {
            context.beginPath();
            context.fillStyle = "white";
            context.strokeStyle = "#dddddd";
            context.arc(x0, y, 1, 0, Math.PI * 2, true);
            context.closePath();
            context.stroke();
        }
        if (y0 > 0) {
            context.beginPath();
            context.fillStyle = "white";
            context.strokeStyle = "#dddddd";
            context.arc(0, y0, 1, 0, Math.PI * 2, true);

            context.closePath();
            context.stroke();
        }
    }, 6);
}



//———————————————————————————————————other——————————————————————————————————————————
//canvas名字，内容，时间，偏移量，密度
function creatEvent(name, text, x_p, y_p, md) {
    var c = document.getElementById(name);
    var context = c.getContext("2d");
    var x = c.width, y = c.height;
    var x0 = (x_p - 2012) * x / 4, y0 = y / 2;
    var x1 = x0 - Math.abs(y_p);
    y1 = y0 + y_p;
    console.log("hello");
    var x_n = x0, y_n = y0, flag = 0;
    setInterval(function () {
        if (flag < md) {
            x_n = x_n + (x1 - x0) / md;
            y_n = y_n + (y1 - y0) / md;
            context.beginPath();
            context.fillStyle = "#cccccc";
            context.strokeStyle = "#dddddd";
            context.arc(x_n, y_n, 1, 0, Math.PI * 2, true);
            context.closePath();
            context.fill();
            flag++;
            if (flag == md) {
                context.font = "15px Microsoft YaHei";
                context.fillStyle = "#eeeeee";
                context.fillText(text, x_n - text.length / 2 * 15, y_n + Math.abs(y_p) / y_p * 15);
            }

        }
    }, 1)
}
function creatEventy(name, text, x_p, y_p, md) {
    var c = document.getElementById(name);
    var context = c.getContext("2d");
    var x = c.width, y = c.height;
    var y0 = (x_p - 2012) * y / 4, x0 = x / 2;
    var y1 = y0 - Math.abs(y_p)/3;
    x1 = x0 + y_p;
    var x_n = x0, y_n = y0, flag = 0;
    setInterval(function () {
        if (flag < md) {
            x_n = x_n + (x1 - x0) / md;
            y_n = y_n + (y1 - y0) / md;
            context.beginPath();
            context.fillStyle = "#cccccc";
            context.strokeStyle = "#dddddd";
            context.arc(x_n, y_n, 1, 0, Math.PI * 2, true);
            context.closePath();
            context.fill();
            flag++;
            if (flag == md) {
                context.font = "15px Microsoft YaHei";
                context.fillStyle = "#eeeeee";
                context.fillText(text,x_n + Math.abs(y_p) / y_p * text.length/2*14-Math.abs(Math.abs(y_p) / y_p * text.length/2*14), y_n);
            }

        }
    }, 1)
}


function creatTimeLine(name, time) {
    var c = document.getElementById(name);
    var context = c.getContext("2d");
    var x = c.width, y = c.height;
    var x0 = 0, r, i;
    setInterval(function () {
        x0 += 1;
        if (x0 < x) {
            r = -5 / (x * x) * x0 * x0 + 5 / x * x0;
            if (x0 == x / 4) {
                r = 8;
                context.font = "1.5em Georgia";
                context.fillText("2013", x0 - 14, y / 2 - 20);
            }
            if (x0 == x / 2) {
                r = 8;
                context.font = "1.5em Georgia";
                context.fillText("2014", x0 - 14, y / 2 + 30);
            }
            if (x0 == x / 4 * 3) {
                r = 8;
                context.font = "1.5em Georgia";
                context.fillText("2015", x0 - 14, y / 2 - 20);
            }
            if(x0>(other_event[0].x_p-2012)*x/4-1&&other_event[0].flag==0) {
                i=0;
                other_event[i].flag=1;
                creatEvent(other_event[i].name,other_event[i].text,other_event[i].x_p,other_event[i].y_p,other_event[i].md);
            }
            if(x0>(other_event[1].x_p-2012)*x/4-1&&other_event[1].flag==0) {
                i=1;
                other_event[i].flag=1;
                creatEvent(other_event[i].name,other_event[i].text,other_event[i].x_p,other_event[i].y_p,other_event[i].md);
            }
            if(x0>(other_event[2].x_p-2012)*x/4-1&&other_event[2].flag==0) {
                i=2;
                other_event[i].flag=1;
                creatEvent(other_event[i].name,other_event[i].text,other_event[i].x_p,other_event[i].y_p,other_event[i].md);
            }
            if(x0>(other_event[3].x_p-2012)*x/4-1&&other_event[3].flag==0) {
                i=3;
                other_event[i].flag=1;
                creatEvent(other_event[i].name,other_event[i].text,other_event[i].x_p,other_event[i].y_p,other_event[i].md);
            }
            if(x0>(other_event[4].x_p-2012)*x/4-1&&other_event[4].flag==0) {
                i=4;
                other_event[i].flag=1;
                creatEvent(other_event[i].name,other_event[i].text,other_event[i].x_p,other_event[i].y_p,other_event[i].md);
            }
            if(x0>(other_event[5].x_p-2012)*x/4-1&&other_event[5].flag==0) {
                i=5;
                other_event[i].flag=1;
                creatEvent(other_event[i].name,other_event[i].text,other_event[i].x_p,other_event[i].y_p,other_event[i].md);
            }
            if(x0>(other_event[6].x_p-2012)*x/4-1&&other_event[6].flag==0) {
                i=6;
                other_event[i].flag=1;
                creatEvent(other_event[i].name,other_event[i].text,other_event[i].x_p,other_event[i].y_p,other_event[i].md);
            }

            context.beginPath();
            context.fillStyle = "white";
            context.strokeStyle = "#dddddd";
            context.arc(x0, y / 2, r, 0, Math.PI * 2, true);
            context.closePath();
            context.fill();
        }
    }, 3);

}


function creatTimeLiney(name, time) {
    var c = document.getElementById(name);
    var context = c.getContext("2d");
    var y = c.width, x = c.height;
    var x0 = 0, r, i;
    setInterval(function () {
        x0 += 1;
        if (x0 < x) {
            r = -5 / (x * x) * x0 * x0 + 5 / x * x0;
            if (x0 == x / 4) {
                r = 8;
                context.font = "1.5em Georgia";
                context.fillText("2013", y/2-60,x0 );
            }
            if (x0 == x / 2) {
                r = 8;
                context.font = "1.5em Georgia";
                context.fillText("2014",y/2+20, x0 );
            }
            if (x0 == x / 4 * 3) {
                r = 8;
                context.font = "1.5em Georgia";
                context.fillText("2015",y/2-60 ,x0 );
            }
            if(x0>(other_event[0].x_p-2012)*x/4-1&&other_event[0].flag1==0) {
                i=0;
                other_event[i].flag1=1;
                creatEventy("other_canvas_small",other_event[i].text,other_event[i].x_p,other_event[i].y_p,other_event[i].md);
            }
            if(x0>(other_event[1].x_p-2012)*x/4-1&&other_event[1].flag1==0) {
                i=1;
                other_event[i].flag1=1;
                creatEventy("other_canvas_small",other_event[i].text,other_event[i].x_p,other_event[i].y_p,other_event[i].md);
            }
            if(x0>(other_event[2].x_p-2012)*x/4-1&&other_event[2].flag1==0) {
                i=2;
                other_event[i].flag1=1;
                creatEventy("other_canvas_small",other_event[i].text,other_event[i].x_p,other_event[i].y_p,other_event[i].md);
            }
            if(x0>(other_event[3].x_p-2012)*x/4-1&&other_event[3].flag1==0) {
                i=3;
                other_event[i].flag1=1;
                creatEventy("other_canvas_small",other_event[i].text,other_event[i].x_p,other_event[i].y_p,other_event[i].md);
            }
            if(x0>(other_event[4].x_p-2012)*x/4-1&&other_event[4].flag1==0) {
                i=4;
                other_event[i].flag1=1;
                creatEventy("other_canvas_small",other_event[i].text,other_event[i].x_p,other_event[i].y_p,other_event[i].md);
            }
            if(x0>(other_event[5].x_p-2012)*x/4-1&&other_event[5].flag1==0) {
                i=5;
                other_event[i].flag1=1;
                creatEventy("other_canvas_small",other_event[i].text,other_event[i].x_p,other_event[i].y_p,other_event[i].md);
            }
            if(x0>(other_event[6].x_p-2012)*x/4-1&&other_event[6].flag1==0) {
                i=6;
                other_event[i].flag1=1;
                creatEventy("other_canvas_small",other_event[i].text,other_event[i].x_p,other_event[i].y_p,other_event[i].md);
            }


            context.beginPath();
            context.fillStyle = "white";
            context.strokeStyle = "#dddddd";
            context.arc(y/2, x0, r, 0, Math.PI * 2, true);
            context.closePath();
            context.fill();
        }
    }, 6);

}

//———————————————————————————————————other——————————————————————————————————————————