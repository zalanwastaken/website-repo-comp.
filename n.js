function donate(element){
    var out = document.getElementById("out")
    out.innerHTML = "Thanks for donating ♥"
}
function showTab(tabName) {
    // Get all tab content elements and hide them
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove the active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabName).classList.add('active');

    // Add active class to the clicked tab
    const activeTab = Array.from(tabs).find(tab => tab.textContent.toLowerCase() === tabName);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}
function setamt(element){
    var out = document.getElementById("custom-amount")
    out.value = element.innerHTML
}