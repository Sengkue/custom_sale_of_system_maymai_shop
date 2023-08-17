export default function (context) {
  if (!context.$cookies.get('token')) {
    // Use context.app.$toast.error for the error toast with icon
    context.app.$toast.error('<h4>ກະລຸນາລົງທະບຽນກ່ອນ!</h4>', {
      duration: 5000
    });

    return context.redirect('/login');
  }
}
