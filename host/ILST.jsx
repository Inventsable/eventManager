var doc;
var exist = app.documents.length > 0;

function docName() {
  var data = {
    name: "none",
    path: "none"
  };
  var newData = [];
  if (exist) {
    doc = app.activeDocument;
    newData.push(doc.name);
    newData.push(doc.path);
    return newData;
  }
}

function doesExist() {
  if (app.documents.length > 0) {
    doc = app.activeDocument;
    return true;
  } else {
    return false;
  }
}

function runScript(path) {
  $.evalFile(path)
}
