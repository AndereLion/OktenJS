// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let form1 = document.forms.form1;
form1.onsubmit= (e)=>{
    e.preventDefault();
    localStorage.setItem('user',JSON.stringify({
        name:form1.name.value,
        age:form1.age.value
    }));
};

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let form2 = document.forms.form2;
form2.onsubmit= (e)=>{
    e.preventDefault();
    localStorage.setItem('car',JSON.stringify([{
        model:form2.model.value,
        type:form2.type.value,
        volume:form2.volume.value

    }]));
};