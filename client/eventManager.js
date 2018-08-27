(function () {
  'use strict';

  var csInterface = new CSInterface();


  var sendName = document.getElementById('sendName');
  var sendData = document.getElementById('sendData');
  var receiveName = document.getElementById('receiveName');
  var receiveData = document.getElementById('receiveData');
  var sendBtn = document.getElementById('sendBtn');


  sendBtn.addEventListener("click", function(evt){
  	dispatchEvent(sendName.value, sendData.value)
  }, false);

  dispatchEvent("com.playwrite.console", "Testing")

  function dispatchEvent(name, data) {
  	var event = new CSEvent(name, 'APPLICATION');
  	event.data = data;
  	csInterface.dispatchEvent(event);
  }

  csInterface.addEventListener('mighty.rollcall', function(evt) {
    dispatchEvent('mighty.rollanswer', extFolder())
  });

  function extFolder(){
    var str = csInterface.getSystemPath(SystemPath.EXTENSION);
    var parent = str.substring(str.lastIndexOf('/') + 1, str.length);
    return parent;
  }

  inputs.forEach(function(v,i,a) {
  	if (v.id[0] === 's') {
  		v.addEventListener("keyup", function(evt){
  			if (evt.key == 'Enter') {
          dispatchEvent(sendName.value, sendData.value)
  			}
  		}, true)
  	} else {
      v.addEventListener("keyup", function(evt){
        console.log("listen to this");
      })
    }
  });



console.log(window.CSEvent);
console.log(csInterface);


  // var name = sendData.value;
  // var data = sendData.value;
  // var e = new CSEvent(name, 'APPLICATION');
  // e.data = data;
  // csInterface.dispatchEvent(e);
  // console.log("dispatched");


  // function dispatch(name, data) {
  //   var e = new CSEvent(
  //     name,
  //     'APPLICATION',
  //     csInterface.getApplicationID(),
  //     csInterface.getExtensionID()
  //   );
  //   console.log(e);
  //   e.data = data;
  //   csInterface.dispatchEvent(e)
  // }


  // function removejsx(filename, filetype){
  //     var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
  //     var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
  //     var allsuspects=document.getElementsByTagName(targetelement)
  //     for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
  //     if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
  //         allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
  //     }
  // }


  // csInterface.addEventListener('com.playwrite.init', function(evt) {
  //   console.log("Initializing console");
  // });
  //
  // csInterface.addEventListener("com.playwrite.console", function(evt) {
  //   console.log('Data from JSX: ' + evt.data);
  // });

// function allCSEvents(element){
//   var events = [];
//   for (var property in element) {
//       var match = property.match(/^on(.*)/)
//       if (match) {
//           events.push(match[1]);
//       }
//   }
//   console.log(events.join(' '))
// }

  // removejscssfile("somescript.js", "js") //remove all occurences of "somescript.js" on page
  // removejscssfile("somestyle.css", "css") //remove all occurences "somestyle.css" on page


  // csInterface.addEventListener("com.playwrite.clear", function(evt) {
  //
  //     // updateConsole('alert', err.name);
  //     updateHints(err);
  // });


  // // Listener for second event
  // csInterface.addEventListener("Custom Event 2", function(evt) {
  //   console.log('Data from the JSX payload: ' + evt.data);
  //   // "runs" the code that is in the payload
  //   eval(evt.data);
  // });
  //
  // function firstAction(data) {
  //   // do something
  //   console.log(data);
  // }
  //
  // function secondAction() {
  //   // do something
  //   console.log("I'm running...");
  //   var retVal = "something to be returned from JS back to JSX";
  //   csInterface.evalScript("triggerJSXFunction('" + retVal + "')");
  // }

}());
