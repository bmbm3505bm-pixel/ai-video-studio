const toast = document.getElementById('toast');
let toastTimer;
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),3000)}
const tabs=[...document.querySelectorAll('.mode-tab')];
const prompt=document.getElementById('prompt');
const uploadBox=document.getElementById('uploadBox');
tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(t=>t.classList.toggle('active',t===tab));const imageMode=tab.dataset.mode==='image';uploadBox.classList.toggle('hidden',!imageMode);prompt.placeholder=imageMode?'اكتب كيف تريد أن تتحرك الصورة أو ما الذي تريد أن يحدث فيها...':'مثال: لقطة سينمائية لمدينة مستقبلية عند الغروب، أضواء نيون وانعكاسات على الشوارع...';}));
document.getElementById('imageUpload').addEventListener('change',e=>{const file=e.target.files[0];document.getElementById('fileName').textContent=file?`تم اختيار: ${file.name}`:''});
document.getElementById('generateBtn').addEventListener('click',()=>{const imageMode=document.querySelector('.mode-tab.active').dataset.mode==='image';if(!prompt.value.trim()){showToast('اكتب وصف الفيديو أولاً حتى نتمكن من المتابعة.');prompt.focus();return;}if(imageMode&&!document.getElementById('imageUpload').files.length){showToast('ارفع صورة أولاً لاستخدام وضع صورة إلى فيديو.');return;}showToast('هذه نسخة تجريبية: ربط محرك توليد الفيديو لم يتم بعد.');});
function login(){showToast('نظام الحسابات قيد التجهيز وسيُضاف في المرحلة التالية.');}
document.getElementById('loginBtn').addEventListener('click',login);document.querySelectorAll('.login-trigger').forEach(b=>b.addEventListener('click',login));
document.getElementById('menuBtn').addEventListener('click',()=>document.querySelector('.topbar nav').classList.toggle('open'));
document.querySelectorAll('.topbar nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.topbar nav').classList.remove('open')));
