function openTab(event, tabId) {
    const tabContents = document.querySelectorAll(".tab-content");

    tabContents.forEach(function(tab) {
        tab.classList.remove("active");
    });

    const tabButtons = document.querySelectorAll(".tab-btn");

    tabButtons.forEach(function(button) {
        button.classList.remove("active");
    });

    const selectedTab = document.getElementById(tabId);

    if (selectedTab) {
        selectedTab.classList.add("active");
    }

    if (event && event.currentTarget) {
        event.currentTarget.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
