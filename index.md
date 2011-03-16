---
layout: default
title: 团购数据收录接口
---

折街网提供第三方团购网站数据收录，数据格式为[JSON][json]，如有中文但未经unicode转换的，请采用utf8编码

折街网专注于团购位置等服务，请提供准确的位置经纬度信息。由于各大地图提供商之间的经纬度有误差，我们暂时采用从[google地图](http://ditu.google.cn)获得的经纬度，地图定位可使用 [地址定位工具](/map/)

数据中不支持html代码

###数据示例

	[{
		"id": "bjwe",
		"title": "售89元！价值140元的龙潭湖冰雪节套票（双人门票+雪橇乐园+雪圈乐园），想念雪的味道吗~",
		"isSoldOut": false,
		"soldQuantity": 120,
		"quantity": 0,
		"url": "http://www.meituan.com/beijing/deal/bjlth.html",
		"smallImageUrl": "http://p1.meituan.com/deal/201012/30/lthbxj00.jpg", //5:3 120x72
		"mediumImageUrl": "http://p1.meituan.com/deal/201012/30/lthbxj00.jpg",//200x120 
		"largeImageUrl": "http://p1.meituan.com/deal/201012/30/lthbxj00.jpg",//440x264
		"tippedAt": "2010-09-24T14:19:15Z",
		"tippingPoint": 400,
		"isTipped": true,
		"startAt": "2010-09-24T05:04:00Z",
		"endAt": "2010-09-27T04:59:00Z",
		"expiresAt": "2011-03-28T04:59:00Z",
		"price": 200,
		"value": 500,
		"details": "有效期3个月，截止至2011年5月16日; 营业时间：10:00-21:30; 请务必提前1天致电预约;",
		"postRequired": false,
		"divisionName": "北京", 
		"merchantName": "龙潭湖公园",
		"locations":[{name: "崇文龙潭湖公园", "address": "北京市崇文区福光路三号", "lat": 39.904667, "lng": 116.408198, "tel": "010-12345678", "mobile": "138123456789"}],
		"category": "餐饮美食"
	}]


###团购字段说明

属性			|类型		|描述	
------------------------|---------------|-----------
id			|String		|必需，团购唯一ID
title			|String		|必需，团购显示标题(140字内)
isSoldOut		|Boolean	|必需，是否已售完	
soldQuantity		|Number		|必需，卖出数量	
quantity		|Number		|必需，商品总量，无限量为0	
url			|String		|必需，商品链接
smallImageUrl		|String		|小图片地址(约120x72像素)
mediumImageUrl		|String		|必需，一般图片地址(约200x120像素，供手机显示)
largeImageUrl		|String		|必需，大图片地址(约440x264像素，供电脑终端显示)
isTipped		|Boolean	|是否超过最低团购数
tippedAt		|String		|超过最低团购数时间，时间格式采用 [ISO 8601][ISO_8601]
tippingPoint		|Number		|最低团购数量
startAt			|String		|必需，团购开始时间，时间格式采用 [ISO 8601][ISO_8601]
endAt			|String		|必需，团购结束时间，时间格式采用 [ISO 8601][ISO_8601]
expiresAt		|String		|团购的商品过期，时间格式采用 [ISO 8601][ISO_8601]
price			|Number		|必需，团购价格	
value			|Number		|必需，商品实际价格	
details			|String		|备注资料(多条可使用回车换行)
postRequired		|Boolean	|是否需要邮寄，默认不需要
divisionName		|String		|必需，团购区域名称（国内城市名称）
merchantName		|String		|必需，团购提供商名称
merchantUrl		|String		|团购提供商网址
locations		|Array		|重要，网站默认按照位置排序
category		|String		|分类，(餐饮美食,休闲娱乐,美容化妆,网上购物,运动健身,抽奖)	

###位置字段说明

属性			|类型		|描述	
------------------------|---------------|-----------
name			|String		|必需，实际地址或名称(提供页面显示)
address			|String		|必需，地图上实际地址(用于地图搜索)
lat			|Number		|必需，纬度，来自google maps，保留小数点后7位
lng			|Number		|必需，精度，来自google maps，保留小数点后7位
tel			|String		|固定电话
mobile			|String		|移动电话


[ISO_8601]: http://zh.wikipedia.org/zh-cn/ISO_8601
[json]: http://json.org
