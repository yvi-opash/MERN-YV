const pname = document.getElementById("name") as HTMLInputElement;
const pprice = document.getElementById("price") as HTMLInputElement;
const addbtn = document.getElementById("add") as HTMLButtonElement;
const pquantity = document.getElementById("quantity") as HTMLInputElement;
const plist = document.getElementById("product") as HTMLTableSectionElement;

interface Product {
  name: string;
  price: number;
  quantity: number;
}

let editnumber: number | null = null;

let products: Product[] = JSON.parse(localStorage.getItem("products") || "[]");

function show() {
  plist.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const tr = document.createElement("tr");

    const nameTD = document.createElement("td");
    const priceTD = document.createElement("td");
    const quantityTD = document.createElement("td");

    nameTD.innerText = products[i].name;
    priceTD.innerText = products[i].price.toString();
    quantityTD.innerText = products[i].quantity.toString();

    // nameTD.innerText = products[i].name ?? "N/A";
    // priceTD.innerText = String(products[i].price ?? 0);
    // quantityTD.innerText = String(products[i].quantity ?? 0);

    const delet = document.createElement("button");
    delet.innerText = "delete";

    // delet.onclick = () => {
    //   products.splice(i, 1);
    //   save();
    // };

    delet.onclick = () => {
      if (editnumber !== null) {
        alert("Finish editing before deleting");
        return;
      }

      products.splice(i, 1);
      save();
    };

    const edit = document.createElement("button");
    edit.innerText = "Edit";

    edit.onclick = () => {
      pname.value = products[i].name;
      pprice.value = products[i].price.toString();
      pquantity.value = products[i].quantity.toString();
      editnumber = i;

      addbtn.innerText = "Edit";
    };

    const actionTD = document.createElement("td");
    actionTD.append(edit, delet);

    tr.append(nameTD, priceTD, quantityTD, actionTD);
    plist.appendChild(tr);
  }
}

function save() {
  localStorage.setItem("products", JSON.stringify(products));
  show();
}

addbtn.onclick = () => {
  if (
    pname.value.trim() === "" ||
    pprice.value.trim() === "" ||
    Number(pprice.value) <= 0 ||
    pquantity.value.trim() === "" ||
    Number(pquantity.value) <= 0
  ) {
    alert("Please fill all fields");
    return;
  }
  if (editnumber == null) {
    products.push({
      name: pname.value,
      price: Number(pprice.value),
      quantity: Number(pquantity.value),
    });
  } else {
    products[editnumber] = {
      name: pname.value,
      price: Number(pprice.value),
      quantity: Number(pquantity.value),
    };
    editnumber = null;
    addbtn.innerText = "Add";
  }
  pname.value = "";
  pprice.value = "";
  pquantity.value = "";

  save();
};

show();
