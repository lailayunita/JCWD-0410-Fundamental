/*
    buat parent class Product
    constructor = nama, berat, price,stok
    buat child class dari produk yaitu Buku dan Pakaian 
    constructor = super, data unik dari buku dan pakaian 
    buat class OnlineShop
    constructor = products dan cart (private)
    method : 
        - tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada dalam arr products
            return produk sudah ada dalam toko
        - tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user ke arr cart. Harus validasi
            sudah ada apa belum dalam cart dan juga validasi ada tidak produknya di catalog, kalau yang di masukkan 
            melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya
        - transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir. example: 1km * 2000.
            tampilkan juga kembaliannya dan kosongkan cart jika berhasil melakukan transaksi. Harus ada validasi
            untuk uangUser tidak boleh kurang dari total pembayaran.
        - showCatalog : menampilkan isi catalog dari toko
        - showCart : menampilkan isi cart user
*/

class Product {
  constructor(nama, berat, price, stok) {
    this.nama = nama;
    this.berat = berat;
    this.price = price;
    this.stok = stok;
  }
}

class Buku extends Product {
  constructor(nama, berat, price, stok, penulis, penerbit) {
    super(nama, berat, price, stok);
    this.penulis = penulis;
    this.penerbit = penerbit;
    this.kategori = "buku";
  }
}

class Pakaian extends Product {
  constructor(nama, berat, price, stok, ukuran, bahan, warna) {
    super(nama, berat, price, stok);
    this.ukuran = ukuran;
    this.bahan = bahan;
    this.warna = warna;
    this.kategori = "pakaian";
  }
}

class OnlineShop {
  #products;
  #cart;

  constructor() {
    this.#products = [];
    this.#cart = [];
  }

  formatCurrency(price) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  }

  tambahProduct(produk) {
    if (!produk) {
      return "produk harus diisi";
    }
    const existingProduct = this.#products.find((item) => {
      return item.nama === produk.nama;
    });

    if (existingProduct) {
      return "produk sudah ada di katalog";
    }

    this.#products.push(produk);
    return "tambah produk success";
  }

  tambahKeKeranjang(produk, jumlah) {
    const availableProduct = this.#products.find((item) => {
      return item.nama === produk.nama;
    });

    if (!availableProduct) {
      return "produk tidak tersedia di toko ini";
    }

    let cartItem = this.#cart.find((item) => {
      return item.product.nama.toLowerCase() === produk.nama.toLowerCase();
    });

    if (cartItem) {
      if (availableProduct.stok >= jumlah) {
        cartItem.jumlah += jumlah;
        availableProduct.stok -= jumlah;
        return "produk berhasil ditambahkan ke keranjang";
      } else {
        return {
          message: "stok tidak mencukupi",
          remainingStok: availableProduct.stok,
        };
      }
    } else {
      if (availableProduct.stok >= jumlah) {
        this.#cart.push({ product: availableProduct, jumlah });
        availableProduct.stok -= jumlah;
        return "produk berhasil ditambahkan ke keranjang";
      } else {
        return {
          message: "stok tidak mencukupi",
          remainingStok: availableProduct.stok,
        };
      }
    }
  }

  transaksi(uangUser, jarak) {
    if (!jarak) {
      return "jarak harus diisi";
    }

    if (!uangUser) {
      return "uang user harus diisi";
    }

    let totalBelanja = 0;

    this.#cart.forEach((item) => {
      totalBelanja += item.product.price * item.jumlah;
    });

    const ongkir = jarak * 2000;
    const totalHarga = totalBelanja + ongkir;

    if (uangUser < totalHarga) {
      return "uang gak cukup woi!";
    }

    this.#cart = [];

    return {
      message: "Transaksi berhasil",
      totalBelanja: this.formatCurrency(totalBelanja),
      ongkir: this.formatCurrency(ongkir),
      totalHarga: this.formatCurrency(totalHarga),
      kembalian: this.formatCurrency(uangUser - totalHarga),
    };
  }

  showCatalog() {
    return {
      katalog: this.#products,
      totalKatalog: this.#products.length,
    };
  }

  showCart() {
    return {
      keranjang: this.#cart,
    };
  }
}

const produk1 = new Buku("Cara jago ngoding", 1, 100000, 5, "bowo", "banteng");
const produk2 = new Pakaian(
  "Kaos Oblong",
  1,
  99000,
  10,
  "XL,L,M",
  "kevlar",
  "merah, hijau, biru"
);

console.log(produk1);
console.log(produk2);

const onlineShop = new OnlineShop();

console.log(onlineShop.showCart());
console.log(onlineShop.showCatalog());

console.log(onlineShop.tambahProduct(produk1));
console.log(onlineShop.tambahProduct(produk2));
console.log(onlineShop.showCatalog());
console.log(onlineShop.tambahKeKeranjang(produk1, 2));
console.log(onlineShop.tambahKeKeranjang(produk2, 2));
console.log(onlineShop.showCart());

console.log(onlineShop.transaksi(100000, 2));
