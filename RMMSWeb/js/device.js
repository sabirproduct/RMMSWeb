let Device = function (PageName) {
    let name = PageName;
    let device = {};

    device.getHeight = function () {
        return window.innerHeight;
    };
    device.getWidth = function () {
        return $(window).width();
    };
    //xs < 768
    //sm < 992
    //md < 1200
    device.BootstrapGrid = function () {
        if ($(window).width() < 500) {
            return "xxs";
        }
        else if ($(window).width() < 768) {
            return "xs";
        }
        else if ($(window).width() < 992) {
            return "sm";
        }
        else if ($(window).width() < 1200) {
            return "md";
        }
        else {
            return "lg";
        }
    };

    device.BootstrapGridClass = function (ClassName) {
        if ($(window).width() < 768) {
            return "xs";
        }
        else if ($(window).width() < 992) {
            return "sm";
        }
        else if ($(window).width() < 1200) {
            return "md";
        }
        else {
            return "lg";
        }
    };


    device.getProperty = function (propertyName) {
        return objText[propertyName];
    };
    device.BootstrapGridText = function (objID) {
        if ($(window).width() < 768) {
            return objText[objID + "-xs"];
        }
        else if ($(window).width() < 992) {
            return objText[objID + "-sm"];
        }
        else if ($(window).width() < 1200) {
            return objText[objID + "-md"];
        }
        else {
            return objText[objID + "-lg"];
        }
    };
    device.getLayoutType = function () {
        if ($(window).height() < $(window).width()) {
            //landscape
            return 'landscape';
        }
        else {
            //portrait
            return 'portrait';
        }
    };
    device.getBrowserName = function () {
        let ua = navigator.userAgent;
        if (ua.search("Chrome") > -1) {
            return "Chrome";
        }
        else if (ua.search("OmniWeb") > -1) {
            return "OmniWeb";
        }
        else if (ua.search("Apple") > -1) {
            return "Apple";
        }
        else if (ua.search("Opera") > -1) {
            return "Opera";
        }
        else if (ua.search("iCab") > -1) {
            return "iCab";
        }
        else if (ua.search("KDE") > -1) {
            return "KDE";
        }
        else if (ua.search("Firefox") > -1) {
            return "Firefox";
        }
        else if (ua.search("Camino") > -1) {
            return "Camino";
        }
        else if (ua.search("Netscape") > -1) {
            return "Netscape";
        }
        else if (ua.search("MSIE") > -1) {
            return "MSIE";
        }
        else if (ua.search("Gecko") > -1) {
            return "Gecko";
        }
        else if (ua.search("Mozilla") > -1) {
            return "Mozilla";
        }
        else {
            return "Other";
        }
    };
    device.getOsName = function () {
        let ua = navigator.platform
        let uaa = navigator.userAgent;
        if (ua.search("Win") > -1) {
            if (uaa.search("WOW64") > -1) {
                return "Windows64";
            }
            return "Windows";
        }
        else if (ua.search("Mac") > -1) {
            return "Mac";
        }
        else if (ua.search("iPhone") > -1) {
            return "ios";
        }
        else if (ua.search("Linux") > -1) {
            return "linux";
        }
        else {
            return "Other";
        }
    };
    device.isMobile = function () {
        if (navigator.userAgent.match(/Android/i) ||

            navigator.userAgent.match(/BlackBerry/i) ||

            navigator.userAgent.match(/iPhone|iPad|iPod/i) ||

            navigator.userAgent.match(/Opera Mini/i) ||

            navigator.userAgent.match(/IEMobile/i)) {
            return true;
        }
        else {
            return false;
        }
    };

    device.MobileOS = function () {
        if (navigator.userAgent.match(/Android/i)) {
            return "Android";
        }
        else if (navigator.userAgent.match(/webOS/i)) {
            return "webOS";
        }
        else if (navigator.userAgent.match(/iPhone/i)) {
            return "iPhone";
        }
        else if (navigator.userAgent.match(/iPad/i)) {
            return "iPad";
        }
        else if (navigator.userAgent.match(/iPod/i)) {
            return "iPod";
        }
        else if (navigator.userAgent.match(/BlackBerry/i)) {
            return "BlackBerry";
        }
        else if (navigator.userAgent.match(/Windows Phone/i)) {
            return "Windows Phone";
        }
        else {
            return "";
        }
    };


    let objText = {};
    objText["btnAssetAllocationModels-xs"] = "Models";
    objText["btnAssetAllocationModels-sm"] = "AA Models";
    objText["btnAssetAllocationModels-md"] = "Allocation Models";
    objText["btnAssetAllocationModels-lg"] = "Asset Allocation Models";
    //btnCompleteWizard
    objText["btnCompleteWizard-xs"] = "Wizard";
    objText["btnCompleteWizard-sm"] = "Setup Wizard";
    objText["btnCompleteWizard-md"] = "Complete Setup Wizard";
    objText["btnCompleteWizard-lg"] = "Complete Setup Wizard";
    //btnRiskAssessment
    objText["btnRiskAssessment-xs"] = "Risk Assessment";
    objText["btnRiskAssessment-sm"] = "Risk Assessment";
    objText["btnRiskAssessment-md"] = "Risk Tolerance Assessment";
    objText["btnRiskAssessment-lg"] = "Risk Tolerance Assessment";
    //btnPortfolioModels
    objText["btnPortfolioModels-xs"] = "Portfolios";
    objText["btnPortfolioModels-sm"] = "Portfolios";
    objText["btnPortfolioModels-md"] = "Portfolio Models";
    objText["btnPortfolioModels-lg"] = "Portfolio Models";
    //btnAdvisorFilings
    objText["btnAdvisorFilings-xs"] = "Filings";
    objText["btnAdvisorFilings-sm"] = "Advisor Filings";
    objText["btnAdvisorFilings-md"] = "Investment Advisor Filings";
    objText["btnAdvisorFilings-lg"] = "AdvisorFilings";
    //btnInvestmentAgreements
    objText["btnInvestmentAgreements-xs"] = "Agreements";
    objText["btnInvestmentAgreements-sm"] = "Advisor Agreements";
    objText["btnInvestmentAgreements-md"] = "Investment Advisor Agreements";
    objText["btnInvestmentAgreements-lg"] = "Investment Advisor Agreements";
    //btnOpenAccount
    objText["btnOpenAccount-xs"] = "Open Account";
    objText["btnOpenAccount-sm"] = "Open Account";
    objText["btnOpenAccount-md"] = "Open New Account";
    objText["btnOpenAccount-lg"] = "Open New Account";



    //1.1 class  upgrades

    device.GenerateUUID = function () {
        let d = new Date().getTime();
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        //alert(uuid);
        return uuid;
    };
    // Read a page's GET URL variables and return them as an associative array.

    device.GetQS_Value = function (_URL, _QS) {
        let querystrings;

        if (_URL.indexOf('?') === -1) {
            return false;
        }
        console.log(_URL.indexOf('?'));
        let vars = [], hash;
        console.log("259");
        let hashes = _URL.slice(_URL.indexOf('?') + 1).split('&');
        console.log(hashes[1]);
        for (let i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            let qObject = {};
            qObject.varName = hash[0];
            qObject.varValue = hash[1];
            vars.push(qObject);
        }
        querystrings = vars;

        let val = 'false';
        if (querystrings === false) {
            return val;
        }
        for (let i1 = 0; i1 < querystrings.length; i1++) {
            if (querystrings[i1].varName === _QS) {
                val = querystrings[i1].varValue;
            }
        }
        return val;
    };

    return device;
};




