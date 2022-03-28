


function add(){
let nota=document.getElementById('notas').value;
if(nota!=""){
    localStorage.id=nota
    exibir()
    console.log(localStorage.id);
   

    return localStorage.id 


}
}
function exibir(){
    let main=document.getElementById('main');
    var textarea = document.createElement ("textarea") ;
    textarea.setAttribute("id","n")
    textarea.setAttribute("cols","50")
    textarea.setAttribute("rows","8")
    textarea.setAttribute("style","resize: none;")
    textarea.setAttribute("readonly","")
    main.appendChild (textarea) ;  

    let recebe = localStorage.id ;
    textarea.innerHTML=`${recebe}`

    let button=document.createElement("button");
    button.setAttribute("onclick","excluir()")
    button.setAttribute("id","bnt")
    button.innerHTML="Excluir"
    main.appendChild(button)
    window.onload

}
if (exibir){
    function excluir(){
    localStorage.removeItem("id") ;
    let textarea=document.getElementById("n")
    
    
        let button=document.getElementById("bnt")

        textarea.remove()
        button.remove()

        console.log(localStorage.id)
      
    }


}
 
 
