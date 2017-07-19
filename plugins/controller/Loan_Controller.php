<?php

class Loan_Controller extends ControllerBase {

	/*
		获取超市产品信息列表
	 */
	public function getLoanInfo(RequestData $req) {
		$user = \User::getCurrentUserData();
		$source = \ListOrder::getChannelBySrc();
		$result = \ListOrder::getUserListOrder($source, $user);

		return \ResponseData::createDefault($req)->params($result)->jsonmode(true);
	}

	/*
		获取结果承接页产品信息
		目前只展示百姓信贷助手、东方融资、快来钱
	 */
	public function getResultPageLoanInfo(RequestData $req) {
		$result = [];
		$recProductsName = ['dongfang', 'bxleads', 'klqian'];
		$recProducts = find('LoanProduct', new \InQuery('name', $recProductsName));

		foreach ($recProducts as $product) {
			$result[$product->name] = [
				'base' => $product->base,
				'default' => $product->extension['default'],
			];
		}

		return \ResponseData::createDefault($req)->params($result)->jsonmode(true);
	}

	/*
		获取单个产品的默认参数和范围
	 */
	public function getProductLimit(RequestData $req) {
		$name = $req->get('type'); // 目前只会有dongfang和bxleads
		if (!$name) {
			$name = 'bxleads';
		}

		$loanProduct = findOne('LoanProduct', new \Query('name', $name));

		$rangeLength = count($loanProduct->extension['limit']['period']['range']);
		$loanProduct->extension['limit']['period']['range'][$rangeLength - 1] .= '及以上';

		$res = [
			'limit' => $loanProduct->extension['limit'],
			'default' => $loanProduct->extension['default'],
		];

		return \ResponseData::createDefault($req)->params($res)->jsonmode(true);
	}

	public function productIsExist(RequestData $req) {
		$name = $req->get('type');
		$loanProduct = findOne('LoanProduct', new \Query('name', $name));

		$res = new \Params();
		$res->exist = !!$loanProduct;

		return \ResponseData::createDefault($req)->params($res)->jsonmode(true);
	}

	/*
		获取单个产品信息
	 */
	public function getProductInfo(RequestData $req) {
		$name = $req->get('type');

		$loanProduct = findOne('LoanProduct', new \Query('name', $name));

		$res = [
			'base' => $loanProduct->base,
			'limit' => $loanProduct->extension['limit'],
			'default' => $loanProduct->extension['default'],
		];

		return \ResponseData::createDefault($req)->params($res)->jsonmode(true);
	}

	// 根据贷款金额获取推荐的产品
	public function getRecommendProduct(RequestData $req) {
		$amount = $req->post('amount');

		if ($amount <= 5000) {
			$autoFlowConfig = 'leadsAmountExport1';
		} elseif ($amount < 20000 && $amount > 5000) {
			$autoFlowConfig = 'leadsAmountExport2';
		} else {
			$autoFlowConfig = 'leadsAmountExport2';
		}

		\Cookie::set('_rec_mode', 1, 60 * 5);

		return \ResponseData::createDefault($req)->params(['config' => $autoFlowConfig])->jsonmode(true);
	}
}