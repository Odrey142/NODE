const tab = require('./tab');

let html = '<div>';

tab.forEach(tabs => {
    html += ` 
    <table>
        <thead>Tableau de Livre </thead>
            <tbody>
                <tr>
                    <th>Titre</th>
                    <td class= "${tabs.titre}"></td>
                </tr>
                <tr>
                    <th>Auteur</th>
                    <td class= "${tabs.auteur}"></td>
                </tr>
                <tr>
                    <th>Genre</th>
                    <td class= "${tabs.genre}"></td>
                </tr>
            </tbody>
    </table>
`});

html +='<ul>';

console.log(html);