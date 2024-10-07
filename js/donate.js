function donate(element){
    var out = document.getElementById("out")
    out.innerHTML = "Thanks for donating ♥"
}
function showTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
    const activeTab = Array.from(tabs).find(tab => tab.textContent.toLowerCase() === tabName);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}
function setamt(element){
    var out = document.getElementById("custom-amount")
    out.value = element.innerHTML
}
