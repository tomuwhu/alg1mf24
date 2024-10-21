<script>
  // @ts-nocheck
  var filt = ""
  const ft = {
    a: "Keresés, rendezés",
    b: "Rekurzzióval megoldható feladatok",
    c: "Dinamikus programozással megoldható feladat",
    d: "Fa- és gráfalgoritmusos feladatok",
    e: "SPOJ/OKTV",
  };
  const h = {
    "Dékány Tamás": "https://github.com/dekany01/Algoritmusok",
    "Gyenes Lídia": "https://github.com/Lydiagyenes/alga",
    "dr. Báthori Endre":
      "https://github.com/bathoriendre/algoritmusok/blob/main/TaskAndDeadlines.md",
    "Kezes Rudolf Sámson": "https://github.com/Zorahk/alga_hazik",
    "Urbán Ákos": "https://github.com/akosh25/algoritmusok",
    "Sámfira Gábor":
      "https://github.com/Infinity42o/L-Algoritmusok-s-adatszerkezetek",
  };
  const mf = {
    "Ice Cream Parlor": {
      type: ft.a,
      fl: "https://www.hackerrank.com/challenges/icecream-parlor/problem",
      mo: ["Gyenes Lídia"]
    },
    "Recursive Digit Sum": {
      type: ft.b,
      fl: "https://www.hackerrank.com/challenges/recursive-digit-sum/problem",
      mo: ["Dékány Tamás"],
    },
    "Mail Delivery": {
      type: ft.d,
      fl: "https://cses.fi/problemset/task/1691",
      mo: ["dr. Báthori Endre"],
    },
    "Edit Distance": {
      type: ft.c,
      fl: "https://cses.fi/problemset/task/1639",
      mo: ["dr. Báthori Endre"],
    },
    "Tree Traversals": {
      type: ft.b,
      fl: "https://cses.fi/problemset/task/1702",
      mo: ["dr. Báthori Endre"],
    },
    "Tasks and Deadlines": {
      type: ft.a,
      fl: "https://cses.fi/problemset/task/1630",
      mo: ["dr. Báthori Endre"],
    },
    "Towers": {
      type: ft.a,
      fl: "https://cses.fi/problemset/task/1073",
      mo: ["Kezes Rudolf Sámson"],
    },
    "The Power Sum": {
      type: ft.b,
      fl: "https://www.hackerrank.com/challenges/the-power-sum/problem",
      mo: ["Kezes Rudolf Sámson"],
    },
    "Gridland Metro": {
      type: ft.a,
      fl: "https://www.hackerrank.com/challenges/gridland-metro/problem",
      mo: ["Sámfira Gábor"],
    },
    "Crossword Puzzle": {
      type: ft.b,
      fl: "https://www.hackerrank.com/challenges/crossword-puzzle/problem",
      mo: ["Sámfira Gábor"],
    },
    "Sherlock and Cost": {
      type: ft.c,
      fl: "https://www.hackerrank.com/challenges/sherlock-and-cost/problem",
      mo: ["Sámfira Gábor"],
    },
    "Even Tree": {
      type: ft.d,
      fl: "https://www.hackerrank.com/challenges/even-tree/problem",
      mo: ["Sámfira Gábor"],
    },
    "Lily's Homework": {
      type: ft.a,
      fl: "https://www.hackerrank.com/challenges/lilys-homework/problem",
      mo: ["Urbán Ákos"],
    },
    "Stone Division": {
      type: ft.b,
      fl: "https://www.hackerrank.com/challenges/lilys-homework/problem",
      mo: ["Urbán Ákos"],
    },
    "Roads and Libraries" : {
      type: ft.c,
      fl: "https://www.hackerrank.com/challenges/stockmax/problem",
      mo: ["Urbán Ákos"],
    },
    "Stock Maximize" : {
      type: ft.d,
      fl: "https://www.hackerrank.com/challenges/torque-and-development/problem",
      mo: ["Urbán Ákos"],
    },
  };
  const kisz = [
    ["https://cses.fi/logo.png?1", "CSES", "https://cses.fi/problemset/"],
    [
      "https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg",
      "hackerrank",
      "https://www.hackerrank.com/",
    ],
    ["https://stx1.spoj.com/gfx/2015e.png", "spoj", "https://www.spoj.com/"],
  ];
</script>

<main>
  <h1>Leadott (elkelt) feladatok - <input type="text" bind:value={filt} placeholder="Szűrés"></h1>
  <table>
    {#each Object.entries(mf).filter(a => 
      a[0].toLowerCase().includes(filt.toLowerCase())) as f}
      <tr>
        <td class=imgph>
          {#each kisz as k}
            {#if f[1].fl.toLocaleLowerCase().includes(k[1].toLocaleLowerCase())}
              <a href={k[2]} target="_blank">
                <img class={k[1].toLocaleLowerCase()} src={k[0]} alt={k[1]} />
              </a>
            {/if}
          {/each}
        </td>
        <th>
          <a target="_blank" href={f[1].fl}>{f[0]}</a>
        </th>
        <td>
          <span>({mf[f[0]].type})</span>:
        </td>
        <th>
          {#each f[1].mo as hallg}
            <a target="_blank" href={h[hallg]}>{hallg}</a>
          {/each}
        </th>
      </tr>
    {/each}
  </table>
</main>

<style>
  .imgph {
    background-color: #242424;
    padding-right: 20px;
    border-radius: 10px;
    box-shadow: 1px 1px 4px #242424;
  }
  input {
    font-size: 16px;
    border-radius: 6px;
  }
  span {
    font-size: 10px;
    color: gray;
  }
  h1 {
    font-size: 20px;
  }
  th {
    text-align: right;
  }
  td {
    text-align: left;
  }
  a {
    padding-left: 20px;
  }
  img {
    width: 104px;
  }
  img.cses {
    width: 64px;
    height: 20px;
  }
</style>
