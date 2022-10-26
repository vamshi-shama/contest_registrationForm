let globalIsSubmitted = false

function validate(isSubmitted = false) {
    let fullName = document.getElementById('full-name').value
    let gender = document.getElementById('gender')
    let select = gender.options[gender.selectedIndex].value
    let hobbies1 = document.getElementById('hobbies1')
    let hobbies2 = document.getElementById('hobbies2')
    let hobbies3 = document.getElementById('hobbies3')
    let hobbies4 = document.getElementById('hobbies4')
    let error = false

    if (isSubmitted) {
        globalIsSubmitted = true
    }

    if (globalIsSubmitted) {
        if (fullName.length >= 2 && fullName.indexOf(' ')>0) {
            document.getElementById('full-name-valid').style.display = 'block'
            document.getElementById('full-name-invalid').style.display = 'none'

        } else {
            document.getElementById('full-name-invalid').style.display = 'block'
            document.getElementById('full-name-valid').style.display = 'none'
            error = true
        }


        if (select != "None") {
            document.getElementById('gender-valid').style.display = 'block'
            document.getElementById('gender-invalid').style.display = 'none'

        } else {
            document.getElementById('gender-invalid').style.display = 'block'
            document.getElementById('gender-valid').style.display = 'none'
            error = true
        }

        if (hobbies1) {
            document.getElementById('hobbies-valid').style.display = 'block'
            document.getElementById('hobbies-invalid').style.display = 'none'
        } else {
            document.getElementById('hobbies-invalid').style.display = 'block'
            document.getElementById('hobbies-valid').style.display = 'none'
            error = true
        }

        if (hobbies2) {
            document.getElementById('hobbies-valid').style.display = 'block'
            document.getElementById('hobbies-invalid').style.display = 'none'
            
        } else {
            document.getElementById('hobbies-invalid').style.display = 'block'
            document.getElementById('hobbies-valid').style.display = 'none'
            error = true
        }

        if (hobbies3) {
            document.getElementById('hobbies-valid').style.display = 'block'
            document.getElementById('hobbies-invalid').style.display = 'none'
        } else {
            document.getElementById('hobbies-invalid').style.display = 'block'
            document.getElementById('hobbies-valid').style.display = 'none'
            error = true
        }

        if (hobbies4) {
            document.getElementById('hobbies-valid').style.display = 'block'
            document.getElementById('hobbies-invalid').style.display = 'none'
        } else {
            document.getElementById('hobbies-invalid').style.display = 'block'
            document.getElementById('hobbies-valid').style.display = 'none'
            error = true
        }



        if (!error) {
            alert('Your details have been saved successfully')
            document.getElementById('form').reset()
            let validFeedbacks = document.getElementsByClassName('valid-feedback')
            for (i = 0; i < validFeedbacks.length; i++) {
                validFeedbacks[i].style.display = 'none'
            }
            let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
            for (i = 0; i < invalidFeedbacks.length; i++) {
                invalidFeedbacks[i].style.display = 'none'
            }
        }
    }
}


