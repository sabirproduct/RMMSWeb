
let Frame = function (FrameObject) {
    let _Frame = {};
    _Frame.id = 'Frame_' + new Date().getTime().toString();
    /// add a switch statement for mapping the applicationName to the iframeAddress
    // let applicationName = FrameObject.applicationName;
    let iframeSrc = '';
    let json = FrameObject.json? FrameObject.json : '';
    // let iconClass = 'fa-duotone fa-chart-pie-simple';
    if(FrameObject.json){
        iframeSrc = `./components/${FrameObject.pageName}.html?json=${FrameObject.json}`;
    }
    else{
        iframeSrc = `./components/${FrameObject.pageName}.html`;
    }
    
    _Frame.width = window.innerWidth;
    _Frame.autoOpen = false;
    _Frame.height = window.innerHeight;
    _Frame.title = FrameObject.title.toUpperCase();
    _Frame.resizable = true;
    _Frame.modal = false;
    _Frame.restoredHeight = 0;
    _Frame.restoredWidth = 0;
    _Frame.restoredTop = 0;
    _Frame.restoredLeft = 0;
    _Frame.iconClass = 'fa-solid fa-circle-user';
    _Frame.zindex = getNewTopFrameZIndex();/// address of the iframe webpage
    _Frame.injectableCode = `<div id="${_Frame.id}" class="popup" style="border-radius:0px;position:absolute;top:0px; left:0px;width: ${_Frame.width - 0}px; height: ${_Frame.height}px; display:none;z-index: ${_Frame.zindex}; padding:10px"><nav onclick="changeZIndex('${_Frame.id}')" id="nav_${_Frame.id}" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius:0px;margin-bottom:10px;height:55px;width:${_Frame.width-20}px;" class="navbar navbar-dark"><a style="position:absolute;top:0px;right:10px" id="title_${_Frame.id}" class="navbar-brand" href="#"></a><span style="top:0px;text-align:center;color:white;margin-top:-5px;width:100%">${_Frame.title}</span><i class="bi bi-x-circle" onclick="event.preventDefault();closeFrame('${_Frame.id}');" style="font-size:2rem;position:absolute;color:red;float:right;padding-right:10px"></i></nav><iframe id="iframe_${_Frame.id}" src="${iframeSrc}" style="margin-left:10px;width: ${_Frame.width-40}px; height: ${_Frame.height - 80}px;overflow-x:auto;overflow-y:auto" allowfullscreen></iframe></div>`;
    /// visible|minimized|absent|null
    _Frame.displayState = null;

    return _Frame;
}