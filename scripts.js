let clickValidateFunction = () => {
    let input = document.getElementById("input");
    let ValidationMSG = document.getElementById("ValidationMSG");
    try {
        if (input.value.trim() == "") {
            throw "Must Not Empity";
            return
        } else {
            if (isNaN(input.value.trim())) {
                throw "Input Must Numbers";
                return
            }
            if (input.value.trim().length > 16) {
                throw "Must Less Than 16 Number or Character";
                return
            }
            if (input.value.trim().length < 4) {
                throw "Must Greater Than 4 Number or Character";
                return
            }
            if (input.value != "") {
                input.value = "";
            }
            if (ValidationMSG.textContent != "") {
	    	    ValidationMSG.innerHTML = "Success";
                setTimeout(() => ValidationMSG.innerHTML = "",3000);
            }
        }
    } catch (error) {
        ValidationMSG.innerHTML = error;
    } finally {
        input.focus();
    }
}

let clickResetFunction = () => {
    let input = document.getElementById('input');
    let ValidationMSG = document.getElementById('ValidationMSG');
    if (ValidationMSG.textContent != "") {
        ValidationMSG.innerHTML = "";
    }
    if (input.value != "") {
        input.value = "";
    }
    input.focus();
}