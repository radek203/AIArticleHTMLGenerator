window.onload = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const pElems = section.querySelectorAll('p');
        pElems[0].classList.add('col-md-10');
    });

    const figureElems = document.querySelectorAll('figure');
    figureElems.forEach(figure => {
        figure.classList.add('col-md-2');
    });
}