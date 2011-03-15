---
layout: default
title: 数据采集接口
---

数据采集接口
=========================

(Deals)
-----------------------------------------

属性			|描述	
------------------------|-----------
isSoldOut		|是否已售完	
soldQuantity		|卖出数量	
quantity		|商品总量，无限量为0	
locations		|true	
tags			|true	

###示例

	{
		"id": "bjwe",
		"title": "售89元！价值140元的龙潭湖冰雪节套票（双人门票+雪橇乐园+雪圈乐园），想念雪的味道吗~",
		"status": "open",
		"isSoldOut": false,
		"soldQuantity": 120,
		"quantity": 0,
		"url": "http://www.meituan.com/beijing/deal/bjlth.html",
		"smallImageUrl": "http://p1.meituan.com/deal/201012/30/lthbxj00.jpg", //5:3 120x72
		"mediumImageUrl": "http://p1.meituan.com/deal/201012/30/lthbxj00.jpg",//200x120 手机访问
		"largeImageUrl": "http://p1.meituan.com/deal/201012/30/lthbxj00.jpg",//440x264
		"tippedAt": "2010-09-24T14:19:15Z", //最低团购
		"tippingPoint": "400",
		"isTipped": true,
		"startAt": "2010-09-24T05:04:00Z",
		"endAt": "2010-09-27T04:59:00Z",
		"expiresAt": "2011-03-28T04:59:00Z",
		"price": 200,
		"value": 500,
		"discount": 300,
		"discountPercent": 40,
		"isLimitedQuantity": true,
		"minimumPurchaseQuantity": 1,
		"maximumPurchaseQuantity": 3,
		"description": "",
		"postRequired": false, //是否邮寄
		"divisionName": "北京", //国内城市名
		"merchantName": "龙潭湖公园",
		"locations":[{id: "", name: "崇文龙潭湖公园", "address": "", "city": "", "state": "", "lat": 39.904667, "lng": 116.408198}],
		"cat": "娱乐", //分类
	}



