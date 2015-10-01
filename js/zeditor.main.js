var ZEditor_conf = new Object;
ZEditor_conf.surl = "../";

function ZEditor(container){
	var ZE = new Object;
	ZE.ctnr = $(container);
	ZE.ctnr.load(ZEditor_conf.surl+"tpl/frame.html");
	return ZE;
}