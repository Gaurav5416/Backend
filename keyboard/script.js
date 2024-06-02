window.addEventListener("keydown", (e)=>{
    // console.log(e);
    insert.innerHTML = `
    <div class = 'color'>
    <table>
    <tr>
    
    <th>Key</th>
    <th>Keycode</th>
    <th>code</th>
  </tr>
  <tr>
  <td>${e.key === ' ' ? 'space' : e.key}</td>
  <td>${e.keyCode}</td>
  <td>${e.code}</td>
  </tr>
</table>`
})

const insert = document.getElementById("insert")

