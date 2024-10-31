import bcrypt from "bcrypt";

// Ganti dengan password yang ingin Anda cek
const passwordInput = "botol123"; // Contoh: "password123"

// Ganti dengan hash yang ada di database
const hashFromDatabase =
  "$2b$10$Yq0d.4amQF00bXi70.3Po.DXCpDbgmeLMGMSlRWyfbDch/z4XfcLy";

// Periksa apakah password cocok dengan hash
const isMatch = bcrypt.compareSync(passwordInput, hashFromDatabase);
console.log("Password cocok:", isMatch); // Harusnya true jika cocok
