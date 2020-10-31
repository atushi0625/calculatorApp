$(function() {
	// 計算
	var calc = function() {
		var srcTxt = $("#source").val();	// 文字列取得
		var srcArr = srcTxt.split("\n");	// 改行で分割

		var resArr = [];	// 結果格納用の配列
		for (var i = 0; i < srcArr.length; i ++) {
			var src = srcArr[i];	// 1行取得
			if (src == "") continue;	// 空行は飛ばす

			var res;	// 結果用文字列
			try {
				res = eval(src);	// 1行をプログラムとして実行
			} catch(e) {
				res = e;	// エラー時のメッセージ
			}
			resArr.push(src + " = " + res);	// 結果を配列に格納
		}

		var resTxt = resArr.join("\n");	// 配列を改行で結合
		$("#result").val(resTxt);	// 文字列設定
	};

	// ［計算］ボタンのイベントを登録
	$("#btnCalc").click(calc);	// 2018-04-25 btnClac の誤植を btnCalc に修正
});


// let arr = ["日","月","火"];
// for (let i = 0; i < arr.length; i++) {
// 	console.log(i, arr[i]);
// }

// //処理を終えるbreak
// let arr = ["月","火","水","木","金","土","日"];
// for (let i = 0; i < arr.length; i++) {
// 　　　if(arr[i] == "日"){break;}
// 	console.log(i, arr[i]);
// }

//途中の処理を飛ばすcontinue
let arr = ["月","火","水","木","金","土","日"];
for (let i = 0; i < arr.length; i++) {
　　　if(arr[i] == "水"){continue;}
	console.log(i, arr[i]);
}

//while文
let i = 0;
while(i<3){
	console.log(i);
	i++;
}
console.log("終了");