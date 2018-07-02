var csInterface = new CSInterface();
var appSkin = csInterface.hostEnvironment.appSkinInfo;
var sysPath = csInterface.getSystemPath(SystemPath.EXTENSION);
var logPath = csInterface.getSystemPath(SystemPath.EXTENSION) + "/log/";
var hostPath = csInterface.getSystemPath(SystemPath.EXTENSION) + "/host/";



var inputs = document.getElementsByTagName('input');
inputs = [].slice.call(inputs);

// Loading stack from libraries
callDoc();
buildUI();
logSkin(appSkin);
loadBorderWidth();
console.log(`Loading for ${appInfo.name}`);
loadJSX(`json2.jsx`);

var all = {
	data: null
};

// var event = {
// 	send: {
// 		name: "none",
// 		data: "none"
// 	},
// 	receive: {
// 		name: "none",
// 		data: "none"
// 	}
// };

for (value in all) {
	console.log(this);
}
