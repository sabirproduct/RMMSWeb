///
function modifyFrame (Frames, filterField, filterValue, field2Modify, modifyValue) {
    $.each(Frames, function (key, value) {
        /*/// filtering
        _Frame.id ///uniqueName
        _Frame.applicationName ///name of application
        _Frame.src /// iframe src url
        _Frame.autoOpen /// bool
        _Frame.width ///integer
        _Frame.height ///integer
        _Frame.title ///applicationName
        _Frame.resizable /// bool
        _Frame.modal /// bool
        /// class names 'no-close'|
        _Frame.class /// names of classes in array
        _Frame.top /// integer
        _Frame.left /// integer
        _Frame.injectableCode /// code injected into the body of main viewport
        /// visible|minimized|absent|null
        _Frame.displayState 
        _Frame.restoredHeight = int => restore height to;
        _Frame.restoredWidth = int => restore width to;
        _Frame.restoredTop = int => restore top to;
        _Frame.restoredLeft = int => restore left to;
        */

        switch (filterField) {
            /// di`/////splayState: visible|minimized|absent|null
            case "id": {
                if (value.id === filterValue) {
                    value[field2Modify] = modifyValue;
                    return false;
                }
                break;
            }
        }

    });
    return true;
}

function getFrame (Frames, id) {
    let Frame = null;
    $.each( Frames, function( key, value ) {
        if(value.id === id)
        {
            Frame = value;
        }
    });
return Frame;
}

function setFrameLocation (Frames, id, top, left, height, width) {
    let frame = null;
    $.each( Frames, function( key, value ) {
        if(value.id === id)
        {
            value.restoredHeight = height;
            value.restoredWidth = width;
            value.restoredTop = parseInt(top.toString().substring(0, top.length - 2));
            value.restoredLeft = parseInt(left.toString().substring(0, left.length - 2));
        }
    });
return Frame;
}

function getFrameZIndex (Frames, id) {
    let Frame = null;
    $.each( Frames, function( key, value ) {
        
    });
return Frame;
}
