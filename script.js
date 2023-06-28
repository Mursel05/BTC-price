const price = new XMLHttpRequest();
price.open("get", "https://api.coindesk.com/v1/bpi/currentprice.json");
price.send();

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const optionlar = document.querySelector(".optionlar");


btn.addEventListener("click", function () {
  const select = document.querySelector(".r");
  const output = select.value;
  localStorage.setItem("output", output);
});


price.addEventListener("load", function () {
  if (localStorage.getItem("output") === "gbp") {
    const kod = `<select class="r">
                     <option value="usd">USD</option>
                     <option value="gbp" selected>GBP</option>
                     <option value="eur">EUR</option>
                     </select>`;
    optionlar.insertAdjacentHTML("beforeend", kod);
  } else if (localStorage.getItem("output") === "eur") {
    const kod = `<select class="r">
                     <option value="usd">USD</option>
                     <option value="gbp">GBP</option>
                     <option value="eur" selected>EUR</option>
                     </select>`;
    optionlar.insertAdjacentHTML("beforeend", kod);
  } else {
    const kod = `<select class="r">
                     <option value="usd" selected>USD</option>
                     <option value="gbp">GBP</option>
                     <option value="eur">EUR</option>
                     </select>`;
    optionlar.insertAdjacentHTML("beforeend", kod);
  }


  const data = JSON.parse(price.responseText);
  console.log(data);

  
  function valyuta(vahid) {
    if (vahid === "USD") {
      const deyer = data.bpi.USD.rate;
      const deyerSymbol = data.bpi.USD.symbol;
      localStorage.setItem(`${vahid}-rate1`, deyer);
      if (localStorage.getItem(`${vahid}-rate1`) === deyer) {
        const html = `<div class="back">
    <img src="bitcoin.webp" alt="icon">
    <div class="a">
        <span class="q">1 BTC =</span>
        <div class="w">
            <span>${deyerSymbol} ${deyer}</span>
            <span class="e">(0)</span>
        </div>
        <div class="t">
            <img src="icons8-calendar-24.png" alt="calendar">
            <span>${data.time.updated}</span>
        </div>
    </div>
  </div>`;
        container.insertAdjacentHTML("beforeend", html);
      } else {
        localStorage.setItem(`${vahid}-rate2`, deyer);
        const ferq =
          localStorage.getItem(`${vahid}-rate1`) -
          localStorage.getItem(`${vahid}-rate2`);
        if (ferq > 0) {
          const html = `<div class="back">
    <img src="bitcoin.webp" alt="icon">
    <div class="a">
        <span class="q">1 BTC =</span>
        <div class="w">
            <span>${data.bpi.vahid.symbol} ${data.bpi.vahid.rate}</span>
            <img class="e" src="icons8-thick-arrow-pointing-up-24.png" alt="sekil">
            <span>(${ferq})</span>
        </div>
        <div class="t">
            <img src="icons8-calendar-24.png" alt="calendar">
            <span>${data.time.updated}</span>
        </div>
    </div>
  </div>`;
          container.insertAdjacentHTML("beforeend", html);
        } else {
          const html = `<div class="back">
    <img src="bitcoin.webp" alt="icon">
    <div class="a">
        <span class="q">1 BTC =</span>
        <div class="w">
            <span>${data.bpi.vahid.symbol} ${data.bpi.vahid.rate}</span>
            <img class="e" src="icons8-thick-arrow-pointing-down-30.png" alt="sekil">
            <span>(${ferq})</span>
        </div>
        <div class="t">
            <img src="icons8-calendar-24.png" alt="calendar">
            <span>${data.time.updated}</span>
        </div>
    </div>
  </div>`;
          container.insertAdjacentHTML("beforeend", html);
        }
      }
    } else if (vahid === "EUR") {
      const deyer = data.bpi.EUR.rate;
      const deyerSymbol = data.bpi.EUR.symbol;
      localStorage.setItem(`${vahid}-rate1`, deyer);
      if (localStorage.getItem(`${vahid}-rate1`) === deyer) {
        const html = `<div class="back">
    <img src="bitcoin.webp" alt="icon">
    <div class="a">
        <span class="q">1 BTC =</span>
        <div class="w">
            <span>${deyerSymbol} ${deyer}</span>
            <span class="e">(0)</span>
        </div>
        <div class="t">
            <img src="icons8-calendar-24.png" alt="calendar">
            <span>${data.time.updated}</span>
        </div>
    </div>
  </div>`;
        container.insertAdjacentHTML("beforeend", html);
      } else {
        localStorage.setItem(`${vahid}-rate2`, deyer);
        const ferq =
          localStorage.getItem(`${vahid}-rate1`) -
          localStorage.getItem(`${vahid}-rate2`);
        if (ferq > 0) {
          const html = `<div class="back">
    <img src="bitcoin.webp" alt="icon">
    <div class="a">
        <span class="q">1 BTC =</span>
        <div class="w">
            <span>${data.bpi.vahid.symbol} ${data.bpi.vahid.rate}</span>
            <img class="e" src="icons8-thick-arrow-pointing-up-24.png" alt="sekil">
            <span>(${ferq})</span>
        </div>
        <div class="t">
            <img src="icons8-calendar-24.png" alt="calendar">
            <span>${data.time.updated}</span>
        </div>
    </div>
  </div>`;
          container.insertAdjacentHTML("beforeend", html);
        } else {
          const html = `<div class="back">
    <img src="bitcoin.webp" alt="icon">
    <div class="a">
        <span class="q">1 BTC =</span>
        <div class="w">
            <span>${data.bpi.vahid.symbol} ${data.bpi.vahid.rate}</span>
            <img class="e" src="icons8-thick-arrow-pointing-down-30.png" alt="sekil">
            <span>(${ferq})</span>
        </div>
        <div class="t">
            <img src="icons8-calendar-24.png" alt="calendar">
            <span>${data.time.updated}</span>
        </div>
    </div>
  </div>`;
          container.insertAdjacentHTML("beforeend", html);
        }
      }
    } else {
      const deyer = data.bpi.GBP.rate;
      const deyerSymbol = data.bpi.GBP.symbol;
      localStorage.setItem(`${vahid}-rate1`, deyer);
      if (localStorage.getItem(`${vahid}-rate1`) === deyer) {
        const html = `<div class="back">
    <img src="bitcoin.webp" alt="icon">
    <div class="a">
        <span class="q">1 BTC =</span>
        <div class="w">
            <span>${deyerSymbol} ${deyer}</span>
            <span class="e">(0)</span>
        </div>
        <div class="t">
            <img src="icons8-calendar-24.png" alt="calendar">
            <span>${data.time.updated}</span>
        </div>
    </div>
  </div>`;
        container.insertAdjacentHTML("beforeend", html);
      } else {
        localStorage.setItem(`${vahid}-rate2`, deyer);
        const ferq =
          localStorage.getItem(`${vahid}-rate1`) -
          localStorage.getItem(`${vahid}-rate2`);
        if (ferq > 0) {
          const html = `<div class="back">
    <img src="bitcoin.webp" alt="icon">
    <div class="a">
        <span class="q">1 BTC =</span>
        <div class="w">
            <span>${data.bpi.vahid.symbol} ${data.bpi.vahid.rate}</span>
            <img class="e" src="icons8-thick-arrow-pointing-up-24.png" alt="sekil">
            <span>(${ferq})</span>
        </div>
        <div class="t">
            <img src="icons8-calendar-24.png" alt="calendar">
            <span>${data.time.updated}</span>
        </div>
    </div>
  </div>`;
          container.insertAdjacentHTML("beforeend", html);
        } else {
          const html = `<div class="back">
    <img src="bitcoin.webp" alt="icon">
    <div class="a">
        <span class="q">1 BTC =</span>
        <div class="w">
            <span>${data.bpi.vahid.symbol} ${data.bpi.vahid.rate}</span>
            <img class="e" src="icons8-thick-arrow-pointing-down-30.png" alt="sekil">
            <span>(${ferq})</span>
        </div>
        <div class="t">
            <img src="icons8-calendar-24.png" alt="calendar">
            <span>${data.time.updated}</span>
        </div>
    </div>
  </div>`;
          container.insertAdjacentHTML("beforeend", html);
        }
      }
    }
  }
  if (localStorage.getItem("output") === "gbp") {
    valyuta("GBP");
  } else if (localStorage.getItem("output") === "eur") {
    valyuta("EUR");
  } else {
    valyuta("USD");
  }
    // localStorage.clear()
});
