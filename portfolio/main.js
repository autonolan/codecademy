//let lhpItem = document.getElementById("lhp-item");
let projectsList = document.getElementById("projects-list").children;
console.log(projectsList);
function showProject(event) {
    event.target.children[1].style.display = 'block';
};
Array.from(projectsList).forEach(project => {
    console.log(project);
    project.addEventListener('click', showProject);
})
//lhpItem.addEventListener('click', showProject);