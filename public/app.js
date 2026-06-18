
//variabele 
const SlaapTrackerForm = document.getElementById("SlaapTrackerForm");
const OverzichtSlaapRegistraties = document.getElementById("OverzichtSlaapRegistraties");
const ResetButton = document.getElementById("ResetButton");
const TaalButton = document.getElementById("TaalButton")
//

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
//

//Dit checkt of het de section "OverzichtSlaapRegistraties" vind en als dat is stuurt het een console.log
if (OverzichtSlaapRegistraties) {
    console.log("OverzichtSlaapRegistraties is geladen");

//Dit haalt de lijst van registraties op uit local storage zodat het gebruikt kan worden voor het tonen van de registraties op de website
    const registraties = JSON.parse(localStorage.getItem("slaapregistraties")) || [];
    console.log(registraties);
 
 //Dit is een loop die telkens een registratie uit de array neemt en het in het html element zet   
    for (let i = 0; i < registraties.length; i++) {
        OverzichtSlaapRegistraties.innerHTML += `
    <div class="registratie-Card">
    <p><b class="DatumIdClass">Datum:</b></p> 
    <p>${registraties[i].date}</p>
    
    <p><b class="VanIdClass">Van:</b></p>
    <p>${registraties[i].startTime}</p>
    
    <p><b class="TotIdClass">Tot:</b></p> 
    <p>${registraties[i].endTime}</p>
    
    <p><b class="NotitieIdClass">Notitie:</b></p>
    <p>${registraties[i].notitie}</p>
    </div>
    `;
    }


}
//

//resetbutton die alle registraties verwijdert uit localstorage
if (ResetButton) {
    ResetButton.addEventListener("click", function(){

       const bevestiging = confirm("Weet je zeker dat je alle registraties wilt verwijderen? Dit kan niet ongedaan gemaakt worden.");
        
        if (bevestiging) {
            localStorage.removeItem("slaapregistraties");
            alert("Alle registraties zijn verwijderd!");
            location.reload();
        };
    });
};
//

//taalbutton dat de taal van nederlands naar engels kan switchen
//variabele van de html elementen
let language = localStorage.getItem("LanguageLocalStorage") || "nl";
const Title_Dashboard = document.getElementById("Title_Dashboard");
const Title_instellingenjs = document.getElementById("Title_instellingenjs");
const AlleFuncties = document.getElementById("AlleFuncties");
const Future = document.getElementById("Future");
const SlaapTrackerButton = document.getElementById("SlaapTrackerButton");
const Title_Overzicht = document.getElementById("Title_Overzicht");
const AllRegistrations = document.getElementById("AllRegistrations");
const taal = document.getElementById("taal");
const SlaapTrackerTitel = document.getElementById("SlaapTrackerTitel");
const P1 = document.getElementById("P1");
const DatumForm = document.getElementById("DatumForm");
const VanForm = document.getElementById("VanForm");
const TotForm = document.getElementById("TotForm");
const NotitieForm = document.getElementById("NotitieForm");
const SubmitButton = document.getElementById("SubmitButton");
const LinkOverzicht = document.getElementById("LinkOverzicht");
const SettingsLink = document.getElementById("SettingsLink");

if (language === "en") {
    if(Title_Dashboard){
        Title_Dashboard.textContent = "Welcome User";
    }
    if(Title_instellingenjs){
        Title_instellingenjs.textContent = "Settings";
    }
    if (AlleFuncties){
        AlleFuncties.textContent = "All Functions";
    }
    if (Future) {
        Future.textContent = "(More functions will be added soon!)"
    }
    if (SlaapTrackerButton) {
        SlaapTrackerButton.textContent = "Sleeptracker"
    }
    if (Title_Overzicht) {
        Title_Overzicht.textContent = "Overview Sleeptracker"
    }
    if (ResetButton) {
        ResetButton.textContent = "Reset All"
    }
    if (AllRegistrations) {
        AllRegistrations.textContent = "All Registrations"
    }
    if (taal) {
        taal.textContent = "Language"
    }
    if (SlaapTrackerTitel) {
        SlaapTrackerTitel.textContent = "SleepTracker"
    }
    if (P1) {
        P1.textContent = "Add a new registration"
    }
    if (DatumForm) {
        DatumForm.textContent = "Date:"
    }
    if (VanForm) {
        VanForm.textContent = "From:"
    }
    if (TotForm) {
        TotForm.textContent = "Till:"
    }
    if (NotitieForm) {
        NotitieForm.textContent = "Notation"
    }
    if (SubmitButton) {
        SubmitButton.textContent = "Submit"
    }
    if (LinkOverzicht) {
        LinkOverzicht.textContent = "All Registrations"
    }
    if (SettingsLink) {
        SettingsLink.textContent = "Settings"
    }
    

   
    //innerhtmltranslate
    document.querySelectorAll(".DatumIdClass").forEach(function(label) {
    label.textContent = "Date:";});

    document.querySelectorAll(".VanIdClass").forEach(function(label) {
    label.textContent = "From:";});
    
   
    document.querySelectorAll(".TotIdClass").forEach(function(label) {
    label.textContent = "Till:";});

    document.querySelectorAll(".NotitieIdClass").forEach(function(label) {
    label.textContent = "Notation";});
}

if (TaalButton) {
    TaalButton.addEventListener("click", function(){
        if (language === "nl") {
            
           
            if(Title_Dashboard){
                Title_Dashboard.textContent = "Welcome User";}
            
            
            if(Title_instellingenjs){
                Title_instellingenjs.textContent = "Settings";}
            
            if (AlleFuncties){
                AlleFuncties.textContent = "All Functions";}
            
            if (Future) {
                Future.textContent = "(More functions will be added soon!)"}

            if (SlaapTrackerButton) {
            SlaapTrackerButton.textContent = "Sleeptracker"}
            
            if (Title_Overzicht) {
                Title_Overzicht.textContent = "Overview Sleeptracker"}

            if (ResetButton) {
                ResetButton.textContent = "Reset All"}

            if (AllRegistrations) {
                AllRegistrations.textContent = "All Registrations"}
            
            if (taal) {
                taal.textContent = "Language"}

            if (SlaapTrackerTitel) {
                SlaapTrackerTitel.textContent = "SleepTracker"}

            if (P1) {
                P1.textContent = "Add a new registration"}

            if (DatumForm) {
                DatumForm.textContent = "Date:"}

            if (VanForm) {
                VanForm.textContent = "From:"}

            if (TotForm) {
                TotForm.textContent = "Till:"}

            if (NotitieForm) {
                NotitieForm.textContent = "Notation:"}

            if (SubmitButton) {
                SubmitButton.textContent = "Submit"}

            if (LinkOverzicht) {
                LinkOverzicht.textContent = "All Registrations"}

            if (SettingsLink) {
                SettingsLink.textContent = "Settings"}
                
            document.querySelectorAll(".DatumIdClass").forEach(function(label) {
            label.textContent = "Date:";});

            document.querySelectorAll(".VanIdClass").forEach(function(label) {
            label.textContent = "From:";});
    
            document.querySelectorAll(".TotIdClass").forEach(function(label) {
            label.textContent = "Till:";});

            document.querySelectorAll(".NotitieIdClass").forEach(function(label) {
            label.textContent = "Notation";});
            
  

            //Opslaan localstorage//
            language = "en";
            localStorage.setItem("LanguageLocalStorage", language);
            
            

        } else {
            if (Title_Dashboard){
            Title_Dashboard.textContent = "Welkom Gebruiker";}

            if (Title_instellingenjs)
                {Title_instellingenjs.textContent = "Instellingen";}
           
            if (AlleFuncties){
                AlleFuncties.textContent = "Alle functies";}

            if (Future) {
                Future.textContent = "(More functions will be added soon!)"}
            
            if (SlaapTrackerButton) {
            SlaapTrackerButton.textContent = "Slaaptracker"};

            if (Title_Overzicht) {
                Title_Overzicht.textContent = "Overzicht SlaapTracker"};
            
            if (ResetButton) {
                ResetButton.textContent = "Reset alles"}
                
             if (AllRegistrations) {
                AllRegistrations.textContent = "Alle Registraties"}
             
            if (taal) {
                taal.textContent = "Taal"}

            if (SlaapTrackerTitel) {
                SlaapTrackerTitel.textContent = "SleepTracker"}
            
            if (P1) {
                P1.textContent = "Add a new registration"}
            
            if (DatumForm) {
                DatumForm.textContent = "Date:"}

            if (VanForm) {
                VanForm.textContent = "From:"}

            if (TotForm) {
                TotForm.textContent = "Till:"}

            if (NotitieForm) {
                NotitieForm.textContent = "Notation"}

            if (SubmitButton) {
                SubmitButton.textContent = "Versturen"}
            
            if (LinkOverzicht) {
                LinkOverzicht.textContent = "Overzicht Registraties"}
                
            if (SettingsLink) {
                SettingsLink.textContent = "Instellingen"}

             document.querySelectorAll(".DatumIdClass").forEach(function(label) {
            label.textContent = "Datum:";});

            document.querySelectorAll(".VanIdClass").forEach(function(label) {
            label.textContent = "Van:";});
    
            document.querySelectorAll(".TotIdClass").forEach(function(label) {
            label.textContent = "Tot:";});

            document.querySelectorAll(".NotitieIdClass").forEach(function(label) {
            label.textContent = "Notitie";});
             
             
            //opslaan localstorage
            language = "nl";
            localStorage.setItem("LanguageLocalStorage", language);
        
            
        }



    })
}
//