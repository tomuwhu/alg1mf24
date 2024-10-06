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
    HR0Lily: {
      type: ft.a,
      fl: "https://www.hackerrank.com/challenges/lilys-homework/problem?isFullScreen=true",
      mo: ["Urbán Ákos"],
    },
    HR0Stone_Division: {
      type: ft.b,
      fl: "https://www.hackerrank.com/challenges/lilys-homework/problem?isFullScreen=true",
      mo: ["Urbán Ákos"],
    },
    Gridland_Metro: {
      type: ft.a,
      fl: "https://www.hackerrank.com/challenges/gridland-metro/problem",
      mo: ["Sámfira Gábor"],
    },
    Crossword_Puzzle: {
      type: ft.b,
      fl: "https://www.hackerrank.com/challenges/crossword-puzzle/problem",
      mo: ["Sámfira Gábor"],
    },
    Sherlock_and_Cost: {
      type: ft.c,
      fl: "https://www.hackerrank.com/challenges/sherlock-and-cost/problem",
      mo: ["Sámfira Gábor"],
    },
    Even_Tree: {
      type: ft.d,
      fl: "https://www.hackerrank.com/challenges/even-tree/problem",
      mo: ["Sámfira Gábor"],
    },
  };
</script>

<main>
  <h1>Leadott (elkelt) feladatok</h1>
  <table>
    {#each Object.entries(mf) as f}
      <tr>
        <th>
          <a target="_blank" href={f[1].fl}>{f[0]}</a> 
          <span>({mf[f[0]].type})</span>:
        </th>
        <td>
          {#each f[1].mo as hallg}
            <a target="_blank" href={h[hallg]}>{hallg}</a>
          {/each}
        </td>
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
</style>
