function onScroll() {
    const pageHeader = document.getElementById("page-header");
    const body = document.getElementsByTagName("body")[0];
    let top = body.scrollTop;
    console.log(top);
    if (top > 50){
        return pageHeader.classList.add("scrolling");        
    }
    return pageHeader.classList.remove("scrolling");
}
