const toggleAccordion = () => {

    const specialties = document.querySelectorAll('.specialty');

    specialties.forEach(specialty => {
        specialty.firstElementChild.addEventListener('click', () => {
            specialties.forEach((anotherSpecialty, index) => {
                if(specialties[index] !== specialty) {
                    anotherSpecialty.classList.remove('active');
                }
            })
            specialty.classList.toggle('active');
        })
    })


}

toggleAccordion();