<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  var fl = []
  var fogl = {
    hallg: '',
    feladat: '',
    feladat_link: ''
  }
  var filt = ""
  var st, sh
  const ft = {
    x: "- Ellenőrzés alatt -",
    a: "Keresés, rendezés",
    b: "Rekurzzióval megoldható feladatok",
    c: "Dinamikus programozással megoldható feladat",
    d: "Fa- és gráfalgoritmusos feladatok",
    e: "SPOJ/OKTV",
    h: "- Nincs beadva a CooSpace-en! -"
  };
  const h = {
    "Marschall Gábor": "https://github.com/CaTwoPlus/alga_I",
    "Rafael Anita Ilona": "https://r-anita.github.io/Alga/",
    "Dr. Nébl Anita": "https://nebl-annamaria.github.io/",
    "Béleczki Ádám": "https://github.com/Adee81/Algoritmusok/tree/main/04_Fak_Grafok",
    "Ádám Róbert Gábor": "https://adamrobert77.github.io/L_Algoritmusok_es_adatszerkezetek_I/",
    "Temesvári Ráhel Anna": "https://rahelanna.github.io/Algoritmusok-es-adatszerkezetek/",
    "Vígh-Mácsai Zsanett": "https://vigzs.github.io/Algoritmusok--s-adatszerkezetek-beadand-/",
    "Dékány Tamás": "https://github.com/dekany01/Algoritmusok",
    "Gyenes Lídia": "https://github.com/Lydiagyenes/alga",
    "dr. Báthori Endre":
      "https://github.com/bathoriendre/algoritmusok/blob/main/TaskAndDeadlines.md",
    "Kezes Rudolf Sámson": "https://github.com/Zorahk/alga_hazik",
    "Urbán Ákos": "https://github.com/akosh25/algoritmusok",
    "Sámfira Gábor":
      "https://github.com/Infinity42o/L-Algoritmusok-s-adatszerkezetek",
  };
  var mf
  const mfa = {
    /*
    "": {
      type: ft.a,
      fl: "",
      mo: [""]
    },
    */
    "Red John is Back": {
      type: ft.c,
      fl: "https://www.hackerrank.com/challenges/red-john-is-back/problem",
      mo: ["Marschall Gábor"]
    },
    "Breadth First Search: Shortest Reach": {
      type: ft.d,
      fl: "https://www.hackerrank.com/challenges/bfsshortreach/problem",
      mo: ["Ádám Róbert Gábor"]
    },
    "Max Min": {
      type: ft.a,
      fl: "https://www.hackerrank.com/challenges/angry-children/problem",
      mo: ["Dékány Tamás"]
    },
    "Fibonacci Modified": {
      type: ft.a,
      fl: "https://www.hackerrank.com/challenges/fibonacci-modified/problem",
      mo: ["Dékány Tamás"]
    },
    "Lego Blocks": {
      type: ft.c,
      fl: "https://www.hackerrank.com/challenges/lego-blocks/problem",
      mo: ["Dékány Tamás"]
    },
    "Pairs": {
      type: ft.a,
      fl: "https://www.hackerrank.com/challenges/pairs/problem",
      mo: ["Rafael Anita Ilona"]
    },
    "Apartments": {
      type: ft.a,
      fl: "https://cses.fi/problemset/task/1084",
      mo: ["Dr. Nébl Anita"]
    },
    "KnightL on a Chessboard": {
      type: ft.a,
      fl: "https://www.hackerrank.com/challenges/knightl-on-chessboard/problem?isFullScreen=false",
      mo: ["Béleczki Ádám"]
    },
    "Greedy Florist": {
      type: ft.a,
      fl: "https://www.hackerrank.com/challenges/greedy-florist/problem",
      mo: ["Ádám Róbert Gábor"]
    },
    "Password Cracker": {
      type: ft.b,
      fl: "https://www.hackerrank.com/challenges/password-cracker/problem",
      mo: ["Ádám Róbert Gábor"]
    },
    "Minimum Loss": {
      type: ft.a,
      fl: "https://www.hackerrank.com/challenges/minimum-loss/problem",
      mo: ["Temesvári Ráhel Anna"]
    },
    "The Coin Change Problem": {
      type: ft.c,
      fl: "https://www.hackerrank.com/challenges/coin-change/problem",
      mo: ["Temesvári Ráhel Anna"]
    },
    "Journey to the Moon": {
      type: ft.d,
      fl: "https://www.hackerrank.com/challenges/journey-to-the-moon/problem",
      mo: ["Temesvári Ráhel Anna"]
    },
    "Családfa": {
      type: ft.d,
      fl: "https://mester.inf.elte.hu:8181/faces/leiras.xhtml?jfwid=e14b800137b830f1fcf95ed69687:196",
      mo: ["Vígh-Mácsai Zsanett"]
    },
    "Dice Combinations": {
      type: ft.c,
      fl: "https://cses.fi/problemset/task/1633",
      mo: ["Vígh-Mácsai Zsanett"]
    },
    "CODEM4 - Problem4": {
      type: ft.b,
      fl: "https://www.spoj.com/problems/CODEM4/cstart=20",
      mo: ["Vígh-Mácsai Zsanett"]
    },
    "Distinct Numbers": {
      type: ft.a,
      fl: "https://cses.fi/problemset/task/1621",
      mo: ["Vígh-Mácsai Zsanett"]
    },
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
  }
  mf = mfa
  const kisz = [
    ["https://cses.fi/logo.png?1", "CSES", "https://cses.fi/problemset/"],
    [
      "https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg",
      "hackerrank",
      "https://www.hackerrank.com/",
    ],
    ["https://stx1.spoj.com/gfx/2015e.png", "spoj", "https://www.spoj.com/"],
    ["./mester.png", "mester", "https://mester.inf.elte.hu/"],
  ]
  onMount(async () => {
    let data = await fetch("https://szte.eu/p1.php")
    fl = await data.json()
    fl.forEach(f => {
      mfa[f.feladat] = {
        type: ft[f.type]||'- Ellenőrzés alatt -',
        fl: f.feladat_link,
        mo: [f.hallgato]
      }
      h[f.hallgato] = f.hallgato_link
    })
    mf = mfa
  })
</script>

<main>
  <h1>Beadott problema hozzáadása (foglalt lett....)</h1>
  <table>
    <tr>
      <td>
        <table>
          <tr>
            <td><input class="hallg" type="text" bind:value={fogl.hallg} placeholder="Hallgató neve"></td>
            <td><input class="fel" type="text" bind:value={fogl.feladat} placeholder="Feladat címe"></td>
          </tr>
          <tr>
            <td colspan=2 ><input class="link" type="text" bind:value={fogl.feladat_link} placeholder="Feladat link"></td>
          </tr>
          <tr>
            <td colspan=2 ><input class="link" type="text" bind:value={fogl.hallgato_link} placeholder="Hallhatói indexoldal link"></td>
          </tr>
        </table>
      </td>
      <td class="button">
        {#if (fogl.hallg && fogl.feladat && fogl.feladat_link)}
          <button on:click={async () => {
            let data = await fetch("https://szte.eu/p2.php", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(fogl)
            })
            data = await data.json()
            if (data.success) {
              fogl.hallgato = fogl.hallg
              delete fogl.hallg
              fl.unshift(fogl)
              fl = fl
              fogl = {
                hallg: '',
                feladat: '',
                feladat_link: ''
              }
            }
          }}>Ezt leadtam (foglalt lett)...</button>
        {/if}
      </td>
    </tr>
  </table>
  <h1>Leadott (elkelt) feladatok:<br>
  <input type="text" bind:value={filt} placeholder="Szűrés"> - 
  <select bind:value={st} on:change={() => {
      if (st === '-') {
        mf = mfa
        return
      }
      mf = {}
      Object.entries(mfa).filter(a => 
        a[1].type == ft[st]
      ).forEach(v => mf[v[0]] = v[1])
      sh = "-"
    }}>
    <option value="-">Minden típus</option>
    {#each Object.entries(ft) as type}
      <option value={type[0]}>{type[1]}</option>
    {/each}
  </select>
  <select bind:value={sh} on:change={() => {
    if (sh === '-') {
      mf = mfa
      return
    }
    mf = {}
    Object.entries(mfa).filter(a => 
      a[1].mo.includes(sh)
    ).forEach(v => mf[v[0]] = v[1])
    st = "-"
  }}>
  <option value="-">Minden hallgató</option>
  {#each Object.entries(h) as type}
    <option value={type[0]}>{type[0]}</option>
  {/each}
</select>
  </h1>
  <table>
    {#each Object.entries(mf).filter(a => 
      a[0].toLowerCase().includes(filt.toLowerCase())).sort((a, b) => {
        if (a[1].type == b[1].type) return 0
        return a[1].type < b[1].type ? -1 : 1
      }) as f}
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
          {#if mf[f[0]].type == '- Ellenőrzés alatt -'}
          <span class="x">ellenőrzés alatt...</span>
          {:else}
            {#if mf[f[0]].type == '- Nincs beadva a CooSpace-en! -'}
              <span class="h">{mf[f[0]].type}</span>
            {:else}
              <span class="done">({mf[f[0]].type})</span>:
            {/if}
          {/if}
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
  select {
    font-size: 16px;
    padding: 3px;
    border-radius: 6px;
  }
  .imgph {
    background-color: #242424;
    padding-right: 20px;
    border-radius: 10px;
    box-shadow: 1px 1px 4px #242424;
  }
  input {
    font-size: 16px;
    border-radius: 6px;
    padding: 4px;
    border:solid 1px rgb(120, 120, 120);
  }
  span.done {
    font-size: 10px;
    color: rgb(159, 211, 165);
  }
  span.x {
    font-size: 10px;
    color: rgb(243, 186, 186);
  }
  span.h {
    font-size: 12px;
    color: rgb(255, 126, 126);
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
  img.spoj {
    background-color: aliceblue;
    padding: 2px 9px;
    border-radius: 6px;
  }
  img.mester {
    width: 66px;
    border-radius: 6px;
    background-color: rgb(238, 234, 218);
    padding: 0px 9px;
  }
  button {
    border: solid 1px white;
    cursor: pointer;
  }
  input.link {
    width: 650px;
  }
  input.fel {
    width: 436px;
  }
  input.hallg {
    width: 200px;
  }
  button:hover {
    background-color: rgb(123, 33, 23);
  }
  td.button {
    text-align: center;
    background-color: #4e4949;
    border-radius: 15px;
    width: 257px;
  }
</style>
