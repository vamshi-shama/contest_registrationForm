let globalIsSubmitted = false

function validate(isSubmitted = false) {
    let fullName = document.getElementById('full-name').value
    let gender = document.getElementById('gender')
    let select = gender.options[gender.selectedIndex].value
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
            
        }


        if (select != "None") {
            document.getElementById('gender-valid').style.display = 'block'
            document.getElementById('gender-invalid').style.display = 'none'

        } else {
            document.getElementById('gender-invalid').style.display = 'block'
            document.getElementById('gender-valid').style.display = 'none'
            
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
            
        }

        if (hobbies3) {
            document.getElementById('hobbies-valid').style.display = 'block'
            document.getElementById('hobbies-invalid').style.display = 'none'
        } else {
            document.getElementById('hobbies-invalid').style.display = 'block'
            document.getElementById('hobbies-valid').style.display = 'none'
            
        }

        if (hobbies4) {
            document.getElementById('hobbies-valid').style.display = 'block'
            document.getElementById('hobbies-invalid').style.display = 'none'
        } else {
            document.getElementById('hobbies-invalid').style.display = 'block'
            document.getElementById('hobbies-valid').style.display = 'none'
            
        }



        if (!error) {
            alert('Hobbies of '+ fullName +' '+ '(' + gender + ')' + ' '+ 'are' + ' '  )
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


