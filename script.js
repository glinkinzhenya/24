let marvelHeroes = [
    {
        name: "Thor"
    },
    {
        name: "Spider Man"
    },
];

let dcHeroes = [
    {
        name: "Superman"
    },
    {
        name: "Batman"
    },
    {
        name: "Deadpool"
    },
];

Array.prototype.heroesRender = function (papka) {
    let mass = [];

    for (let i = 0; i < this.length; i++) {
        mass.push(`<tr>
                   <td>${this[i].name}</td>
 		           <td>
                   <img src="images/${papka}/${this[i].name.toLowerCase().replaceAll(" ", "")}.svg">
                   </td>
                   <tr>`);
    };
    document.write(`<table border="1" cellspacing="0" cellpadding="0">
                    <thead>
                    <tr>
                    <th>Name</th>
                    <th>Icon</th>
                    </tr>
                    </thead>
                    <tbody>${mass.join("")}
                    </tbody>
                    </table>`)
};
dcHeroes.heroesRender('dc');
marvelHeroes.heroesRender('marvel');