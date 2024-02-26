function test(){
    const tests = document.querySelectorAll('.test')

    tests.forEach(test=>{
        test.addEventListener('mouseenter',()=>{
            const pov = test.querySelector('.pov')
            pov.classList.remove('d-none')
            pov.classList.add('d-block')
        })

        test.addEventListener('mouseleave',()=>{
            const pov = test.querySelector('.pov')
            pov.classList.remove('d-block')
            pov.classList.add('d-none')
        })
    })
}