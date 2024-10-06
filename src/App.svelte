<script>
  // @ts-nocheck
  const ft = {
    a: "Keresés, rendezés",
    b: "Rekurzzióval megoldható feladatok",
    c: "Dinamikus programozással megoldható feladat",
    d: "Fa- és gráfalgoritmusos feladatok",
    e: "SPOJ/OKTV",
  };
  const h = {
    "Urbán Ákos": "https://github.com/akosh25/algoritmusok",
    "Sámfira Gábor": "https://github.com/Infinity42o/L-Algoritmusok-s-adatszerkezetek"
  };
  const mf = {
    "Lily's Homework": {
      type: ft.a,
      fl: "https://www.hackerrank.com/challenges/lilys-homework/problem?isFullScreen=true",
      mo: ["Urbán Ákos"],
    },
    "Stone Division": {
      type: ft.b,
      fl: "https://www.hackerrank.com/challenges/lilys-homework/problem?isFullScreen=true",
      mo: ["Urbán Ákos"],
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
  };
  const kisz = [
    [
      'https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg', 
      'hackerrank',
      'https://www.hackerrank.com/'
    ],
    [
      'https://stx1.spoj.com/gfx/2015e.png', 
      'spoj',
      'https://www.spoj.com/'
    ]
  ]
</script>

<main>
  <h1>Leadott (elkelt) feladatok</h1>
  <table>
    {#each Object.entries(mf).sort() as f}
      <tr>
        <td>
          {#each kisz as k}
            {#if f[1].fl.includes(k[1])}
              <a href={k[2]} target="_blank">
                <img src={k[0]} alt={k[1]}>
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
  span {
    font-size: 10px;
    color:gray;
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
</style>
