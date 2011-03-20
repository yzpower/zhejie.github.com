---
layout: default
title: 团购数据收录接口
---

折街网提供第三方团购网站数据收录，数据格式为[JSON][json]，一般JSON库会将中文内容转换成unicode，可以忽略编码问题。未经unicode转换的，请采用utf8编码

折街网专注于团购位置等服务，请提供准确的位置经纬度信息。由于各大地图提供商之间的经纬度有误差，我们暂时采用从[google地图](http://ditu.google.cn)获得的经纬度，地图定位可使用 [地址定位工具](/map/)

数据中不支持html代码

###数据示例 [查看字段描述](\#desc)

	[{
		"id": "bjwe",
		"title": "仅售58元！原价130元的嘉佳羊蝎子双人套餐（小锅羊蝎子+香菇+面片+多种菜品任选5份+自制酸梅汤）。蒲安里/刘家窑两店通用。和美味的羊蝎子相比，吃相又算什么？",
		"isSoldOut": false,
		"soldQuantity": 120,
		"quantity": 0,
		"url": "http://http://bj.meituan.com/deal/253724.html",
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
		"details": "有效期3个月， 2011.3.22 至 2011.6.22;营业时间：10:30-22:00;请至少提前1天致电预约",
		"postRequired": false,
		"divisionName": "北京", 
		"merchantName": "龙潭湖公园",
		"merchantUrl": "http://www.lthgy.com",
		"locations":[
			{
				name: "嘉佳羊蝎子（刘家窑店）", 
				"address": "北京市丰台区东铁营215号", 
				"lat": 39.904667, 
				"lng": 116.408198, 
				"msid": "204433898138981275802.00049ebe9a5d539b83f1d", 
				"tel": "010-12345678", 
				"mobile": "138123456789"
			},
			{
				name: "嘉佳羊蝎子（蒲安里店）", 
				"address": "北京市丰台区蒲安里4号楼", 
				"lat": 39.904667, 
				"lng": 116.408198, 
				"msid": "204433898138981275802.00049ebe9a5d539b83f1d",
				"tel": "010-12345678", 
				"mobile": "138123456789"
			}
		],
		"category": "餐饮美食"
	}]

<div name="desc" id="desc"></div>
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
divisionName		|String		|必需，团购区域名称（国内城市名称，网购类可写"全国"）
merchantName		|String		|必需，团购提供商名称
merchantUrl		|String		|团购提供商网址
locations		|Array		|重要，位置，可有多个，网站默认按照位置远近排序，网购类可以不填(将在分类和搜索中显示)
category		|String		|分类: 餐饮美食,休闲娱乐,运动健身,教育培训,旅游酒店,美容保健,医疗健康,便民服务,车辆服务,网上购物,开心抽奖。[分类信息参考口碑网](http://bendi.koubei.com/beijing/searchstore)	

###位置参数说明

属性			|类型		|描述	
------------------------|---------------|-----------
name			|String		|如果有位置必填，实际地址或名称(提供页面显示)
address			|String		|如果有位置必填，Google地图标准地址(用于地图搜索)
lat			|Number		|如果有位置必填，纬度，来自google maps [地址定位工具](/map/)
lng			|Number		|如果有位置必填，精度，来自google maps [地址定位工具](/map/)
msid			|String		|如是自己创建的地图需要提供地图链接中的msid参数
tel			|String		|固定电话
mobile			|String		|移动电话


[ISO_8601]: http://zh.wikipedia.org/zh-cn/ISO_8601
[json]: http://json.org

