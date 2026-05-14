// ===== MODAL WORKING CODE =====

const overlay =
document.getElementById("modalOverlay");

const emailModal =
document.getElementById("emailModal");

const quoteModal =
document.getElementById("quoteModal");

const contactBtn =
document.getElementById("contactBtn");

const quoteBtn =
document.getElementById("quoteBtn");

const catalogueBtn =
document.getElementById("catalogueBtn");


// CLOSE ALL
function closeAllModals(){

  overlay.style.display = "none";

  emailModal.style.display = "none";

  quoteModal.style.display = "none";

}


// OPEN CALLBACK / CONTACT
function openEmailModal(){

  overlay.style.display = "flex";

  emailModal.style.display = "block";

  quoteModal.style.display = "none";

}


// OPEN CUSTOM QUOTE
function openQuoteModal(){

  overlay.style.display = "flex";

  quoteModal.style.display = "block";

  emailModal.style.display = "none";

}


// CONTACT BUTTON
if(contactBtn){

  contactBtn.addEventListener(
    "click",
    openEmailModal
  );

}


// CUSTOM QUOTE BUTTON
if(quoteBtn){

  quoteBtn.addEventListener(
    "click",
    openQuoteModal
  );

}


// REQUEST CATALOGUE BUTTON
if(catalogueBtn){

  catalogueBtn.addEventListener(
    "click",
    openEmailModal
  );

}


// ===== CLOSE BUTTON FIX =====

document
.querySelectorAll(".close-modal")
.forEach((button)=>{

  button.addEventListener("click", () => {

    closeAllModals();

  });

});


// CLICK OUTSIDE TO CLOSE
overlay.addEventListener("click", (e)=>{

  if(e.target === overlay){

    closeAllModals();

  }

});