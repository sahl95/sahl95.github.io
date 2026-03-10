var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
};

function copyToClipboard(element) {
    var $temp = $("<textarea>");
    $("body").append($temp);

    var text = $(element).text();

    // remove indentation spaces/tabs at start of each line
    text = text.replace(/^[ \t]+/gm, '');

    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();

    CopyClipboardClick();
    setTimeout(resetButton, 5000);
}
function CopyClipboardClick() {
    $("#CopyClipboard").text("Citation successfully copied!");
}
function resetButton() {
    var modal = document.getElementById("CopyClipboard");
    modal.innerHTML =
    '<i class="fas fa-copy" style="margin-right: 1em; font-size: 1.5em; vertical-align: -0.15em;"></i>Copy Citation to Clipboard (BibTeX)';
}