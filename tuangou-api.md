团购API接口
======================


数据格式为[JSON][json]，一般JSON库会将中文内容转换成unicode，可以忽略编码问题。未经unicode转换的，请采用utf8编码

api参考[GroupOnAPIv2](https://sites.google.com/site/grouponapiv2)

###Login认证

登录认证是为了团购购买，购买暂通过手机网页版购买，如果认证页与购买页面不同域，登录认证成功后请将用户相关的cookie设定在跟域名上，以便手机网版本共享cookie。例如美团通过m.meituan.com购买，将cookie设置在 .meituan.com 并且将过期时间设置到了2041年
	
	POST: /login.json
	username hidden
	password ******

####失败

	{"error":{"httpCode":"400","message":"该用户不存在"}}

####成功

	{"user":{"id":123456,"username":"jack","email":"jack@test.com","mobile":1871234567}}


###Divisions 

团购区域列表

	GET /divisions.json


####返回失败数据示例

	{"error":{"httpCode":"400","message":"服务故障"}}

####返回成功数据示例[查看字段描述](#divisiondesc)

	{
	  "divisions": [{
			"id": "bj",
			"name": "北京",
			"enName": "beijing",
			"lat": 39.904667,
			"lng": 116.408198,
			"timezoneOffsetInSeconds": 288000
		}]
	}
	
<div name="divisiondesc" id="divisiondesc"></div>
####Division字段说明

属性			|类型		|描述	
------------------------|---------------|-----------
id			|String		|必需，区域ID
name			|String		|必需，区域名称
enName			|String		|英文名称，用于排序和查询
lat			|Number		|纬度
lng			|Number		|经度
timezoneOffsetInSeconds	|Number		|标准时差偏移

###Categories 

团购分类

	GET /categories.json?division=beijing


####返回失败数据示例

	{"error":{"httpCode":"400","message":"服务故障"}}

####返回成功数据示例[查看字段描述](#catedesc)

	{
	  "categories": [{
			"group": "分类",
			"id": "餐饮美食",
			"name": "餐饮美食",
			"count": 20
		},{
			"group": "分类",
			"id": "休闲娱乐",
			"name": "休闲娱乐",
			"count": 18,
			"sub": [{
				"id": "ktv",
				"name": "ktv",
				"count": 2
			}]
		},{
			"group": "频道",
			"id": "户外旅游",
			"name": "户外旅游",
			"count": 5
		}]
	}
	
<div name="catedesc" id="catedesc"></div>
####Division字段说明

属性			|类型		|描述	
------------------------|---------------|-----------
id			|String		|必需，分类ID
name			|String		|必需，分类名称
count			|Number		|数量
sub			|Array		|子分类
group			|String		|分类分组


###Deals 

某区域团购列表

	GET /deals/${id}.json //单个团购信息
	GET /deals.json?division=bj&cate=美食&perPage=10&page=1
	division: 团购区域，自动定位，可能有如下几种情况，需自行判断：beijing,Beijing,北京,北京市

####返回失败数据示例

	{"error":{"httpCode":"400","message":"该区域不存在"}}

####返回成功数据示例[查看字段描述](#dealdesc)

	
	//deal
	{
		"deal": {}
	}
	//deals
	
	{
	  "perPage":10,"currentPage":1,"totalEntries":102,"totalPages":11,
	  "deals": [{
			"id": "bjwe",
			"division": {
				"id": "bj",
				"name": "北京",
				"lat": 39.904667,
				"lng": 116.408198
			},
			"announcementTitle": "仅售58元！原价130元的嘉佳羊蝎子双人套餐",
			"title": "仅售58元！原价130元的嘉佳羊蝎子双人套餐（小锅羊蝎子+香菇+面片+多种菜品任选5份+自制酸梅汤）。蒲安里/刘家窑两店通用。和美味的羊蝎子相比，吃相又算什么？",
			"category": "餐饮美食",
			"isSoldOut": false,
			"soldQuantity": 120,
			"quantity": 0,
			"url": "http://bj.meituan.com/deal/253724.html",
			"buyUrl": "http://m.meituan.com/deal/buy/253724",
			"siteName": "美团北京站",
			"siteUrl": "http://bj.meituan.com",
			"smallImageUrl": "http://p1.meituan.com/deal/201012/30/lthbxj00.jpg", //5:3 120x72
			"mediumImageUrl": "http://p1.meituan.com/deal/201012/30/lthbxj00.jpg",//200x120 
			"largeImageUrl": "http://p1.meituan.com/deal/201012/30/lthbxj00.jpg",//440x264
			"tippedAt": "1301147806",
			"tippingPoint": 400,
			"isTipped": true,
			"startAt": "1301149806",
			"endAt": "1301147806",
			"expiresAt": "1301157806",
			"price": 200,
			"value": 500,
			"discountPercent": 30,
			"highlightsHtml": "",
			"details": "有效期3个月， 2011.3.22 至 2011.6.22;营业时间：10:30-22:00;请至少提前1天致电预约",
			"pitchHtml": "",
			"merchant": {
				"id": "234",
				"name": "嘉佳羊蝎子",
				"websiteUrl": "http://www.jjyxz.com"
			},
			"range": "东铁营",
			"locations":[
				{
					"name": "嘉佳羊蝎子(刘家窑店)", 
					"address": "北京市丰台区东铁营215号", 
					"lat": 39.904667, 
					"lng": 116.408198, 
					"dpShopId": "4562008",
					"phoneNumber": "010-12345678,13912345678" 
				},
				{
					"name": "嘉佳羊蝎子(蒲安里店)", 
					"address": "北京市丰台区蒲安里4号楼", 
					"lat": 39.904667, 
					"lng": 116.408198, 
					"dpShopId": "3632377",
					"phoneNumber": "010-12345678"
				}
			]
		}]
	}


####翻页字段说明
属性			|类型		|描述	
------------------------|---------------|-----------
perPage			|Number		|必需，每页数量
totalPages		|Number		|必需，总页数
totalEntries		|Number		|必需，总数量
currentPage		|Number		|必需，当前页码

<div name="dealdesc" id="dealdesc"></div>
####Deal字段说明

属性			|类型		|描述	
------------------------|---------------|-----------
id			|String		|必需，团购唯一ID
division		|Division	|必需，团购区域
title			|String		|必需，团购显示标题
announcementTitle	|String		|短标题
category		|String		|分类(ios暂时用不上) 
isSoldOut		|Boolean	|必需，是否已售完	
soldQuantity		|Number		|必需，卖出数量	
quantity		|Number		|必需，商品总量，无限量为0	
url			|String		|必需，此商品链接，采用商品唯一链接
buyUrl			|String		|购买页面地址(手机版)
siteName		|String		|该商品所链接的分站名称，没有则默认为网站名称
siteUrl			|String		|该商品所链接的分站地址，没有则默认为网站首页地址
smallImageUrl		|String		|小图片地址(约120x72像素)
mediumImageUrl		|String		|必需，一般图片地址(约200x120像素，供iphone等手机设备显示)
largeImageUrl		|String		|必需，大图片地址(约440x264像素，供电脑,iPad显示)
isTipped		|Boolean	|是否超过最低团购数
tippedAt		|String		|超过最低团购数时间
tippingPoint		|Number		|最低团购数量
startAt			|String		|必需，团购开始时间
endAt			|String		|必需，团购结束时间
expiresAt		|String		|团购的商品过期
price			|Number		|必需，团购价格	
value			|Number		|必需，商品实际价格	
discountPercent		|Number		|必需，折扣率(value\*100/price)	
details			|String		|提示资料(html)
highlightsHtml		|String		|产品亮点特色(html)
pitchHtml		|String		|产品详情内容(html)
merchant		|Merchant	|团购提供商
range			|String		|地区热点
locations		|Array		|重要，各分店位置，可有多个

####Location参数说明


属性			|类型		|描述	
------------------------|---------------|-----------
name			|String		|店铺名称(分店名称)，名称可参考[点评网](http://www.dianping.com)
address			|String		|Google地图标准地址
lat			|Number		|纬度，为了用户直接查看地图，本地团购请填写
lng			|Number		|经度
dpShopId		|String		|后期可能支持直接查看点评，团购商家的大众点评shopid
phoneNumber		|String		|固定电话 填写有效电话，方便手机直接拨打，多个逗号分隔


###Coupons 

团购券

	GET /coupons.json?perPage=10&page=1&filter=used&sort=new
	params
		filter: used|unused
		sort:	createdAt|expiresAt

####返回失败数据示例

	{"error":{"httpCode":"400","message":"未登录"}}

####返回成功数据示例[查看字段描述](#coupondesc)

	{
	  "perPage":10,"currentPage":1,"totalEntries":102,"totalPages":11,
	  "coupons": [{
			"id": "12323",
			"title": "鸟巢旁CGV星星国际影城单人观影套餐",
			"code": "023131231",
			"orderId": "23424242424",
			"purchaseStatus": "已付款",
			"purchaseAt": 1301149806,
			"expiresAt": 1301149806,
			"isUsed": true,
			"usedAt": 1301149806,
			"dealId": "223424",
			"smallImageUrl": "http://p0.meituan.net/120.76/deal/201105/31/1_0531185216.jpg",
			"mediumImageUrl": "http://p0.meituan.net/120.76/deal/201105/31/1_0531185216.jpg",
			"largeImageUrl": "http://p0.meituan.net/120.76/deal/201105/31/1_0531185216.jpg",
			"locations": []
		}]
	}
	
<div name="coupondesc" id="coupondesc"></div>
####Division字段说明

属性			|类型		|描述	
------------------------|---------------|-----------
id			|String		|必需，团购卷id
title			|String		|必需，团购卷标题
code			|String		|团购券密码
orderId			|String		|订单id
purchaseStatus		|String		|购买状态
purchaseAt		|String		|购买时间
isUsed			|Boolean	|是否已使用
usedAt			|String		|使用时间
dealId			|String		|团购id
smallImageUrl		|String
mediumImageUrl		|String
largeImageUrl		|String
locations		|Array		|位置


[ISO_8601]: http://zh.wikipedia.org/zh-cn/ISO_8601
[json]: http://json.org

