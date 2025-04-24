const elementsData = [
        { name: "Hydrogen", symbol: "H", atomicNumber: 1, atomicWeight: 1.008, uses: "Used in fuel cells & welding." },
        { name: "Helium", symbol: "He", atomicNumber: 2, atomicWeight: 4.0026, uses: "Used in balloons & cooling MRI machines." },
        { name: "Lithium", symbol: "Li", atomicNumber: 3, atomicWeight: 6.94, uses: "Used in rechargeable batteries." },
        { name: "Beryllium", symbol: "Be", atomicNumber: 4, atomicWeight: 9.0122, uses: "Used in aerospace materials." },
        { name: "Boron", symbol: "B", atomicNumber: 5, atomicWeight: 10.81, uses: "Used in glassmaking & detergents." },
        { name: "Carbon", symbol: "C", atomicNumber: 6, atomicWeight: 12.011, uses: "Used in steel, diamonds & organic molecules." },
        { name: "Nitrogen", symbol: "N", atomicNumber: 7, atomicWeight: 14.007, uses: "Used in fertilizers & explosives." },
        { name: "Oxygen", symbol: "O", atomicNumber: 8, atomicWeight: 15.999, uses: "Essential for respiration & combustion." },
        { name: "Fluorine", symbol: "F", atomicNumber: 9, atomicWeight: 18.998, uses: "Used in toothpaste & refrigerants." },
        { name: "Neon", symbol: "Ne", atomicNumber: 10, atomicWeight: 20.180, uses: "Used in neon lights." },
       
        { name: "Sodium", symbol: "Na", atomicNumber: 11, atomicWeight: 22.990, uses: "Used in street lights & salt." },
        { name: "Magnesium", symbol: "Mg", atomicNumber: 12, atomicWeight: 24.305, uses: "Used in fireworks & airplanes." },
        { name: "Aluminum", symbol: "Al", atomicNumber: 13, atomicWeight: 26.982, uses: "Used in cans, foils, and aircraft." },
        { name: "Silicon", symbol: "Si", atomicNumber: 14, atomicWeight: 28.085, uses: "Used in electronics & glass." },
        { name: "Phosphorus", symbol: "P", atomicNumber: 15, atomicWeight: 30.974, uses: "Used in fertilizers & detergents." },
        { name: "Sulfur", symbol: "S", atomicNumber: 16, atomicWeight: 32.06, uses: "Used in vulcanization of rubber & fertilizers." },
        { name: "Chlorine", symbol: "Cl", atomicNumber: 17, atomicWeight: 35.45, uses: "Used in water purification & bleach." },
        { name: "Argon", symbol: "Ar", atomicNumber: 18, atomicWeight: 39.948, uses: "Used in light bulbs & welding." },
        { name: "Potassium", symbol: "K", atomicNumber: 19, atomicWeight: 39.098, uses: "Used in fertilizers & gunpowder." },
        { name: "Calcium", symbol: "Ca", atomicNumber: 20, atomicWeight: 40.078, uses: "Used in cement & bones." }
    ];
    
function createTable() {
    const table = document.querySelector(".table");
    elementsData.forEach((el, index) => {
        let elementDiv = document.createElement("div");
        elementDiv.classList.add("element");
        elementDiv.innerText = el.symbol;
        elementDiv.onclick = () => showDetails(index);
        table.appendChild(elementDiv);
    });
}

function showDetails(index) {
    const element = elementsData[index];
    document.getElementById("elementName").innerText = element.name;
    document.getElementById("elementSymbol").innerText = element.symbol;
    document.getElementById("atomicNumber").innerText = element.atomicNumber;
    document.getElementById("atomicWeight").innerText = element.atomicWeight;
    document.getElementById("elementUses").innerText = element.uses;

    document.getElementById("elementDetails").style.display = "block";
}


function closeModal() {
    document.getElementById("elementDetails").style.display = "none";
}


function searchElement() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let elements = document.querySelectorAll(".element");

    elements.forEach((el, index) => {
        let elementName = elementsData[index].name.toLowerCase();
        el.style.display = elementName.includes(input) ? "block" : "none";
    });
}


createTable();
