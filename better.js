let formTabIndex = 0
let phoneMask, mask, otpMask
alert('works');
document.addEventListener('DOMContentLoaded', () => {
    var phone = document.getElementById('phone');
    if(phone){
        var phoneMaskOptions = {
            mask: '994 (00) 000-00-00',
            lazy: false,  // make placeholder always visible
            placeholderChar: '_'
        };
        phoneMask = IMask(phone, phoneMaskOptions);
        setCaretPosition(phone, 0);
    }

    var pin = document.getElementById('pin');
    if(pin){
        var pinMaskOptions = {
            mask: "*******",
            lazy: false,  // make placeholder always visible
            placeholderChar: '_'
        };
        mask = IMask(pin, pinMaskOptions);
        pin.addEventListener("focus", (e) => {
            setCaretPosition(e.target, e.target.value.length);
        });
        setCaretPosition(pin, 0);
    }

    var otp = document.getElementById('otp');
    if(otp){
        var otpMaskOptions = {
            mask: "000000",
            lazy: false,  // make placeholder always visible
            placeholderChar: '_'
        };
        otpMask = IMask(otp, otpMaskOptions);
        setCaretPosition(otp, 0);

        otp.addEventListener("focus", (e) => {
            setCaretPosition(e.target, e.target.value.length);
        });
    }

    const link = document.getElementById("registration-link");
    if(link){
        let src = link.getAttribute("href");
        src += "/az?redirection_url=" + encodeURIComponent(window.location.href);
        link.setAttribute("href", src);
    }

    const alertIcon = document.getElementById("alert-icon");
    if (alertIcon) {
        alertIcon.addEventListener("click", () => {
            const alertDiv = document.getElementById("alert-container");
            if (alertDiv) {
                alertDiv.classList.add("hidden-alert");
            }
        });
    }
});

const handleKeydown = (e) => {
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if(!e.key.match(letterNumber)) {
      e.preventDefault();
    }
};

function setCaretPosition(ctrl, pos) {
    //Modern browsers
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);
    } else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }
}
