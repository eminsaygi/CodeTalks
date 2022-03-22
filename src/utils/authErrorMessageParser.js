export default function (errorcode) {
  switch (errorcode) {
    case 'auth/invalid-email':
      return 'Geçersiz E-posta Adresi';
    case 'auth/email-already-exists':
      return 'Bu E-posta Adresi Zaten Kullanılıyor';
    case 'auth/wrong-password':
      return 'Şifre Hatalı';
    case 'auth/user-not-found':
      return 'Kullanıcı Bulunamadı';
    case 'auth/internal-error':
      return 'Sunucu Hatası';
    default:
      return errorcode;
  }
}
