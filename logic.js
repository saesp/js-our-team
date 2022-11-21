// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe


const teamMembers = [

    {
        nome: 'Wayne Barnettt',
        ruolo: 'Founder CEO',
        foto: 'wayne-barnett-founder-ce.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'wayne-barnett-founder-ce.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office manager',
        foto: 'wayne-barnett-founder-ce.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social media manager',
        foto: 'wayne-barnett-founder-ce.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'wayne-barnett-founder-ce.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic design',
        foto: 'wayne-barnett-founder-ce.jpg'
    }
]
console.log(teamMembers);




const teamTab = document.getElementById("team-tab");

for (let i = 0; i < teamMembers.length; i++){
    let member = teamMembers[i];
    console.log(i);
    console.log(member);

    for (let key in member){
        console.log(member[key]);
    }
}