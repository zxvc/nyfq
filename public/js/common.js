// 接口部分
//基本的ajax访问后端接口类
function ajaxRequest(url, param, method, callBack) {
    console.log("url:" + url + " method:" + method + " param:" + JSON.stringify(param));
    $.ajax({
        type: method,  //提交方式
        url: url,//路径
        data: param,//数据，这里使用的是Json格式进行传输
        contentType: "application/json", //必须有
        dataType: "json",
        success: function (ret) {//返回数据根据结果进行相应的处理
            console.log("ret:" + JSON.stringify(ret));
            callBack(ret)
        },
        error: function (err) {
            console.log(JSON.stringify(err));
            console.log("responseText:" + err.responseText);
            callBack(err)
        }
    });
}

//设置管理员状态
function setAdminStatus(url, param, callBack) {
    ajaxRequest(url + "admin/admin/setStatus/" + param.id, param, "GET", callBack);
}
//删除管理员
function delAdmin(url, param, callBack) {
    ajaxRequest(url + "admin/admin/del/" + param.id, param, "GET", callBack);
}
//删除Banner
function delBanner(url, param, callBack) {
    ajaxRequest(url + "admin/banner/del/" + param.id, param, "GET", callBack);
}
//删除Banner详情
function delBannerDetail(url, param, callBack) {
    ajaxRequest(url + "admin/bannerdetail/del/" + param.id, param, "GET", callBack);
}
//修改Banner详情
function editBannerDetail(url, param, callBack) {
    $.post(url + "admin/bannerdetail/edit",param,callBack);
}
//删除旅行社
function delOrganization(url, param, callBack) {
    ajaxRequest(url + "admin/organization/del/" + param.id, param, "GET", callBack);
}
//删除旅行社管理员
function delOrganizationAdmin(url, param, callBack) {
    ajaxRequest(url + "admin/organization/delAdmin/" + param.id, param, "GET", callBack);
}
//添加旅行社管理员
function editOrganizationAdmin(url, param, callBack) {
    ajaxRequest(url + "admin/organization/editAdmin/", param, "GET", callBack);
}
//设置旅行社管理员
function setUpOrganizationAdmin(url, param, callBack) {
    $.post(url + "admin/organization/editAdmin",param,callBack);
}
//审核评论
function examineComment(url, param, callBack) {
    $.post(url + "admin/comment/examine",param,callBack);
}
//删除评论
function delComment(url, param, callBack) {
    ajaxRequest(url + "admin/comment/del/" + param.id, param, "GET", callBack);
}
//设置订单状态
function setStatus(url, param, callBack) {
    ajaxRequest(url + "admin/orders/setStatus/" + param.id, param, "GET", callBack);
}
//删除产品分类
function delTourCategories(url, param, callBack) {
    ajaxRequest(url + "admin/product/tourCategories/del/" + param.id, param, "GET", callBack);
}
//删除产品分类
function delTourGoods(url, param, callBack) {
    ajaxRequest(url + "admin/product/tourGoods/del/" + param.id, param, "GET", callBack);
}
//修改旅游产品详情
function editTourGoodsDetails(url, param, callBack) {
    $.post(url + "admin/product/tourGoods/editTourGoodsDetails",param,callBack);
}

//删除旅游产品详情
function delTourGoodsDetails(url, param, callBack) {
    ajaxRequest(url + "admin/product/tourGoods/delTourGoodsDetails/" + param.id, param, "GET", callBack);
}

//添加旅游产品图片
function addTourGoodsImage(url, param, callBack) {
    $.post(url + "admin/product/tourGoods/addImage",param,callBack);
}

//删除旅游产品图片
function delTourGoodsImage(url, param, callBack) {
    ajaxRequest(url + "admin/product/tourGoods/delTourGoodsImage/" + param.id, param, "GET", callBack);
}

//删除产品路线
function delTourRoutes(url, param, callBack) {
    ajaxRequest(url + "admin/product/tourGoods/delRoutes/" + param.id, param, "GET", callBack);
}

//删除旅游产品日期价格详情信息
function delCalendars(url, param, callBack) {
    ajaxRequest(url + "admin/product/tourGoods/delCalendars/" + param.id, param, "GET", callBack);
}

//旅游定制-酒店管理-删除
function delHotel(url, param, callBack) {
    ajaxRequest(url + "admin/madeTour/hotel/del/" + param.id, param, "GET", callBack);
}

//旅游定制-酒店管理-添加酒店图片
function addHotelImage(url, param, callBack) {
    $.post(url + "admin/madeTour/hotel/addImage",param,callBack);
}

//旅游定制-酒店管理-删除酒店图片
function delHotelImage(url, param, callBack) {
    ajaxRequest(url + "admin/madeTour/hotel/delHotelImage/" + param.id, param, "GET", callBack);
}

//旅游定制-酒店管理-删除酒店房间信息
function delHotelRooms(url, param, callBack) {
    ajaxRequest(url + "admin/madeTour/hotel/delHotelRooms/" + param.id, param, "GET", callBack);
}

//旅游定制-飞机票管理-删除飞机票信息
function delPlane(url, param, callBack) {
    ajaxRequest(url + "admin/madeTour/plane/del/" + param.id, param, "GET", callBack);
}

//旅游定制-车导管理-删除
function delCar(url, param, callBack) {
    ajaxRequest(url + "admin/madeTour/car/del/" + param.id, param, "GET", callBack);
}

//旅游定制-成型套餐管理-删除
function delCustomization(url, param, callBack) {
    ajaxRequest(url + "admin/madeTour/customization/del/" + param.id, param, "GET", callBack);
}

//积分商城管理-积分兑换商品-删除
function delIntegral(url, param, callBack) {
    ajaxRequest(url + "admin/integral/goods/del/" + param.id, param, "GET", callBack);
}

//抢票管理-抢票商品-删除
function delTicket(url, param, callBack) {
    ajaxRequest(url + "admin/ticket/del/" + param.id, param, "GET", callBack);
}





//////////////////////////////////////////////////////////////////////////////////////////////////


/*
 * 校验手机号js
 *
 * By TerryQi
 */

function isPoneAvailable(phone_num) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(phone_num)) {
        return false;
    } else {
        return true;
    }
}

// 判断参数是否为空
function judgeIsNullStr(val) {
    if (val == null || val == "" || val == undefined || val == "未设置") {
        return true
    }
    return false
}

// 判断参数是否为空
function judgeIsAnyNullStr() {
    if (arguments.length > 0) {
        for (var i = 0; i < arguments.length; i++) {
            if (!isArray(arguments[i])) {
                if (arguments[i] == null || arguments[i] == "" || arguments[i] == undefined || arguments[i] == "未设置" || arguments[i] == "undefined") {
                    return true
                }
            }
        }
    }
    return false
}

// 判断数组时候为空, 服务于 judgeIsAnyNullStr 方法
function isArray(object) {
    return Object.prototype.toString.call(object) == '[object Array]';
}


// 七牛云图片裁剪
function qiniuUrlTool(img_url, type) {
    //如果不是七牛的头像，则直接返回图片
    //consoledebug.log("img_url:" + img_url + " indexOf('isart.me'):" + img_url.indexOf('isart.me'));
    if (img_url.indexOf('7xku37.com') < 0 && img_url.indexOf('isart.me') < 0) {
        return img_url;
    }
    //七牛链接
    var qn_img_url;
    const size_w_500_h_200 = '?imageView2/2/w/500/h/200/interlace/1/q/75|imageslim'
    const size_w_200_h_200 = '?imageView2/2/w/200/h/200/interlace/1/q/75|imageslim'
    const size_w_500_h_300 = '?imageView2/2/w/500/h/300/interlace/1/q/75|imageslim'
    const size_w_500_h_250 = '?imageView2/2/w/500/h/250/interlace/1/q/75|imageslim'

    const size_w_500 = '?imageView1/1/w/500/interlace/1/q/75'

    //除去参数
    if (img_url.indexOf("?") >= 0) {
        img_url = img_url.split('?')[0]
    }
    //封装七牛链接
    switch (type) {
        case "ad":  //广告图片
            qn_img_url = img_url + size_w_500_h_300
            break
        case "folder_list":  //作品列表图片样式
            qn_img_url = img_url + size_w_500_h_200
            break
        case  'head_icon':      //头像信息
            qn_img_url = img_url + size_w_200_h_200
            break
        case  'work_detail':      //作品详情的图片信息
            qn_img_url = img_url + size_w_500
            break
        default:
            qn_img_url = img_url
            break
    }
    return qn_img_url
}


// 文字转html，主要是进行换行转换
function Text2Html(str) {
    if (str == null) {
        return "";
    } else if (str.length == 0) {
        return "";
    }
    str = str.replace(/\r\n/g, "<br>")
    str = str.replace(/\n/g, "<br>");
    return str;
}

//null变为空str
function nullToEmptyStr(str) {
    if (judgeIsNullStr(str)) {
        str = "";
    }
    return str;
}


/*
 * 获取url中get的参数
 *
 * By TerryQi
 *
 * 2017-12-23
 *
 */
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

