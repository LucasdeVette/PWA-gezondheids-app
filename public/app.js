const SlaapTrackerForm = document.getElementById("SlaapTrackerForm");

if (SlaapTrackerForm) {
    SlaapTrackerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const date = document.getElementById("date").value;
        const startTime = document.getElementById("startTime").value;
        const endTime = document.getElementById("endTime").value;
        const notitie = document.getElementById("notitie").value;

        const registratie = {
            date,
            startTime,
            endTime,
            notitie
        };
        
    let registraties = JSON.parse(
    localStorage.getItem("slaapregistraties")
    ) || []; 

    registraties.push(registratie);



    localStorage.setItem(
    "slaapregistraties",
    JSON.stringify(registraties));

    



        

    });
}