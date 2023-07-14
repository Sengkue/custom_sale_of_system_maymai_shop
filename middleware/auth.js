export default function(context){
  if(!context.$cookies.get('token')){
    alert('ກະລຸນາລົງທະບຽນກ່ອນ!')
      return context.redirect('/')
  }
}
