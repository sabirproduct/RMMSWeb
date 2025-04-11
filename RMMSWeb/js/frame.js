/// <reference path="windowpane.js" />

//key to this object is the source_page
//the url is the key to the app
//the millisecond is the key to the instance
//pass in a json object
//parameters--
//ApplicationName -> string
//DialogTitle -> string
//BiztalkId -> int
//Epoint -> int
//DialogName -> string
//BaseModel -> string
//

let Frame = function (FrameObject) {
    let _Frame = {};
    _Frame.id = 'Frame_' + new Date().getTime().toString();
    /// add a switch statement for mapping the applicationName to the iframeAddress
    let applicationName = FrameObject.applicationName;
    let iframeSrc = '';
    let iconClass = 'fa-duotone fa-chart-pie-simple';
    switch (applicationName) {
        case 'americansRetirement': {
            iframeSrc = 'https://biztalks.azurewebsites.net/americansretirement/pages/index.html';
            _Frame.autoOpen = false;
            _Frame.width = 600;
            _Frame.height = 600;
            _Frame.title = FrameObject.title;
            _Frame.resizable = true;
            _Frame.modal = false;
            _Frame.restoredHeight = 0;
            _Frame.restoredWidth = 0;
            _Frame.restoredTop = 0;
            _Frame.restoredLeft = 0;
            _Frame.iconClass = 'far fa-flag-usa';
            
            break;
        }
        case 'riskAssessment': {
            iframeSrc = 'https://biztalks.azurewebsites.net/americansretirement/Pages/Matriculate/BT-IFrame-RiskAssessment.html';
            _Frame.autoOpen = false;
            _Frame.width = 700;
            _Frame.height = 740;
            _Frame.title = FrameObject.title;
            _Frame.resizable = false;
            _Frame.modal = false;
            _Frame.restoredHeight = 0;
            _Frame.restoredWidth = 0;
            _Frame.restoredTop = 0;
            _Frame.restoredLeft = 0;
            _Frame.iconClass = 'far fa-user-chart';
            break;
        }
        case 'selectModel': {
            iframeSrc = 'https://biztalks.azurewebsites.net/americansretirement/Pages/Members/portfoliomodels.html';
            _Frame.autoOpen = false;
            _Frame.width = 1000;
            _Frame.height = 500;
            _Frame.title = FrameObject.title;
            _Frame.resizable = false;
            _Frame.modal = false;
            _Frame.restoredHeight = 0;
            _Frame.restoredWidth = 0;
            _Frame.restoredTop = 0;
            _Frame.restoredLeft = 0;
            _Frame.iconClass = 'fa-duotone fa-radar';
            break;
        }
        case 'selectAdvisor': {
            iframeSrc = 'https://biztalks.azurewebsites.net/americansretirement/Pages/Members/pensionadvisors.html';
            _Frame.autoOpen = false;
            _Frame.width = 1000;
            _Frame.height = 500;
            _Frame.title = FrameObject.title;
            _Frame.resizable = false;
            _Frame.modal = false;
            _Frame.restoredHeight = 0;
            _Frame.restoredWidth = 0;
            _Frame.restoredTop = 0;
            _Frame.restoredLeft = 0;
            _Frame.iconClass = 'fa-duotone fa-users-viewfinder';
            break;
        }
        case 'showBiztalk': {
            if (FrameObject.epoint == null || FrameObject.epoint == undefined) {
                iframeSrc = `https://biztalks.azurewebsites.net/${FrameObject.id}`;
            }
            else {
                iframeSrc = `https://biztalks.azurewebsites.net/${FrameObject.id}?epoint=${FrameObject.epoint}`;
            }
            _Frame.autoOpen = false;
            _Frame.width = 1000;
            _Frame.height = 700;
            _Frame.title = FrameObject.title;
            _Frame.resizable = false;
            _Frame.modal = false;
            _Frame.restoredHeight = 0;
            _Frame.restoredWidth = 0;
            _Frame.restoredTop = 0;
            _Frame.restoredLeft = 0;
            _Frame.iconClass = 'far fa-user-chart';
            break;
        }
        case 'viewEquities': {
            iframeSrc = `https://biztalks.azurewebsites.net/americansretirement/pages/members/viewstocks.html`;
            _Frame.autoOpen = false;
            _Frame.width = 1000;
            _Frame.height = 700;
            _Frame.title = FrameObject.title;
            _Frame.resizable = false;
            _Frame.modal = false;
            _Frame.restoredHeight = 0;
            _Frame.restoredWidth = 0;
            _Frame.restoredTop = 0;
            _Frame.restoredLeft = 0;
            _Frame.iconClass = 'fa-duotone fa-chart-line-up';
            break;
        }
        case 'createProfile': {
            iframeSrc = `https://biztalks.azurewebsites.net/americansretirement/pages/members/createprofile.html?dialogname=${FrameObject.id}`;
            _Frame.autoOpen = false;
            _Frame.width = 600;
            _Frame.height = 600;
            _Frame.title = FrameObject.title;
            _Frame.resizable = false;
            _Frame.modal = false;
            _Frame.restoredHeight = 0;
            _Frame.restoredWidth = 0;
            _Frame.restoredTop = 0;
            _Frame.restoredLeft = 0;
            _Frame.iconClass = 'fa-duotone fa-address-card';
            break;
        }
        case 'memberLogin': {
            iframeSrc = `https://biztalks.azurewebsites.net/americansretirement/pages/members/memberlogin.html?dialogname=${FrameObject.id}`;
            _Frame.autoOpen = false;
            _Frame.width = 600;
            _Frame.height = 400;
            _Frame.title = FrameObject.title;
            _Frame.resizable = false;
            _Frame.modal = false;
            _Frame.restoredHeight = 0;
            _Frame.restoredWidth = 0;
            _Frame.restoredTop = 0;
            _Frame.restoredLeft = 0;
            _Frame.iconClass = 'far fa-user-chart';
            break;
        }
        case 'assetAllocationBaseModels': {
            iframeSrc = `https://biztalks.azurewebsites.net/americansretirement/pages/members/baseassetallocationmodels.html`;
            _Frame.autoOpen = false;
            _Frame.width = 1100;
            _Frame.height = 720;
            _Frame.title = FrameObject.title;
            _Frame.resizable = true;
            _Frame.modal = false;
            _Frame.restoredHeight = 0;
            _Frame.restoredWidth = 0;
            _Frame.restoredTop = 0;
            _Frame.restoredLeft = 0;
            _Frame.iconClass = 'far fa-pie-chart';
            break;
        }
        case 'assetAllocationBaseModelChart': {
            iframeSrc = `https://biztalks.azurewebsites.net/americansretirement/pages/members/baseassetallocationchart.html?basemodel=${FrameObject.basemodel}`;
            _Frame.autoOpen = false;
            _Frame.width = 500;
            _Frame.height = 500;
            _Frame.title = FrameObject.title;
            _Frame.resizable = true;
            _Frame.modal = false;
            _Frame.restoredHeight = 0;
            _Frame.restoredWidth = 0;
            _Frame.restoredTop = 0;
            _Frame.restoredLeft = 0;
            _Frame.iconClass = 'far fa-pie-chart';
            break;
        }
        case 'videoMeeting': {
            iframeSrc = `https://biztalks.azurewebsites.net/americansretirement/pages/members/adhoc-videomeeting.html`;
            _Frame.autoOpen = false;
            _Frame.width = 1000;
            _Frame.height = 700;
            _Frame.title = FrameObject.title;
            _Frame.resizable = false;
            _Frame.modal = false;
            _Frame.restoredHeight = 0;
            _Frame.restoredWidth = 0;
            _Frame.restoredTop = 0;
            _Frame.restoredLeft = 0;
            _Frame.iconClass = 'far fa-video';
            break;
        }
    }

    _Frame.src = iframeSrc;/// address of the iframe webpage
    if (applicationName === 'showBiztalk') {
        _Frame.injectableCode = `<div id="${_Frame.id}" class="popup shadow" style="border-radius:8px;position:absolute;top:10px; left:10px;width: ${_Frame.width + 20}px; height: ${_Frame.height + 20}px; display:none; z-index: ${getNewTopFrameZIndex()}; padding:10px"> <nav onclick="changeZIndex('${_Frame.id}')" id="nav_${_Frame.id}" style="border-top-left-radius:8px;border-top-right-radius:8px;height:50px;width: ${_Frame.width}px;" class=""> <a style="position:absolute;top:0px;left:10px" id="title_${_Frame.id}" class="navbar-brand" href="#"><i style="color:black" class="${_Frame.iconClass}"></i> ${_Frame.title}</a> <div style="position:absolute;height:50px;right:10px;top:5px;width:250px"><div style="position:absolute;right:0px"><button style="background-color: rgb(126, 126, 126);"  id="btnFrameMinimize_${_Frame.id}" class="btn btn-sm btn-secondary" onclick="event.preventDefault();minimizeFrame('${_Frame.id}')" ><i class="fa-solid fa-window-minimize"></i></button> <button style="background-color: rgb(126, 126, 126);"  id="btnFrameClose_${_Frame.id}" class="btn btn-sm btn-secondary" onclick="event.preventDefault();closeFrame('${_Frame.id}');"><i class="fa-solid fa-circle-xmark"></i></button></div></nav> <iframe id="iframe_${_Frame.id}" src="" scrolling="no" style="margin-left:0px;width:1000px;height:600px; overflow:hidden"></iframe></div>`;

    }
    else {
        _Frame.injectableCode = `<div id="${_Frame.id}" class="popup shadow" style="border-radius:8px;position:absolute;top:10px; left:10px;width: ${_Frame.width + 20}px; height: ${_Frame.height + 20}px; display:none;z-index: ${getNewTopFrameZIndex()}; padding:10px"> <nav onclick="changeZIndex('${_Frame.id}')" id="nav_${_Frame.id}" style="border-radius:8px;margin-bottom:10px;height:50px;width: ${_Frame.width}px;" class="navbar navbar-dark"> <a style="position:absolute;top:0px;left:10px" id="title_${_Frame.id}" class="navbar-brand" href="#"><i style="color:black" class="${_Frame.iconClass}"></i> ${_Frame.title}</a> <div style="position:absolute;height:50px;right:10px;top:5px;width:250px"><div style="position:absolute;right:0px"><button style="background-color: rgb(126, 126, 126);" id="btnFrameMinimize_${_Frame.id}" class="btn btn-sm btn-secondary" onclick="event.preventDefault();minimizeFrame('${_Frame.id}')" ><i class="fa-solid fa-window-minimize"></i></button>  <button style="background-color: rgb(126, 126, 126);"  id="btnFrameMaximize_${_Frame.id}" class="btn btn-sm btn-secondary" onclick="event.preventDefault();maximizeFrame('${_Frame.id}')"><i class="fa-solid fa-window-maximize" id="iconFrameMaximize_${_Frame.id}"></i></button>  <button style="background-color: rgb(126, 126, 126);"  id="btnFrameClose_${_Frame.id}" class="btn btn-sm btn-secondary" onclick="event.preventDefault();closeFrame('${_Frame.id}');"><i class="fa-solid fa-circle-xmark"></i></button></div></div> </nav> <iframe id="iframe_${_Frame.id}" src="" style="margin-left:10px;width: ${_Frame.width-20}px; height: ${_Frame.height - 60}px;overflow:hidden"></iframe></div>`;

    }

    /// visible|minimized|absent|null
    _Frame.displayState = null;

    return _Frame;
}