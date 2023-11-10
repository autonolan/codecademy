//let lhpItem = document.getElementById("lhp-item");
console.log(document.getElementById("lhp-item"));
let projectsList = document.getElementById("projects-list").children;
console.log(projectsList);
function showProject(event) {
    event.target.children[1].style.display = 'block';
    event.target.children[1].style.position = 'absolute';
    event.target.children[1].style.left = '400px';
    event.target.children[1].style.top = '125px';
    document.getElementById("main-content").style.backgroundColor = 'rgba(0,0,0,0.6)';
};
function hideProject() {
    document.getElementById("lhp").style.display = 'none';
    document.getElementById("lhp").style.position = '';
    document.getElementById("tji").style.display = 'none';
    document.getElementById("tji").style.position = '';
    document.getElementById("pst").style.display = 'none';
    document.getElementById("pst").style.position = '';
    document.getElementById("main-content").style.backgroundColor = '';
}
Array.from(projectsList).forEach(project => {
    console.log(project);
    project.addEventListener('click', showProject);
});
document.getElementById("lhp").addEventListener('click', hideProject);
document.getElementById("tji").addEventListener('click', hideProject);
document.getElementById("pst").addEventListener('click', hideProject);
//lhpItem.addEventListener('click', showProject);
console.log(document.getElementById("lhp-item"));