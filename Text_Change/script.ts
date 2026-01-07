function change(): void {
    const title = document.querySelector("#title") as HTMLHeadingElement;
    const input = document.querySelector("#inputtext") as HTMLInputElement;

    if(input && title) {
        title.innerText = input.value;
        title.style.color = "orange";
    }
}
