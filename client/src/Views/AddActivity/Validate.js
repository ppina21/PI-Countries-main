 const regexName = /[^A-Za-z0-9 ]+/g;

export const validate = (form) => {
    let error = {}
    if (!form.name) { error.name = "Name is required" }
    if (form.name.length < 3) { error.name = "The name cannot be less than 3 characters" }
    if (form.name.length > 30) { error.name = "The name cannot be longer than 30 characters" }
    if (regexName.test(form.name)) { error.name = "The name cannot have special characters or tildes"}
    if (!form.difficulty || form.difficulty === " ") { error.difficulty = "The difficulty field is required" }
    if (form.difficulty > 5 || form.difficulty < 1 ) { error.difficulty = "Only values from 1 to 5 are accepted"}
    if (!form.duration || form.duration === " ") { error.duration = "The duration field is required" } 
    if (form.duration >24 || form.duration < 1)  { error.duration = "Only values from 1 to 24 are accepted"}
    if (!form.season || form.season === " ") { error.season = "The season field is required season" } 
    if (!form.countries || form.countries === '-') { error.countries = "Choose a country"}
     return error;
}
  
