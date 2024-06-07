document.addEventListener("DOMContentLoaded", function () {
    const sanitizeMoney = (money) => {
        parseFloat(money.replace('R$', '').replace('.', '').replace(',', '.').trim());
    }

    const sortRows = (rows, index, monetary) => {
        return Array.from(rows).sort((a, b) => {
            let aValue = a.children[index].innerText;
            let bValue = b.children[index].innerText;

            if (monetary) {
                aValue = sanitizeMoney(aValue);
                bValue = sanitizeMoney(bValue);
            } else {
                aValue = aValue.toLowerCase();
                bValue = bValue.toLowerCase();
            }

            return aValue === bValue ? 0 : (aValue > bValue ? 1 : -1);
        });
    };

    const originalRows = Array.from(document.querySelectorAll("#product_table tbody tr"));

    document.querySelectorAll(".sorting_area").forEach(element => {
        element.addEventListener("click", function (e) {
            document.querySelectorAll(".fa").forEach((fa) => {
                fa.classList.remove("selected_order")
            });

            const { index, monetary: monetaryData, status } = e.currentTarget.dataset;
            const monetary = monetaryData === "true";
            const rows = document.querySelectorAll("#product_table tbody tr");

            let sortedRows;

            if (status === "cresc") {
                sortedRows = sortRows(rows, index, monetary);

                e.currentTarget.dataset.status = "desc";
                e.currentTarget.title = "Ordenar Descrecentemente";
                e.currentTarget.children[0].classList.add("selected_order");
            } else if (status === "desc") {
                sortedRows = Array.from(rows).reverse();

                e.currentTarget.dataset.status = "default";
                e.currentTarget.title = "Ordenar Padrão";
                e.currentTarget.children[1].classList.add("selected_order");
            } else {
                sortedRows = originalRows;

                e.currentTarget.dataset.status = "cresc";
                e.currentTarget.title = "Ordenar Crecentemente";
            }

            const tbody = document.querySelector("#product_table tbody");

            tbody.innerHTML = '';

            sortedRows.forEach(row => tbody.appendChild(row));
        });
    });
});
