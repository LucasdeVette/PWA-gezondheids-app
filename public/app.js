
//variabele 
const SlaapTrackerForm = document.getElementById("SlaapTrackerForm");
const OverzichtSlaapRegistraties = document.getElementById("OverzichtSlaapRegistraties");

//Dit is een if statement die variabele, objecten en arrays aanmaakt zodat het formulier werkt en het in local storage opgeslagen kan worden
if (SlaapTrackerForm) {
    SlaapTrackerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        //Dit maakt variabele aan waar de informatie van het formulier in opgeslagen wordt
        const date = document.getElementById("date").value;
        const startTime = document.getElementById("startTime").value;
        const endTime = document.getElementById("endTime").value;
        const notitie = document.getElementById("notitie").value;

        //Dit maakt een object aan dat de variabele met informatie uit het formulier combineert
        const registratie = {
            date,
            startTime,
            endTime,
            notitie
        };
     
    //Dit maakt een array aan wanneer er nog geen array in local storage bestaat. Als dat wel is haalt het de lijst op
    let registraties = JSON.parse(
    localStorage.getItem("slaapregistraties")
    ) || []; 

    //Dit pushed het object in de array
    registraties.push(registratie);


    //Dit slaat de array op in local storage
    localStorage.setItem(
    "slaapregistraties",
    JSON.stringify(registraties));

    //dit is een console log die de array laat zien in de console
    console.log(registraties);

    //Dit reset het formulier zodat er een nieuwe registratie gemaakt kan worden
    SlaapTrackerForm.reset();

    //Dit geeft een alert zodat je weet dat je registratie is opgeslagen
    alert("Slaapregistratie opgeslagen!");
        

    });
}

if (OverzichtSlaapRegistraties) {
    console.log("OverzichtSlaapRegistraties is geladen");

    const registraties = JSON.parse(localStorage.getItem("slaapregistraties")) || [];
    console.log(registraties);
    console.log(registraties[0]);
    console.log(registraties[0].date);
    console.log(registraties[0].startTime);

    OverzichtSlaapRegistraties.innerHTML = `
    <div class="registratie-Card">
    <p>Datum: ${registraties[0].date}</p>
    <p>Van: ${registraties[0].startTime}</p>
    <p>Tot: ${registraties[0].endTime}</p>
    <p>Notitie: ${registraties[0].notitie}</p>
    </div>
    `;
}