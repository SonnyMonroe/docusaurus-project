const bitcoinBtn = document.querySelector("#bitcoin-btn");
const ethereumBtn = document.querySelector("#ethereum-btn");
const tetherBtn = document.querySelector("#tether-btn");
const result = document.querySelector("#result");

bitcoinBtn.addEventListener("click", () => {
    result.innerHTML = "Bitcoin is a decentralized digital currency.";
});

ethereumBtn.addEventListener("click", () => {
    result.innerHTML =
        "Ethereum is a decentralized platform for building decentralized applications.";
});

tetherBtn.addEventListener("click", () => {
    result.innerHTML = "Tether is a stablecoin pegged to the US dollar.";
});
