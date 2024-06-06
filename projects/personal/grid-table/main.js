const update = () => {
    let blocks = document.getElementById("quantity").value;

    let blocks_content = '<div id="wrap">';

    for (var i = 0; i < blocks; i++) {
        blocks_content +=
            `<div style="background-color: #${(Math.random() * 0xFFFFFF << 0).toString(16)}">
                -
        </div>`;
    }

    blocks_content += '</div>';

    document.getElementById("content").innerHTML = blocks_content;
}

document.getElementById("quantity").addEventListener("focusout", update);

window.addEventListener("load", update);