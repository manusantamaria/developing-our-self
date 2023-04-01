// In Progress alert
const extensions = document.querySelectorAll('.main-tools__container--extension')
for (const extension of extensions) {
    const extensionName = extension.querySelector('.main-tools__container--title').textContent;
    if(extensionName != "Community" && extensionName != "Compound Effect"){
        extension.addEventListener('click', (e) => {
            e.preventDefault()
            Swal.fire({
                title: 'Error!',
                text: 'This tool is coming soon!',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        })
    } 
}
