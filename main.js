import './resources/css/style.css'

let searchInput = document.getElementById('searchInput');
let iconSearch = document.getElementById('iconSearch');
let iconCancel = document.getElementById('iconCancel');

searchInput.addEventListener('focus', ()=>{
  iconSearch.className += ' activeIcon';
  if(searchInput.value.length == 0){
    iconCancel.className += ' hidden';
  }
}, false);

searchInput.addEventListener('blur', () => {
  iconSearch.classList.remove('activeIcon');
  if(searchInput.value.length == 0){
    iconCancel.className += ' hidden';
  }
}, false)

searchInput.addEventListener('keydown', ()=>{
  if(searchInput.value.length != 0){
    iconCancel.classList.remove('hidden');
  }
}, false);

searchInput.addEventListener('keydown', ()=> {
  if(searchInput.value.length == 0){
    iconCancel.className += ' hidden';
  }
}, false);

iconCancel.addEventListener('click', ()=>{
  searchInput.value = '';
  iconCancel.className += ' hidden';
}, false);
