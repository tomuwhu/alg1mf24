<script>
  // @ts-nocheck
  const ft = {
    a: "Keresés, rendezés",
    b: "Rekurzzióval megoldható feladatok",
    c: "Dinamikus programozással megoldható feladat",
    d: "Fa- és gráfalgoritmusos feladatok",
    e: "SPOJ/OKTV"
  }
  const h = {
    "Urbán Ákos": "https://github.com/akosh25/algoritmusok"
  }
  const mf = {
    HR0Lily: {
      type: ft.a,
      fl: "https://www.hackerrank.com/challenges/lilys-homework/problem?isFullScreen=true",
      mo: ["Urbán Ákos"]
    },
    HR0Stone_Division: {
      type: ft.b,
      fl: "https://www.hackerrank.com/challenges/lilys-homework/problem?isFullScreen=true",
      mo: ["Urbán Ákos"]
    }
  }
</script>

<main>
  <h1>Leadott feladatok</h1>
  <table>
    {#each Object.entries(mf) as f}
      <tr>
        <th>
          <a target="_blank" href={f[1].fl}>{f[0]}</a>:
        </th>
        <td>
          {#each f[1].mo as hallg}
            <a target="_blank" href={hallg}>{hallg}</a>
          {/each}
        </td>
      </tr>
    {/each}
  </table>
</main>

<style>
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
