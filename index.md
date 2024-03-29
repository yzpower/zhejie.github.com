---
layout: default
title: 团购数据收录接口
---

折街网提供第三方团购网站数据收录，数据格式为[XML](http://en.wikipedia.org/wiki/XML)或者[JSON][json]，XML格式采用utf8编码，一般JSON库会将中文内容转换成unicode，可以忽略编码问题。未经unicode转换的，请采用utf8编码

折街网专注于团购位置等服务，请提供准确的位置经纬度信息。由于各大地图提供商之间的经纬度有误差，我们暂时采用从[google地图](http://ditu.google.cn)获得的经纬度，[经纬度获取方法查看这里](/latlng/)。

数据中不支持html代码

###提交数据接口

由于含有准确地理位置的团购信息才能在折街网上显示，暂不接受网购类团购数据。有关数据接口的问题可以发邮件到 [hi@zhejie.com](mailto:hi@zhejie.com) 交流。

数据接口准备好后到 [这里申请](http://zhejie.wufoo.com/forms/ece/)

###数据示例 [查看字段描述](#desc)

####XML格式

	<?xml version="1.0" encoding="UTF-8"?> 
	<response>
		<deals>
			<deal>
				<id>bjwe</id>
				<divisionName>北京</divisionName>
				<title>仅售58元！原价130元的嘉佳羊蝎子双人套餐（小锅羊蝎子+香菇+面片+多种菜品任选5份+自制酸梅汤）。蒲安里/刘家窑两店通用。和美味的羊蝎子相比，吃相又算什么？</title>
				<category>餐饮美食</category>
				<isSoldOut>false</isSoldOut>
				<soldQuantity>120</soldQuantity>
				<quantity>0</quantity>
				<url>http://bj.meituan.com/deal/253724.html</url>
                        	<siteName>美团北京站</siteName>
                        	<siteUrl>http://bj.meituan.com</siteUrl>
				<smallImageUrl>http://p1.meituan.com/deal/201012/30/lthbxj00.jpg</smallImageUrl>
				<mediumImageUrl>http://p1.meituan.com/deal/201012/30/lthbxj00.jpg</mediumImageUrl>
				<largeImageUrl>http://p1.meituan.com/deal/201012/30/lthbxj00.jpg</largeImageUrl>
				<tippedAt>1301147806</tippedAt>
				<tippingPoint>400</tippingPoint>
				<isTipped>true</isTipped>
				<startAt>1301149806</startAt>
				<endAt>1301147806</endAt>
				<expiresAt>1301157806</expiresAt>
				<price>200</price>
				<value>500</value>
				<details><![CDATA[ 有效期3个月， 2011.3.22 至 2011.6.22;营业时间：10:30-22:00;请至少提前1天致电预约 ]]> </details>
				<postRequired>false</postRequired>
				<merchantName>嘉佳羊蝎子</merchantName>
				<merchantUrl>http://www.jjyxz.com</merchantUrl>
				<locations>
					<location>
						<name>嘉佳羊蝎子(刘家窑店)</name>
						<address>北京市丰台区东铁营215号</address>
						<lat>39.904667</lat>
						<lng>116.408198</lng>
						<mapUrl>http://ditu.google.cn/maps/ms?ie=UTF8&hl=zh-CN&msa=0&msid=204433898138981275802.00049ebe9a5d539b83f1d&brcurrent=3,0x31508e64e5c642c1:0x951daa7c349f366f,1%3B5,0,1&ll=39.856124,116.420231&spn=0.038084,0.055189&z=14&iwloc=00049ebe9ecb8ebf8e663</mapUrl>
						<dpShopId>4562008</dpShopId>
						<tel>010-12345678</tel>
						<mobile>138123456789</mobile>
					</location>
					<location>
						<name>嘉佳羊蝎子(蒲安里店)</name>
						<address>北京市丰台区蒲安里4号楼</address>
						<lat>39.904667</lat>
						<lng>116.408198</lng>
						<mapUrl>http://ditu.google.cn/maps/ms?ie=UTF8&hl=zh-CN&msa=0&msid=204433898138981275802.00049ebe9a5d539b83f1d&brcurrent=3,0x31508e64e5c642c1:0x951daa7c349f366f,1%3B5,0,1&ll=39.856124,116.420231&spn=0.038084,0.055189&z=14&iwloc=00049ebe9ecb8ebf8e663</mapUrl>
						<dpShopId>3632377</dpShopId>
						<tel>010-12345678</tel>
						<mobile>138123456789</mobile>
					</location>
				</locations>
			</deal>
		</deals>
	</response>

####JSON格式
	
	{
	  "deals": [{
			"id": "bjwe",
			"divisionName": "北京", 
			"title": "仅售58元！原价130元的嘉佳羊蝎子双人套餐（小锅羊蝎子+香菇+面片+多种菜品任选5份+自制酸梅汤）。蒲安里/刘家窑两店通用。和美味的羊蝎子相比，吃相又算什么？",
			"category": "餐饮美食",
			"isSoldOut": false,
			"soldQuantity": 120,
			"quantity": 0,
			"url": "http://bj.meituan.com/deal/253724.html",
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
			"details": "有效期3个月， 2011.3.22 至 2011.6.22;营业时间：10:30-22:00;请至少提前1天致电预约",
			"postRequired": false,
			"merchantName": "嘉佳羊蝎子",
			"merchantUrl": "http://www.jjyxz.com",
			"locations":[
				{
					"name": "嘉佳羊蝎子(刘家窑店)", 
					"address": "北京市丰台区东铁营215号", 
					"lat": 39.904667, 
					"lng": 116.408198, 
					"mapUrl": "http://ditu.google.cn/maps/ms?ie=UTF8&hl=zh-CN&msa=0&msid=204433898138981275802.00049ebe9a5d539b83f1d&brcurrent=3,0x31508e64e5c642c1:0x951daa7c349f366f,1%3B5,0,1&ll=39.856124,116.420231&spn=0.038084,0.055189&z=14&iwloc=00049ebe9ecb8ebf8e663", 
					"dpShopId": "4562008",
					"tel": "010-12345678", 
					"mobile": "138123456789"
				},
				{
					"name": "嘉佳羊蝎子(蒲安里店)", 
					"address": "北京市丰台区蒲安里4号楼", 
					"lat": 39.904667, 
					"lng": 116.408198, 
					"mapUrl": "http://ditu.google.cn/maps/ms?ie=UTF8&hl=zh-CN&msa=0&msid=204433898138981275802.00049ebe9a5d539b83f1d&brcurrent=3,0x31508e64e5c642c1:0x951daa7c349f366f,1%3B5,0,1&ll=39.856124,116.420231&spn=0.038084,0.055189&z=14&iwloc=00049ebe9ecb8ebf8e663", 
					"dpShopId": "3632377",
					"tel": "010-12345678", 
					"mobile": "138123456789"
				}
			]
		}]
	}


<div name="desc" id="desc"></div>
###团购字段说明

属性			|类型		|描述	
------------------------|---------------|-----------
id			|String		|必需，团购唯一ID
divisionName		|String		|必需，团购区域名称（国内城市名称，网购类可写"全国"）
title			|String		|必需，团购显示标题(140字内)
category		|String		|分类: 餐饮美食,休闲娱乐,运动健身,教育培训,旅游酒店,美容保健,医疗健康,便民服务,车辆服务,时尚购物,开心抽奖。[分类信息参考口碑网](http://bendi.koubei.com/beijing/searchstore)	
isSoldOut		|Boolean	|必需，是否已售完	
soldQuantity		|Number		|必需，卖出数量	
quantity		|Number		|必需，商品总量，无限量为0	
url			|String		|必需，此商品链接，采用商品唯一链接
siteName		|String		|该商品所链接的分站名称，没有则默认为网站名称
siteUrl			|String		|该商品所链接的分站地址，没有则默认为网站首页地址
smallImageUrl		|String		|小图片地址(约120x72像素)
mediumImageUrl		|String		|必需，一般图片地址(约200x120像素，供iphone等手机设备显示)
largeImageUrl		|String		|必需，大图片地址(约440x264像素，供电脑终端显示)
isTipped		|Boolean	|是否超过最低团购数
tippedAt		|String		|超过最低团购数时间
tippingPoint		|Number		|最低团购数量
startAt			|String		|必需，团购开始时间
endAt			|String		|必需，团购结束时间
expiresAt		|String		|团购的商品过期
price			|Number		|必需，团购价格	
value			|Number		|必需，商品实际价格	
details			|String		|备注资料(多条可使用回车换行)
postRequired		|Boolean	|是否需要邮寄，默认不需要
merchantName		|String		|必需，团购提供商名称
merchantUrl		|String		|团购提供商网址
locations		|Array		|重要，各分店位置，可有多个，网站默认按照位置远近排序，网购类可以不填(将在分类和搜索中显示)

###位置参数说明

由于折街网默认通过位置排序商品，没有位置信息的商品将被排在最后或者不显示，所以提供准确的位置以及经纬度很重要，如果搜集商家经纬度信息存在难度，可只提供该店在点评网的id，或者准确的店铺名称。名称参考[点评网](http://www.dianping.com)，比如：嘉佳羊蝎子(蒲安里店)

属性			|类型		|描述	
------------------------|---------------|-----------
name			|String		|如果有位置必填，店铺名称(分店名称)，名称参考[点评网](http://www.dianping.com)
address			|String		|如果有位置必填，Google地图标准地址(用于地图搜索)
lat			|Number		|重要，纬度，[查看获取方法](/latlng/)
lng			|Number		|重要，经度
mapUrl			|String		|google地图分享链接，[查看分享链接获得方法](/latlng/#link)
dpShopId		|String		|团购商家的大众点评shopid
tel			|String		|固定电话
mobile			|String		|移动电话


###插件

最土网团购程序请参考 [折街网数据收录 (最土网API插件)](/zuituapi/)


[ISO_8601]: http://zh.wikipedia.org/zh-cn/ISO_8601
[json]: http://json.org

