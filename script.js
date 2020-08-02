var table = document.getElementsByTagName("tbody")[0];
const json = [];
const headers = [];
for (let i = 0; i < table.rows[0].cells.length; i++) {
  headers[i] = table.rows[0].cells[i].innerHTML
    .toLowerCase()
    .replace(/ /gi, "");
}

for (let i = 1; i < table.rows.length; i++) {
  let tableRow = table.rows[i];
  let rowData = {};
  for (let j = 0; j < tableRow.cells.length; j++) {
    rowData[headers[j]] = tableRow.cells[j].innerHTML;
  }

  json.push(rowData);
}
console.log(json);

const country = json.map(function (e) {
  return e[""];
});
console.log(country);

const a = json.map(function (e) {
  return parseInt(e[2002]);
});
console.log(a);

const b = json.map(function (e) {
  return parseInt(e[2003]);
});
console.log(b);

const c = json.map(function (e) {
  return parseInt(e[2004]);
});
console.log(c);

const d = json.map(function (e) {
  return parseInt(e[2005]);
});
console.log(d);

const f = json.map(function (e) {
  return parseInt(e[2006]);
});
console.log(f);

const z = json.map(function (e) {
  return parseInt(e[2007]);
});
console.log(z);

const w = json.map(function (e) {
  return parseInt(e[2008]);
});
console.log(w);

const k = json.map(function (e) {
  return parseInt(e[2009]);
});
console.log(k);

const l = json.map(function (e) {
  return parseInt(e[2010]);
});
console.log(l);

const m = json.map(function (e) {
  return parseInt(e[2011]);
});
console.log(m);

const o = json.map(function (e) {
  return parseInt(e[2012]);
});
console.log(o);

new Chart(document.getElementById("line-chart"), {
  type: "line",
  data: {
    labels: country,
    datasets: [
      {
        data: a,
        label: "2002",
        borderColor: "#e6194B",
        fill: false,
      },
      {
        data: b,
        label: "2003",
        borderColor: "#f58231",
        fill: false,
      },
      {
        data: c,
        label: "2004",
        borderColor: "#ffe119",
        fill: false,
      },
      {
        data: d,
        label: "2005",
        borderColor: "#bfef45",
        fill: false,
      },
      {
        data: f,
        label: "2006",
        borderColor: "#3cb44b",
        fill: false,
      },
      {
        data: z,
        label: "2007",
        borderColor: "#42d4f4",
        fill: false,
      },
      {
        data: w,
        label: "2008",
        borderColor: "#4363d8",
        fill: false,
      },
      {
        data: k,
        label: "2009",
        borderColor: "#911eb4",
        fill: false,
      },
      {
        data: l,
        label: "2010",
        borderColor: "#f032e6",
        fill: false,
      },
      {
        data: m,
        label: "2011",
        borderColor: "#a9a9a9",
        fill: false,
      },
      {
        data: o,
        label: "2012",
        borderColor: "#000000",
        fill: false,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Offences recorded by the police, 2002-12 - Number (in thousands)",
    },
  },
});

let table2 = document.getElementById("table2");
const json2 = []; // First row needs to be headers
const headers2 = [];
for (let p = 0; p < table2.rows[0].cells.length; p++) {
  headers2[p] = table2.rows[0].cells[p].innerHTML
    .toLowerCase()
    .replace(/ /gi, "");
}

for (let p = 1; p < table2.rows.length; p++) {
  let tableRow2 = table2.rows[p];
  let rowData2 = {};
  for (let q = 0; q < tableRow2.cells.length; q++) {
    rowData2[headers2[q]] = tableRow2.cells[q].innerHTML;
  }

  json2.push(rowData2);
}
console.log(json2);

const country2 = json2.map(function (r) {
  return r.country;
});
console.log(country2);

const first = json2.map(function (r) {
  return parseInt(r["2007–09"]);
});
console.log(first);

const second = json2.map(function (r) {
  return parseInt(r["2010–12"]);
});
console.log(second);

new Chart(document.getElementById("bar-chart-grouped"), {
  type: "bar",
  data: {
    labels: country2,
    datasets: [
      {
        label: "2007-09",
        backgroundColor: "#3e95cd",
        data: first,
      },
      {
        label: "2010-12",
        backgroundColor: "#8e5ea2",
        data: second,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text:
        "Prison population, average per year, 2007-09 and 2010-12 - per 100,000 inhabitants",
    },
  },
});

const data_url = "https://canvasjs.com/services/data/datapoints.php";

const xxs = [];
const yys = [];

async function getData() {
  const response = await fetch(data_url);
  const data = await response.json();
  console.log(data);
  const xs = data.map(function (e) {
    return parseInt(e["0"]);
  });
  console.log(xs);
  for (u = 0; u < 10; u++) {
    xxs.push(xs[u]);
  }
  const ys = data.map(function (e) {
    return parseInt(e["1"]);
  });
  console.log(ys);
  for (u = 0; u < 10; u++) {
    yys.push(ys[u]);
  }
}
console.log(yys);

getData();

let timerData1 = setInterval(() => getData(), 1000);

let chart = new Chart(document.getElementById("line-chart2"), {
  type: "line",
  data: {
    labels: xxs,
    datasets: [
      {
        data: yys,
        label: "dataPoints",
        borderColor: "#3e95cd",
        fill: false,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Random",
    },
  },
});

function addData() {
  chart.data.datasets[0].data = yys;
  chart.update();
}
let timerData2 = setInterval(() => addData(), 1000);
