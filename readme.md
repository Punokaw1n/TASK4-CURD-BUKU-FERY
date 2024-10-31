# TASK 4 API MANAJEMEN BUKU :

### Mengakses end point untuk register user :

```
http://localhost:5000/api/v1/auth/register
```

Lalu jika berhasil regist maka akan seperti ini :
![Success regist](img/success_regist.png)

Lalu jika gagal regist maka akan tampil seperti ini :
![failed regist](img/gagal_regist.png)

### Mengakses end point untuk login user :

```
http://localhost:5000/api/v1/auth/login
```

Jika berhasil login :
![success login](img/success_login.png)

jika gagal login :
![gagal login](img/gagal_login.png)

### Menagakses end point logout user :

```
http://localhost:5000/api/v1/auth/logout
```

Logout user success:
![success logout](img/logout_success.png)

### Mengakses end point Create buku :

```

http://localhost:5000/api/v1/book

```

Jika berhasil menambahkan data buku :
![success add data buku](img/success_createBook.png)

Jika gagal tambah data buku :
![gagal add data buku](img/gagal_createBook.png)

### Mengakses end point Read all data buku :

```
http://localhost:5000/api/v1/book/
```

Menampilakan semua data buku :
![success menampilkan semua data buku ](img/get_allBook.png)

### Mengakses end point Read data buku by id :

```
http://localhost:5000/api/v1/book/672068994dffa18e2c20b5b9
```

Menampilkan data buku by ID buku:
![success menampilkan data buku ](img/get_byID.png)

### Mengakses end point update data buku :

```
http://localhost:5000/api/v1/book/6720a82dd65a7f2902bdfc53
```

Menampilkan data update buku:
![success menampilkan update data buku ](img/success_update.png)

Gagal update buku :
![gagal update data buku](img/gagal_update.png)

### Mengakses end point delete data buku :

```
http://localhost:5000/api/v1/book/6720a82dd65a7f2902bdfc53
```

Menampilakan data Delete buku:
![success menampilkan delete data buku ](img/success_delete.png)

Gagal delete Book:
![failed update data buku ](img/gagal_deleteBook.png)

Menampilkan data setelah di delete:
![success menampilkan setelah update data buku ](img/get_dataAfterDelete.png)

### Data user dan buku di dalam mongo compass

Data user:
![data user](img/user_compass.png)

Data buku:
![data buku](img/data_bookCompass.png)

### Swagger UI

```
http://localhost:5000/api-docs/
```

![swagger UI](img/Swagger-UI.png)
