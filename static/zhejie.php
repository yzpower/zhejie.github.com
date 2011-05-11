<?php
require_once(dirname(dirname(__FILE__)) . '/app.php');
header('Content-Type: application/xml; charset=UTF-8');

$daytime = strtotime(date('Y-m-d'));
$condition = array( 
	"begin_time <= {$daytime}",
	"end_time > {$daytime}",
);

/* city filter */
$ename = strval($_GET['ename']);
if ($ename && $ename!='none') {
	$city = DB::LimitQuery('category', array(
		'condition' => array(
			'zone' => 'city',
			'ename' => $ename,
		),
		'one' => true,
	));
}
if ($ename||$city) {
	$city_id = abs(intval($city['id']));
	$condition[] = "((city_ids like '%@{$city_id}@%' or city_ids like '%@0@%') or city_id in(0,{$city_id}))";
}
/* end city filter */

$teams = DB::LimitQuery('team', array(
	'condition' => $condition,
	'order' => 'ORDER BY sort_order DESC, id DESC',
));

$oa = array();
$si = array(
	'sitename' => $INI['system']['sitename'],
	'wwwprefix' => $INI['system']['wwwprefix'],
	'imgprefix' => $INI['system']['imgprefix'],
);

foreach($teams AS $one) {
	$city = Table::Fetch('category', $one['city_id']);
	$group = Table::Fetch('category', $one['group_id']);
	$partner = Table::Fetch('partner', $one['partner_id']);
	$item = array(
		"id" => $one['id'],
		"divisionName" => $city['name'] ? $city['name'] : '全国', 
		"title" => $one['title'],
		//"category" => "餐饮美食",
		//"isSoldOut" => false,
		"soldQuantity" => abs(intval($one['now_number'])),
		"quantity" => abs(intval($one['max_number'])),
		"url" => $si['wwwprefix'] . "/team.php?id={$one['id']}",
		"siteName" => $INI['system']['sitename'],
		"siteUrl" => $INI['system']['wwwprefix'],
		//"smallImageUrl" => "", //5:3 120x72
		//"mediumImageUrl" => "",//200x120 
		"largeImageUrl" => team_image($one['image'], true),//440x264
		//"tippedAt" => "1301147806",
		//"tippingPoint" => 400,
		//"isTipped" => true,
		"startAt" => $one['begin_time'],
		"endAt" => $one['end_time'],
		"expiresAt" => $one['expire_time'],
		"price" => $one['team_price'],
		"value" => $one['market_price'],
		//"details" => $one['detail'],
		"postRequired" => ($one['delivery'] == 'express'),
		"merchantName" => $partner['title'],
		"merchantUrl" => $partner['homepage']
	);
	$locs = array();
	$info = $partner['other'] ? $partner['other'] : "";
	$info = preg_replace('/<[^>]*>/i', '', $info);
	preg_match('/分店信息[：:]+\s*([^\.]+)/', $info, $locs);
	$locs = $locs && $locs[1] ? $locs[1] : null;
	$locations = array();
	if( $locs ) {
		$locs = explode('。', $locs);
		$locs = $locs[0];
		$locs = preg_split('/,|，|、/', $locs);
		for ($i = 0; $i < count($locs); $i++) {
			$name = trim($locs[$i]);
			if($name)
				$locations[] = array('name' => $name);
		}
	}elseif( $partner['title'] ){
		$locations = array(
			'name' => $partner['title'],
			'tel' => $partner['phone']
		);
	}
	$item['locations'] = $locations;
	$oa[] = $item;
}

echo json_encode(array('deals' => $oa));
//Output::XmlBaidu(array('deals' => $oa));
