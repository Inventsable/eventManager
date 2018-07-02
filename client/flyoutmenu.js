var csInterface = new CSInterface();
var appName = csInterface.hostEnvironment.appName;
var logPath = csInterface.getSystemPath(SystemPath.EXTENSION) + "/log/";

  var menuXML = '<Menu> \
    <MenuItem Id="refresh" Label="Refresh panel" Enabled="true" Checked="false"/> \
    \
    <MenuItem Label="---" /> \
    \
  </Menu>';

csInterface.setPanelFlyoutMenu(menuXML);
csInterface.addEventListener("com.adobe.csxs.events.flyoutMenuClicked", setPanelCallback);

function setPanelCallback(event) {
  if (event.data.menuId == "refresh") {
    location.reload();
  }
}
