const q = (category, level, question, answers, correct, explanation) => ({ category, level, question, answers, correct, explanation });

const questions = [
  // ==================== STRUKTUR DATA ====================
  // Mudah (10 Soal)
  q("Struktur Data", "mudah", "Struktur data linear yang mengikuti prinsip LIFO (Last In, First Out) adalah ...", ["Queue", "Stack", "Tree", "Graph"], 1, "Stack mengambil elemen yang terakhir dimasukkan lebih dulu, seperti tumpukan piring."),
  q("Struktur Data", "mudah", "Struktur data yang mengikuti prinsip FIFO (First In, First Out) adalah ...", ["Stack", "Array", "Queue", "Tree"], 2, "Queue (antrean) mengeluarkan elemen yang masuk paling awal, seperti antrean di loket."),
  q("Struktur Data", "mudah", "Kumpulan elemen dengan tipe data yang sama dan disimpan secara berurutan di memori disebut ...", ["Array", "Graph", "Tree", "Queue"], 0, "Array menyimpan elemen dalam indeks yang berurutan di memori."),
  q("Struktur Data", "mudah", "Operasi penambahan elemen ke dalam Stack umumnya dikenal dengan istilah ...", ["Pop", "Push", "Peek", "Enqueue"], 1, "Push digunakan untuk memasukkan elemen baru ke puncak Stack."),
  q("Struktur Data", "mudah", "Operasi pengambilan atau penghapusan elemen dari puncak Stack disebut ...", ["Push", "Pop", "Dequeue", "Shift"], 1, "Pop menghapus dan mengembalikan elemen yang berada di puncak Stack."),
  q("Struktur Data", "mudah", "Operasi memasukkan data ke dalam Queue disebut dengan istilah ...", ["Push", "Pop", "Enqueue", "Dequeue"], 2, "Enqueue adalah proses penambahan elemen di bagian belakang (rear) antrean."),
  q("Struktur Data", "mudah", "Operasi mengeluarkan data dari Queue disebut ...", ["Push", "Pop", "Enqueue", "Dequeue"], 3, "Dequeue adalah proses pengambilan elemen dari bagian depan (front) antrean."),
  q("Struktur Data", "mudah", "Struktur data non-linear yang merepresentasikan hubungan hierarki (seperti struktur folder) adalah ...", ["Array", "Queue", "Tree", "Stack"], 2, "Tree terdiri dari root, branch, dan leaf yang membentuk hubungan hierarki."),
  q("Struktur Data", "mudah", "Node paling atas dalam sebuah struktur data Tree disebut ...", ["Leaf", "Root", "Child", "Parent"], 1, "Root adalah simpul puncak tempat semua cabang pohon bermula."),
  q("Struktur Data", "mudah", "Simpul (node) dalam Tree yang tidak memiliki anak (child) disebut ...", ["Root", "Branch", "Leaf", "Edge"], 2, "Leaf (daun) adalah simpul terminal yang berada di ujung paling bawah."),

  // Sedang (10 Soal)
  q("Struktur Data", "sedang", "Kompleksitas waktu pencarian biner (binary search) pada array terurut adalah ...", ["O(n)", "O(log n)", "O(n²)", "O(1)"], 1, "Setiap langkah membuang separuh data, sehingga langkahnya sebanyak log n."),
  q("Struktur Data", "sedang", "Traversal inorder pada Binary Search Tree menghasilkan data dengan urutan ...", ["Acak", "Menurun", "Menaik", "Per level"], 2, "Inorder mengunjungi kiri, akar, lalu kanan; pada BST ini menghasilkan urutan menaik."),
  q("Struktur Data", "sedang", "Kompleksitas waktu untuk mengakses elemen pada array berdasarkan indeksnya adalah ...", ["O(n)", "O(log n)", "O(n²)", "O(1)"], 3, "Akses indeks langsung menuju alamat memori, sehingga waktunya konstan O(1)."),
  q("Struktur Data", "sedang", "Algoritma sorting berikut yang bekerja dengan membagi data menjadi dua bagian secara rekursif adalah ...", ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"], 2, "Merge Sort menggunakan pendekatan divide and conquer untuk memecah dan menggabung data."),
  q("Struktur Data", "sedang", "Struktur data Graph yang direpresentasikan dengan baris dan kolom disebut ...", ["Adjacency List", "Adjacency Matrix", "Edge List", "incidence Tree"], 1, "Adjacency Matrix menggunakan matriks 2D untuk mencatat koneksi antar simpul."),
  q("Struktur Data", "sedang", "Traversal pada Graph yang menggunakan prinsip antrean (queue) adalah ...", ["DFS (Depth First Search)", "BFS (Breadth First Search)", "Binary Search", "Linear Search"], 1, "BFS menjelajahi tetangga terdekat terlebih dahulu menggunakan bantuan Queue."),
  q("Struktur Data", "sedang", "Traversal pada Graph yang menggunakan prinsip tumpukan atau rekursif (stack) adalah ...", ["BFS", "DFS", "Inorder", "Postorder"], 1, "DFS menelusuri jalur sedalam mungkin sebelum melakukan backtracking."),
  q("Struktur Data", "sedang", "Dalam Circular Queue, kondisi di mana antrean penuh dapat dideteksi ketika ...", ["Head == Tail", "(Tail + 1) % Capacity == Head", "Tail == Capacity - 1", "Head == 0"], 1, "Posisi tail yang melingkar dan bertemu tepat di sebelah head menandakan antrean penuh."),
  q("Struktur Data", "sedang", "Jenis Binary Tree di mana setiap node memiliki paling banyak dua anak disebut ...", ["General Tree", "Binary Tree", "B-Tree", "Graph"], 1, "Binary Tree dibatasi maksimal dua anak per node (kiri dan kanan)."),
  q("Struktur Data", "sedang", "Pencarian linear (linear search) pada array tidak terurut berukuran n memiliki kompleksitas terburuk ...", ["O(1)", "O(log n)", "O(n)", "O(n²)"], 2, "Pencarian linear harus memeriksa satu per satu elemen dari awal hingga akhir."),

  // Sulit (10 Soal)
  q("Struktur Data", "sulit", "Pada hash table, teknik menyimpan elemen yang bertabrakan dalam linked list di tiap slot disebut ...", ["Linear probing", "Chaining", "Rehashing", "Double hashing"], 1, "Separate chaining menaruh semua elemen dengan indeks hash sama dalam satu list pada slot tersebut."),
  q("Struktur Data", "sulit", "Kompleksitas waktu kasus terburuk algoritma Quick Sort adalah ...", ["O(n log n)", "O(n)", "O(n²)", "O(log n)"], 2, "Jika pivot selalu elemen terkecil atau terbesar, partisi tidak seimbang sehingga menjadi O(n²)."),
  q("Struktur Data", "sulit", "Ketinggian maksimum (height) dari AVL Tree dengan n buah node adalah berorde ...", ["O(n)", "O(n log n)", "O(log n)", "O(1)"], 2, "AVL tree menjamin keseimbangan tinggi pohon selalu berada di batas O(log n)."),
  q("Struktur Data", "sulit", "Algoritma untuk mencari jalur terpendek pada graph berbobot dengan sisi negatif adalah ...", ["Dijkstra", "Bellman-Ford", "Kruskal", "Prim"], 1, "Bellman-Ford mampu mendeteksi siklus bobot negatif dan menangani bobot negatif."),
  q("Struktur Data", "sulit", "Struktur data pohon yang dioptimalkan untuk sistem penyimpanan sekunder (disk) dengan banyak anak per node adalah ...", ["Binary Search Tree", "AVL Tree", "B-Tree", "Red-Black Tree"], 2, "B-Tree dirancang untuk meminimalkan operasi I/O disk pada database dan sistem file."),
  q("Struktur Data", "sulit", "Algoritma Minimum Spanning Tree (MST) yang bekerja dengan memilih sisi berbobot minimum secara iteratif dari kumpulan hutan (forest) adalah ...", ["Dijkstra", "Prim", "Kruskal", "Floyd-Warshall"], 2, "Kruskal menyortir semua sisi dan memasukkannya satu per satu selama tidak membentuk siklus."),
  q("Struktur Data", "sulit", "Faktor keseimbangan (balance factor) pada AVL Tree didefinisikan sebagai ...", ["Tinggi subtree kiri - tinggi subtree kanan", "Jumlah node kiri - jumlah node kanan", "Kedalaman root - kedalaman leaf", "Jumlah anak kiri dan kanan"], 0, "Balance factor AVL Tree harus bernilai -1, 0, atau 1."),
  q("Struktur Data", "sulit", "Kompleksitas waktu rata-rata (average case) untuk operasi pencarian pada Hash Table adalah ...", ["O(n)", "O(log n)", "O(1)", "O(n log n)"], 2, "Dengan fungsi hash yang baik, pencarian langsung menuju indeks dengan waktu konstan O(1)."),
  q("Struktur Data", "sulit", "Struktur data heap biner (binary heap) min-heap selalu memastikan bahwa nilai parent ...", ["Lebih besar dari child", "Lebih kecil atau sama dengan child", "Sama dengan child", "Tidak beraturan"], 1, "Min-heap memiliki aturan bahwa nilai parent selalu lebih kecil atau sama dengan anak-anaknya."),
  q("Struktur Data", "sulit", "Dalam algoritma Disjoint Set Union (DSU), teknik yang menyatukan pohon berdasarkan ukuran atau rank disebut ...", ["Path compression", "Union by rank/size", "Heuristic bridging", "Dynamic weighting"], 1, "Union by rank menjaga pohon tetap datar dan mempercepat operasi pencarian set."),

  // ==================== BASIS DATA ====================
  // Mudah (10 Soal)
  q("Basis Data", "mudah", "Perintah SQL yang digunakan untuk mengambil data dari database adalah ...", ["INSERT", "UPDATE", "SELECT", "DELETE"], 2, "SELECT membaca data dari satu tabel atau lebih tanpa mengubahnya."),
  q("Basis Data", "mudah", "Kolom yang mengidentifikasi setiap baris dalam tabel secara unik disebut ...", ["Foreign key", "Primary key", "Index", "View"], 1, "Primary key bernilai unik dan tidak boleh NULL, sehingga tiap baris dapat dibedakan."),
  q("Basis Data", "mudah", "Perintah SQL untuk menambahkan data baru ke dalam tabel adalah ...", ["ADD", "INSERT INTO", "UPDATE", "CREATE"], 1, "INSERT INTO digunakan untuk memasukkan baris data baru ke tabel."),
  q("Basis Data", "mudah", "Perintah SQL yang digunakan untuk menghapus baris data dari tabel adalah ...", ["REMOVE", "DROP", "DELETE FROM", "CLEAR"], 2, "DELETE FROM menghapus baris data tertentu berdasarkan kondisi tertentu."),
  q("Basis Data", "mudah", "Perintah SQL untuk memperbarui data yang sudah ada di dalam tabel adalah ...", ["MODIFY", "CHANGE", "UPDATE", "ALTER"], 2, "UPDATE mengubah nilai kolom pada baris yang memenuhi klausa WHERE."),
  q("Basis Data", "mudah", "Bahasa database relasional yang singkatan dari Structured Query Language adalah ...", ["SQL", "NoSQL", "HTML", "PHP"], 0, "SQL adalah standar bahasa pemrograman untuk mengelola sistem basis data relasional."),
  q("Basis Data", "mudah", "Klausa SQL yang digunakan untuk memfilter baris data sebelum dikelompokkan adalah ...", ["HAVING", "WHERE", "GROUP BY", "ORDER BY"], 1, "WHERE menyaring baris data mentah dari tabel sebelum proses lainnya."),
  q("Basis Data", "mudah", "Klausa SQL yang digunakan untuk mengurutkan hasil kueri adalah ...", ["SORT BY", "ORDER BY", "GROUP BY", "FILTER BY"], 1, "ORDER BY mengatur urutan data secara ascending (ASC) atau descending (DESC)."),
  q("Basis Data", "mudah", "Perintah SQL untuk menghapus seluruh struktur tabel beserta isinya dari database adalah ...", ["DELETE", "TRUNCATE", "DROP TABLE", "CLEAR TABLE"], 2, "DROP TABLE menghapus tabel secara permanen dari basis data."),
  q("Basis Data", "mudah", "Tipe data SQL yang umumnya digunakan untuk menyimpan teks atau karakter adalah ...", ["INT", "FLOAT", "VARCHAR", "DATE"], 2, "VARCHAR digunakan untuk menyimpan data teks dengan panjang variabel."),

  // Sedang (10 Soal)
  q("Basis Data", "sedang", "Klausa SQL untuk memfilter hasil agregasi setelah GROUP BY adalah ...", ["WHERE", "ORDER BY", "HAVING", "LIMIT"], 2, "WHERE memfilter baris sebelum pengelompokan, sedangkan HAVING memfilter kelompok hasil agregasi."),
  q("Basis Data", "sedang", "INNER JOIN menampilkan ...", ["Semua baris tabel kiri", "Semua baris tabel kanan", "Hanya baris yang cocok di kedua tabel", "Semua baris kedua tabel"], 2, "INNER JOIN hanya mengambil baris yang memenuhi kondisi gabungan di kedua tabel."),
  q("Basis Data", "sedang", "Jenis join yang menampilkan seluruh baris dari tabel kiri dan data yang cocok dari tabel kanan adalah ...", ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"], 1, "LEFT JOIN mempertahankan semua data tabel kiri meskipun tidak ada kecocokan di tabel kanan."),
  q("Basis Data", "sedang", "Fungsi agregasi SQL yang digunakan untuk menghitung jumlah total baris adalah ...", ["SUM()", "COUNT()", "TOTAL()", "NUM()"], 1, "COUNT() menghitung banyaknya baris yang sesuai dengan kueri."),
  q("Basis Data", "sedang", "Perintah untuk menghapus semua isi baris tabel tanpa menghapus strukturnya dan lebih cepat dari DELETE adalah ...", ["DROP", "TRUNCATE", "CLEAR", "REMOVE"], 1, "TRUNCATE menghapus seluruh data tabel dan mereset auto-increment dengan cepat."),
  q("Basis Data", "sedang", "Constraint SQL yang memastikan nilai dalam suatu kolom tidak boleh bernilai kosong adalah ...", ["UNIQUE", "PRIMARY KEY", "NOT NULL", "CHECK"], 2, "NOT NULL melarang kolom tersebut dikosongkan saat penambahan atau pembaruan data."),
  q("Basis Data", "sedang", "Constraint SQL yang memastikan semua nilai dalam kolom bersifat unik (tidak boleh ada yang kembar) adalah ...", ["PRIMARY KEY", "UNIQUE", "FOREIGN KEY", "DEFAULT"], 1, "UNIQUE mencegah duplikasi nilai pada kolom tertentu."),
  q("Basis Data", "sedang", "Kolom pada suatu tabel yang mereferensikan Primary Key pada tabel lain disebut ...", ["Primary Key", "Foreign Key", "Candidate Key", "Super Key"], 1, "Foreign Key berfungsi membangun relasi antar dua tabel secara integritas."),
  q("Basis Data", "sedang", "Fungsi agregasi SQL untuk mencari nilai rata-rata dari suatu kolom numerik adalah ...", ["AVERAGE()", "AVG()", "MEDIAN()", "MEAN()"], 1, "AVG() menghitung nilai rata-rata aritmatika dari sekumpulan nilai kolom."),
  q("Basis Data", "sedang", "Fungsi agregasi SQL untuk mencari nilai terbesar dalam kolom adalah ...", ["MAX()", "HIGH()", "TOP()", "UPPER()"], 0, "MAX() mengembalikan nilai maksimum dari sekumpulan data numerik."),

  // Sulit (10 Soal)
  q("Basis Data", "sulit", "Bentuk normal ketiga (3NF) bertujuan menghilangkan ...", ["Duplikasi tabel", "Ketergantungan transitif", "Nilai NULL", "Primary key"], 1, "3NF mengharuskan atribut non-kunci bergantung langsung pada kunci, bukan pada atribut non-kunci lain."),
  q("Basis Data", "sulit", "Properti ACID yang menjamin transaksi dijalankan seluruhnya atau dibatalkan seluruhnya adalah ...", ["Atomicity", "Consistency", "Isolation", "Durability"], 0, "Atomicity memperlakukan transaksi sebagai satu unit: semua berhasil, atau semua di-rollback."),
  q("Basis Data", "sulit", "Properti ACID yang memastikan bahwa transaksi yang telah sukses berkomitmen akan bertahan meskipun terjadi kegagalan sistem adalah ...", ["Atomicity", "Consistency", "Isolation", "Durability"], 3, "Durability menjamin data permanen di penyimpanan setelah commit."),
  q("Basis Data", "sulit", "Bentuk normal pertama (1NF) mensyaratkan bahwa setiap kolom dalam tabel harus berisi nilai ...", ["Unik", "Atomik (tidak dapat dibagi lagi)", "Null", "Foreign Key"], 1, "1NF melarang adanya nilai berulang (multivalued attribute) dalam satu sel tabel."),
  q("Basis Data", "sulit", "Anomali basis data yang terjadi ketika penghapusan suatu baris mengakibatkan hilangnya data lain yang tidak sengaja terhapus disebut ...", ["Insertion anomaly", "Update anomaly", "Deletion anomaly", "Selection anomaly"], 2, "Deletion anomaly menyebabkan informasi penting ikut lenyap saat baris tertentu dihapus."),
  q("Basis Data", "sulit", "Properti ACID yang menjamin transaksi konkuren dieksekusi seolah-olah dilakukan secara berurutan (terisolasi) adalah ...", ["Atomicity", "Consistency", "Isolation", "Durability"], 2, "Isolation mencegah transaksi yang berjalan bersamaan saling mengganggu."),
  q("Basis Data", "sulit", "Indeks basis data yang menggunakan struktur pohon seimbang untuk mempercepat pencarian data adalah ...", ["Hash Index", "B-Tree Index", "Bitmap Index", "Cluster Index"], 1, "B-Tree Index adalah struktur indeks standar yang sangat efisien untuk rentang data dan pencarian."),
  q("Basis Data", "sulit", "Subquery yang bergantung pada nilai dari query di luar (outer query) disebut ...", ["Independent subquery", "Correlated subquery", "Nested subquery", "Scalar subquery"], 1, "Correlated subquery dievaluasi berulang kali untuk setiap baris yang diproses oleh outer query."),
  q("Basis Data", "sulit", "Tingkat normalisasi yang berada di antara 3NF dan Boyce-Codd Normal Form (BCNF) adalah ...", ["1NF", "2NF", "Tidak ada, BCNF adalah tingkat ketat setelah 3NF", "4NF"], 2, "BCNF adalah versi lebih ketat dari 3NF di mana setiap determinan harus berupa candidate key."),
  q("Basis Data", "sulit", "Operasi aljabar relasional yang menggabungkan dua relasi berdasarkan kondisi predikat tertentu adalah ...", ["Projection", "Selection", "Theta Join", "Union"], 2, "Theta join menggabungkan tabel berdasarkan kondisi perbandingan umum (theta)."),

  // ==================== JARINGAN KOMPUTER ====================
  // Mudah (10 Soal)
  q("Jaringan Komputer", "mudah", "Protokol jaringan yang digunakan untuk mengakses halaman web secara aman adalah ...", ["HTTPS", "FTP", "SMTP", "SSH"], 0, "HTTPS adalah HTTP yang dienkripsi dengan TLS sehingga data aman dari penyadapan."),
  q("Jaringan Komputer", "mudah", "Alamat unik yang dimiliki perangkat dalam jaringan TCP/IP disebut ...", ["IP address", "Hostname", "Gateway", "Firewall"], 0, "IP address mengidentifikasi perangkat agar paket data dapat dikirim ke tujuan yang tepat."),
  q("Jaringan Komputer", "mudah", "Perangkat jaringan yang berfungsi untuk menghubungkan beberapa komputer dalam satu jaringan lokal (LAN) adalah ...", ["Router", "Switch", "Modem", "Server"], 1, "Switch meneruskan paket data antar perangkat dalam satu segmen jaringan LAN."),
  q("Jaringan Komputer", "mudah", "Protokol standar yang digunakan untuk mengirimkan surat elektronik (email) adalah ...", ["FTP", "SMTP", "HTTP", "DNS"], 1, "SMTP (Simple Mail Transfer Protocol) bertugas mengirimkan email antar server."),
  q("Jaringan Komputer", "mudah", "Perangkat keras jaringan yang berfungsi menghubungkan jaringan lokal ke jaringan luar (internet) adalah ...", ["Hub", "Switch", "Router", "Repeater"], 2, "Router mengatur jalur terbaik (routing) untuk meneruskan paket antar jaringan berbeda."),
  q("Jaringan Komputer", "mudah", "Cakupan wilayah jaringan komputer skala kecil yang mencakup satu ruangan atau gedung disebut ...", ["MAN", "WAN", "LAN", "WAN"], 2, "LAN (Local Area Network) menghubungkan perangkat dalam area geografis terbatas."),
  q("Jaringan Komputer", "mudah", "Kepanjangan dari singkatan LAN dalam jaringan komputer adalah ...", ["Local Area Network", "Long Access Node", "Logical Area Net", "Local Array Network"], 0, "LAN singkatan dari Local Area Network."),
  q("Jaringan Komputer", "mudah", "Protokol yang digunakan untuk mengunduh dan mengunggah file antar server di internet adalah ...", ["FTP", "HTTP", "SMTP", "ICMP"], 0, "FTP (File Transfer Protocol) didedikasikan untuk transfer file."),
  q("Jaringan Komputer", "mudah", "Kabel jaringan berbasis tembaga yang sering digunakan untuk koneksi Ethernet adalah ...", ["Kabel Coaxial", "Kabel UTP", "Fiber Optic", "Kabel Telepon"], 1, "Kabel UTP (Unshielded Twisted Pair) memakai konektor RJ-45 untuk jaringan LAN."),
  q("Jaringan Komputer", "mudah", "Perangkat yang berfungsi memperkuat sinyal jaringan agar jangkauannya lebih jauh adalah ...", ["Router", "Switch", "Repeater", "Modem"], 2, "Repeater menerima sinyal lalu memancarkannya kembali dengan daya yang diperkuat."),

  // Sedang (10 Soal)
  q("Jaringan Komputer", "sedang", "Layanan yang menerjemahkan nama domain menjadi alamat IP adalah ...", ["DHCP", "DNS", "NAT", "ARP"], 1, "DNS bekerja seperti buku telepon internet: nama domain diubah menjadi alamat IP."),
  q("Jaringan Komputer", "sedang", "Pada model OSI, proses routing antarjaringan terjadi pada layer ...", ["Data Link", "Transport", "Network", "Session"], 2, "Network layer (layer 3) menentukan jalur paket menggunakan alamat IP."),
  q("Jaringan Komputer", "sedang", "Protokol layer transport yang berorientasi sambungan (connection-oriented) dan handal adalah ...", ["UDP", "TCP", "IP", "ICMP"], 1, "TCP memastikan pengiriman data handal dengan mekanisme konfirmasi (acknowledgment)."),
  q("Jaringan Komputer", "sedang", "Protokol layer transport yang tidak berorientasi sambungan dan tanpa jaminan pengiriman adalah ...", ["TCP", "UDP", "HTTP", "FTP"], 1, "UDP mengirim data dengan cepat tanpa jaminan paket sampai urut atau lengkap."),
  q("Jaringan Komputer", "sedang", "Alat yang bertugas memberikan alamat IP secara otomatis kepada perangkat dalam jaringan adalah ...", ["DNS", "DHCP", "NAT", "ARP"], 1, "DHCP (Dynamic Host Configuration Protocol) mengelola dan mendistribusikan IP secara dinamis."),
  q("Jaringan Komputer", "sedang", "Pada model OSI, layer yang bertanggung jawab memastikan pengiriman data bebas kesalahan antar ujung (end-to-end) adalah ...", ["Network", "Transport", "Data Link", "Physical"], 1, "Transport layer mengatur koneksi end-to-end, kontrol aliran, dan deteksi error."),
  q("Jaringan Komputer", "sedang", "Alamat fisik unik yang tertanam pada Network Interface Card (NIC) dengan panjang 48-bit adalah ...", ["IP Address", "MAC Address", "Port Address", "Gateway"], 1, "MAC Address adalah pengenal perangkat keras yang bersifat unik secara global."),
  q("Jaringan Komputer", "sedang", "Protokol yang digunakan untuk mendiagnosis koneksi jaringan dan mengirimkan pesan kesalahan seperti 'Destination Unreachable' adalah ...", ["TCP", "UDP", "ICMP", "ARP"], 2, "ICMP (Internet Control Message Protocol) dipakai oleh utilitas seperti ping dan traceroute."),
  q("Jaringan Komputer", "sedang", "Protokol yang memetakan alamat IP menjadi alamat fisik (MAC Address) dalam jaringan lokal adalah ...", ["RARP", "ARP", "DHCP", "DNS"], 1, "ARP (Address Resolution Protocol) mencari MAC address berdasarkan alamat IP tujuan."),
  q("Jaringan Komputer", "sedang", "Berapa jumlah total layer pada model referensi OSI?", ["4 layer", "5 layer", "7 layer", "6 layer"], 2, "Model OSI terdiri dari 7 layer, mulai dari Physical hingga Application."),

  // Sulit (10 Soal)
  q("Jaringan Komputer", "sulit", "Urutan TCP three-way handshake yang benar adalah ...", ["SYN, ACK, SYN-ACK", "SYN, SYN-ACK, ACK", "ACK, SYN, SYN-ACK", "SYN-ACK, SYN, ACK"], 1, "Klien mengirim SYN, server membalas SYN-ACK, lalu klien menutup dengan ACK."),
  q("Jaringan Komputer", "sulit", "Jumlah host yang dapat digunakan pada jaringan dengan subnet /24 adalah ...", ["256", "255", "254", "252"], 2, "Ada 2⁸ = 256 alamat, dikurangi alamat jaringan dan broadcast, sisanya 254 host."),
  q("Jaringan Komputer", "sulit", "Kelas alamat IP v4 dengan rentang IP 192.0.0.0 hingga 223.255.255.255 termasuk dalam kelas ...", ["Kelas A", "Kelas B", "Kelas C", "Kelas D"], 2, "Kelas C digunakan untuk jaringan skala kecil hingga menengah dengan default subnet mask /24."),
  q("Jaringan Komputer", "sulit", "Berapa jumlah host yang dapat digunakan pada subnet mask /28 (CIDR)?", ["16", "14", "30", "62"], 1, "Subnet /28 menyisakan 4 bit host (2⁴ = 16), dikurangi 2 untuk network & broadcast menjadi 14 host."),
  q("Jaringan Komputer", "sulit", "Protokol routing dinamis yang menggunakan algoritma State-Link dan metric berdasarkan cost adalah ...", ["RIP", "OSPF", "BGP", "EIGRP"], 1, "OSPF (Open Shortest Path First) menghitung jalur terpendek menggunakan algoritma Dijkstra."),
  q("Jaringan Komputer", "sulit", "Protokol routing jarak jauh (distance-vector routing protocol) yang menggunakan jumlah hop (hop count maksimal 15) sebagai metrik adalah ...", ["OSPF", "RIP", "BGP", "IS-IS"], 1, "RIP (Routing Information Protocol) membatasi metrik hop maksimal 15."),
  q("Jaringan Komputer", "sulit", "Port standar default yang digunakan oleh protokol HTTPS adalah ...", ["80", "21", "443", "22"], 2, "Port 443 dialokasikan khusus untuk komunikasi web terenkripsi HTTPS."),
  q("Jaringan Komputer", "sulit", "Protokol lapisan aplikasi yang digunakan untuk manajemen jarak jauh perangkat jaringan secara aman melalui enkripsi adalah ...", ["Telnet", "SSH", "FTP", "HTTP"], 1, "SSH (Secure Shell) mengenkripsi seluruh sesi terminal untuk mencegah penyadapan."),
  q("Jaringan Komputer", "sulit", "Teknologi yang memungkinkan penerjemahan alamat IP lokal (private) menjadi alamat IP publik disebut ...", ["DNS", "DHCP", "NAT", "VPN"], 2, "NAT (Network Address Translation) menjembatani IP privat internal dengan IP publik internet."),
  q("Jaringan Komputer", "sulit", "Berapa panjang bit total dari sebuah alamat IPv6?", ["32 bit", "64 bit", "128 bit", "256 bit"], 2, "IPv6 menggunakan panjang 128 bit untuk mengatasi kelangkaan alamat IPv4."),

  // ==================== PEMROGRAMAN ====================
  // Mudah (10 Soal)
  q("Pemrograman", "mudah", "Manakah yang merupakan bahasa pemrograman berbasis objek (OOP)?", ["HTML", "Java", "CSS", "SQL"], 1, "Java berbasis kelas dan objek, sedangkan HTML dan CSS adalah bahasa markup/style dan SQL bahasa query."),
  q("Pemrograman", "mudah", "Kata kunci Java untuk membuat kelas turunan (pewarisan) adalah ...", ["implements", "extends", "inherits", "super"], 1, "`extends` membuat sebuah kelas mewarisi atribut dan method dari kelas induknya."),
  q("Pemrograman", "mudah", "Tipe data di Java yang digunakan untuk menyimpan nilai bilangan bulat (integer) adalah ...", ["double", "boolean", "int", "char"], 2, "Tipe data int digunakan untuk menyimpan bilangan bulat."),
  q("Pemrograman", "mudah", "Tipe data di Java yang hanya bernilai benar atau salah (true/false) adalah ...", ["int", "boolean", "String", "float"], 1, "Boolean merepresentasikan nilai kebenaran logika."),
  q("Pemrograman", "mudah", "Simbol atau operator yang digunakan di Java untuk melakukan perbandingan kesamaan nilai adalah ...", ["=", "==", "===", "!="], 1, "Operator `==` membandingkan kesamaan dua nilai primitif."),
  q("Pemrograman", "mudah", "Perintah standar di Java untuk mencetak keluaran ke konsol adalah ...", ["print.out()", "System.out.println()", "console.log()", "echo"], 1, "System.out.println() mencetak teks ke layar dan berganti baris."),
  q("Pemrograman", "mudah", "Extension atau akhiran file kode sumber (source code) program Java adalah ...", [".class", ".java", ".js", ".cpp"], 1, "File kode sumber Java disimpan dengan ekstensi .java sebelum dikompilasi."),
  q("Pemrograman", "mudah", "Metode khusus dalam kelas Java yang pertama kali dieksekusi saat program berjalan adalah ...", ["start()", "main()", "run()", "init()"], 1, "Metode `public static void main(String[] args)` adalah titik masuk utama aplikasi Java."),
  q("Pemrograman", "mudah", "Struktur kontrol percabangan di Java untuk memilih beberapa kondisi alternatif adalah ...", ["for", "if-else", "while", "break"], 1, "if-else digunakan untuk mengambil keputusan berdasarkan kondisi logika."),
  q("Pemrograman", "mudah", "Perulangan di Java yang jumlah iterasinya sudah diketahui secara pasti adalah ...", ["while", "do-while", "for", "switch"], 2, "Perulangan `for` ideal digunakan ketika batas iterasi sudah jelas."),

  // Sedang (10 Soal)
  q("Pemrograman", "sedang", "Prinsip OOP yang menyembunyikan data internal objek dan mengaksesnya lewat method disebut ...", ["Polimorfisme", "Pewarisan", "Enkapsulasi", "Abstraksi"], 2, "Enkapsulasi melindungi data (biasanya private) dan membukanya lewat getter/setter."),
  q("Pemrograman", "sedang", "Beberapa method bernama sama dengan parameter berbeda dalam satu kelas disebut ...", ["Overriding", "Overloading", "Casting", "Chaining"], 1, "Overloading membedakan method dari daftar parameternya; overriding terjadi di kelas turunan."),
  q("Pemrograman", "sedang", "Prinsip OOP yang memungkinkan satu nama method berfungsi berbeda pada kelas turunan yang berbeda adalah ...", ["Enkapsulasi", "Polimorfisme", "Inheritance", "Abstraksi"], 1, "Polimorfisme memungkinkan bentuk method menyesuaikan objek aktualnya lewat overriding."),
  q("Pemrograman", "sedang", "Kata kunci di Java yang digunakan untuk merujuk pada objek dari kelas induk (super class) adalah ...", ["this", "super", "base", "parent"], 1, "Kata kunci `super` memanggil constructor atau method dari kelas induk."),
  q("Pemrograman", "sedang", "Modifier akses di Java yang membuat atribut atau method hanya dapat diakses dari dalam kelas itu sendiri adalah ...", ["public", "protected", "private", "default"], 2, "Private membatasi akses agar tidak bisa diakses dari luar kelas."),
  q("Pemrograman", "sedang", "Blok kode di Java yang digunakan untuk menangkap dan menangani eksepsi (kesalahan runtime) adalah ...", ["try-catch", "if-else", "switch-case", "for-loop"], 0, "try-catch mencegah program crash saat terjadi error saat berjalan."),
  q("Pemrograman", "sedang", "Interface dalam Java secara default berisi method yang bersifat ...", ["private", "public abstract", "protected", "static"], 1, "Method di dalam interface secara implisit bersifat publik dan abstrak."),
  q("Pemrograman", "sedang", "Kelas abstrak (abstract class) di Java ditandai dengan penggunaan kata kunci ...", ["virtual", "abstract", "interface", "implements"], 1, "Kata kunci abstract digunakan untuk mendeklarasikan kelas yang belum lengkap implementasinya."),
  q("Pemrograman", "sedang", "Proses mengubah tipe data dari satu bentuk ke bentuk lainnya di Java disebut ...", ["Wrapping", "Casting", "Binding", "Parsing"], 1, "Type casting mengonversi nilai dari satu tipe data ke tipe data kompatibel lainnya."),
  q("Pemrograman", "sedang", "Kata kunci di Java yang digunakan untuk menghentikan perulangan atau keluar dari switch secara paksa adalah ...", ["continue", "return", "break", "exit"], 2, "Break menghentikan eksekusi perulangan atau switch seketika."),

  // Sulit (10 Soal)
  q("Pemrograman", "sulit", "Pemilihan implementasi method berdasarkan tipe objek sebenarnya saat runtime disebut ...", ["Static binding", "Dynamic dispatch", "Overloading", "Compile-time check"], 1, "Pada method overriding, JVM memilih versi method sesuai objek aktual, bukan tipe referensinya."),
  q("Pemrograman", "sulit", "Di Java, kelas yang dideklarasikan dengan kata kunci final ...", ["Tidak dapat diwarisi", "Tidak dapat dibuat objeknya", "Hanya punya method statis", "Harus abstrak"], 0, "Kelas final tidak boleh di-extends, contohnya kelas String."),
  q("Pemrograman", "sulit", "Mekanisme pembersihan memori objek yang sudah tidak digunakan secara otomatis di Java ditangani oleh ...", ["Garbage Collector", "Memory Allocator", "Destructor", "Pointer Cleaner"], 0, "Garbage Collector bertugas mendaur ulang memori heap dari objek yang tidak lagi direferensikan."),
  q("Pemrograman", "sulit", "Apa keluaran atau perilaku ketika method finalize() dipanggil pada objek di Java modern?", ["Objek langsung dihapus", "Sudah deprecated/tidak disarankan digunakan untuk manajemen memori", "Memori langsung kosong", "Program berhenti"], 1, "Finalize sudah ditinggalkan sejak Java 9 karena tidak efisien dan tidak terprediksi."),
  q("Pemrograman", "sulit", "Jenis eksepsi (exception) di Java yang tidak wajib ditangani secara eksplisit dengan try-catch atau throws adalah ...", ["Checked Exception", "Unchecked Exception (RuntimeException)", "IO Exception", "SQL Exception"], 1, "RuntimeException adalah eksepsi saat runtime yang tidak wajib ditangkap secara eksplisit (unchecked)."),
  q("Pemrograman", "sulit", "Desain pattern (pola desain) yang memastikan sebuah kelas hanya memiliki satu instansiasi (objek) tunggal di seluruh aplikasi adalah ...", ["Factory", "Singleton", "Observer", "Adapter"], 1, "Singleton pattern membatasi pembuatan objek hanya satu buah dan menyediakan titik akses global."),
  q("Pemrograman", "sulit", "Dalam pemrograman konkuren Java, antarmuka (interface) apa yang digunakan untuk membuat thread baru selain mewarisi Thread?", ["Runnable", "Callable", "Serializable", "Cloneable"], 0, "Runnable menyediakan method run() untuk diimplementasikan oleh kelas yang ingin dijadikan thread."),
  q("Pemrograman", "sulit", "Kata kunci di Java yang mencegah variabel dibaca dari cache CPU lokal dan memaksa pembacaan langsung dari memori utama adalah ...", ["static", "volatile", "transient", "synchronized"], 1, "Volatile menjamin visibilitas perubahan variabel antar thread secara langsung."),
  q("Pemrograman", "sulit", "Kata kunci transient di Java digunakan untuk menandai atribut agar ...", ["Tidak ikut diserialisasi (serialized)", "Bersifat konstan", "Tidak dapat diubah", "Hanya bisa dibaca"], 0, "Transient mengabaikan atribut tersebut saat objek diubah menjadi byte stream (serialisasi)."),
  q("Pemrograman", "sulit", "Mekanisme sinkronisasi thread di Java agar tidak terjadi kondisi balap (race condition) menggunakan kata kunci ...", ["volatile", "synchronized", "transient", "native"], 1, "Synchronized mengunci blok kode atau method agar hanya bisa diakses satu thread dalam satu waktu."),

  // ==================== SISTEM OPERASI ====================
  // Mudah (10 Soal)
  q("Sistem Operasi", "mudah", "Komponen inti sistem operasi yang menjembatani aplikasi dan perangkat keras disebut ...", ["Compiler", "Kernel", "Driver", "Shell"], 1, "Kernel mengelola CPU, memori, dan perangkat, lalu menyediakannya bagi aplikasi."),
  q("Sistem Operasi", "mudah", "Manakah yang merupakan contoh sistem operasi?", ["Linux", "MySQL", "Chrome", "Python"], 0, "Linux adalah sistem operasi; MySQL adalah DBMS, Chrome peramban, dan Python bahasa pemrograman."),
  q("Sistem Operasi", "mudah", "Program atau antarmuka yang menerjemahkan perintah pengguna untuk dieksekusi oleh sistem operasi disebut ...", ["Kernel", "Shell", "Compiler", "Assembler"], 1, "Shell adalah antarmuka command line atau GUI tempat pengguna berinteraksi dengan sistem."),
  q("Sistem Operasi", "mudah", "Sistem operasi bersifat open-source yang dikembangkan berdasarkan kernel Unix oleh Linus Torvalds adalah ...", ["Windows", "MacOS", "Linux", "iOS"], 2, "Linux adalah sistem operasi open-source populer yang dibuat oleh Linus Torvalds."),
  q("Sistem Operasi", "mudah", "Proses yang sedang berjalan di dalam memori komputer sering disebut dengan istilah ...", ["Thread", "Task", "Process", "Job"], 2, "Process adalah program yang sedang dieksekusi oleh sistem operasi."),
  q("Sistem Operasi", "mudah", "Manakah yang merupakan contoh sistem operasi mobile buatan Google?", ["iOS", "Android", "Windows Phone", "Symbian"], 1, "Android adalah sistem operasi seluler berbasis Linux yang dikembangkan oleh Google."),
  q("Sistem Operasi", "mudah", "Manakah yang merupakan contoh sistem operasi buatan Apple untuk komputer Macintosh?", ["Windows", "Linux", "macOS", "Ubuntu"], 2, "macOS adalah sistem operasi eksklusif untuk lini komputer Mac dari Apple."),
  q("Sistem Operasi", "mudah", "Perangkat lunak kecil yang menjadi jembatan komunikasi antara sistem operasi dan perangkat keras (seperti printer/kartu grafis) disebut ...", ["Kernel", "Driver", "Compiler", "Interpreter"], 1, "Device driver mengontrol perangkat keras agar dapat dikenali sistem operasi."),
  q("Sistem Operasi", "mudah", "Manajemen berkas pada sistem operasi bertanggung jawab untuk ...", ["Mengatur alokasi CPU", "Penyimpanan dan pengorganisasian file di media simpan", "Mengelola memori utama", "Mengatur koneksi jaringan"], 1, "File management mengatur direktori, penyimpanan, dan hak akses berkas."),
  q("Sistem Operasi", "mudah", "Keadaan di mana komputer berhenti merespons perintah karena sumber daya terkunci disebut ...", ["Booting", "Hang / Deadlock", "Caching", "Swapping"], 1, "Hang atau sistem macet terjadi saat proses saling menunggu sumber daya tanpa ujung."),

  // Sedang (10 Soal)
  q("Sistem Operasi", "sedang", "Algoritma penjadwalan CPU yang memberi jatah waktu (quantum) tetap bergiliran adalah ...", ["FCFS", "SJF", "Round Robin", "Priority"], 2, "Round Robin memberi tiap proses quantum yang sama secara bergiliran sehingga adil."),
  q("Sistem Operasi", "sedang", "Perbedaan thread dan proses: thread dalam satu proses ...", ["Memiliki memori terpisah", "Berbagi ruang memori", "Tidak dapat berjalan bersamaan", "Selalu berprioritas tinggi"], 1, "Thread dalam satu proses berbagi memori dan sumber daya, sehingga lebih ringan dari proses baru."),
  q("Sistem Operasi", "sedang", "Algoritma penjadwalan CPU non-preemptive yang selalu mendahulukan proses dengan durasi eksekusi terpendek adalah ...", ["FCFS", "SJF (Shortest Job First)", "Round Robin", "Multilevel Queue"], 1, "SJF mengeksekusi proses dengan burst time paling singkat terlebih dahulu."),
  q("Sistem Operasi", "sedang", "Kondisi di mana dua proses atau lebih mengakses data bersamaan dan hasil akhirnya bergantung pada urutan eksekusi disebut ...", ["Deadlock", "Race Condition", "Starvation", "Mutual Exclusion"], 1, "Race condition terjadi akibat akses bersamaan yang tidak disinkronisasi."),
  q("Sistem Operasi", "sedang", "Mekanisme penguncian variabel atau memori bersama untuk mencegah race condition disebut ...", ["Paging", "Semaphore / Mutex", "Swapping", "Virtual Memory"], 1, "Semaphore dan Mutex mengontrol akses eksklusif ke sumber daya bersama."),
  q("Sistem Operasi", "sedang", "Keadaan di mana suatu proses terus-menerus menunggu jatah CPU karena proses lain terus mendahului disebut ...", ["Deadlock", "Starvation", "Thrashing", "Interrupt"], 1, "Starvation (kelaparan proses) terjadi ketika proses diabaikan dalam waktu lama oleh penjadwal."),
  q("Sistem Operasi", "sedang", "Teknik sistem operasi yang menggunakan sebagian ruang penyimpanan disk (HDD/SSD) sebagai ekstensi memori utama disebut ...", ["Cache memory", "Virtual Memory", "Flash memory", "Registers"], 1, "Virtual memory memindahkan halaman memori yang jarang diakses ke disk saat RAM penuh."),
  q("Sistem Operasi", "sedang", "Kondisi performa sistem drop drastis karena terlalu sering memindahkan halaman memori antara RAM dan disk disebut ...", ["Deadlock", "Thrashing", "Starvation", "Fragmentation"], 1, "Thrashing terjadi ketika sistem lebih banyak menghabiskan waktu melakukan paging daripada eksekusi."),
  q("Sistem Operasi", "sedang", "Tabel yang digunakan sistem operasi untuk melacak alokasi memori fisik dan halaman proses disebut ...", ["Process Control Block", "Page Table", "File Allocation Table", "Interrupt Vector"], 1, "Page table memetakan alamat memori virtual proses ke bingkai (frame) memori fisik."),
  q("Sistem Operasi", "sedang", "Struktur data kernel yang menyimpan seluruh informasi status, register, dan kontrol dari suatu proses adalah ...", ["PCB (Process Control Block)", "File Descriptor", "Inode", "Page Table"], 0, "PCB merekam identitas dan status eksekusi proses yang sedang dikelola sistem operasi."),

  // Sulit (10 Soal)
  q("Sistem Operasi", "sulit", "Manakah yang BUKAN syarat terjadinya deadlock?", ["Mutual exclusion", "Hold and wait", "Circular wait", "Preemption"], 3, "Deadlock butuh kondisi no preemption (sumber daya tidak bisa direbut paksa), bukan adanya preemption."),
  q("Sistem Operasi", "sulit", "Teknik manajemen memori yang membagi memori menjadi blok berukuran tetap disebut ...", ["Segmentasi", "Paging", "Swapping", "Caching"], 1, "Paging membagi memori logis menjadi page dan memori fisik menjadi frame berukuran sama."),
  q("Sistem Operasi", "sulit", "Algoritma klasik yang digunakan untuk menghindari deadlock dengan cara memeriksa ketersediaan sumber daya sebelum mengalokasikannya adalah ...", ["Banker's Algorithm", "Round Robin", "Dijkstra Algorithm", "Producer-Consumer Algorithm"], 0, "Banker's algorithm mensimulasikan alokasi sumber daya untuk memastikan sistem berada di safe state."),
  q("Sistem Operasi", "sulit", "Teknik manajemen memori yang membagi memori berdasarkan sudut pandang logika pengguna (seperti fungsi, modul, atau array) adalah ...", ["Paging", "Segmentasi", "Swapping", "Virtual Memory"], 1, "Segmentasi memecah memori berdasarkan modul logis program dengan ukuran bervariasi."),
  q("Sistem Operasi", "sulit", "Masalah klasik sinkronisasi di mana proses produsen menghasilkan data dan konsumen mengonsumsinya melalui buffer terbatas disebut ...", ["Dining Philosophers", "Producer-Consumer Problem", "Readers-Writers Problem", "Sleeping Barber"], 1, "Producer-Consumer problem menguji koordinasi akses buffer bersama tanpa konflik."),
  q("Sistem Operasi", "sulit", "Masalah sinkronisasi klasik yang menggambarkan lima ilmuwan duduk di meja makan dengan garpu terbatas adalah ...", ["Producer-Consumer", "Dining Philosophers", "Readers-Writers", "Banker's Problem"], 1, "Dining Philosophers menguji pencegahan deadlock dan starvation pada alokasi sumber daya bersama."),
  q("Sistem Operasi", "sulit", "Sinyal perangkat keras atau perangkat lunak yang memaksa CPU menghentikan sementara tugas saat ini untuk melayani kejadian penting disebut ...", ["Interrupt", "Polling", "System Call", "Context Switch"], 0, "Interrupt memberi tahu CPU bahwa ada kejadian mendesak yang memerlukan perhatian segera."),
  q("Sistem Operasi", "sulit", "Proses pengalihan CPU dari satu proses yang sedang berjalan ke proses lain dengan menyimpan konteks lama dan memuat konteks baru disebut ...", ["Context Switch", "Thread Dispatch", "Process Migration", "Kernel Swap"], 0, "Context switch memungkinkan multitasking dengan menyimpan state proses sebelumnya."),
  q("Sistem Operasi", "sulit", "Antarmuka pemrograman yang disediakan oleh kernel agar program aplikasi dapat meminta layanan sistem operasi disebut ...", ["API Umum", "System Call", "Driver Interface", "Virtual Machine"], 1, "System call adalah jembatan bagi program pengguna untuk mengakses fungsi tingkat rendah kernel."),
  q("Sistem Operasi", "sulit", "Jenis kernel sistem operasi di mana sebagian besar layanan sistem (seperti driver, sistem file) berjalan di ruang pengguna (user space) untuk meningkatkan kestabilan disebut ...", ["Monolithic Kernel", "Microkernel", "Hybrid Kernel", "Exokernel"], 1, "Microkernel meminimalkan bagian yang berjalan di kernel mode demi keamanan dan modularitas.")
];

const ALL = "all";
const LEVELS = { mudah: "Mudah", sedang: "Sedang", sulit: "Sulit" };
const CATEGORIES = [...new Set(questions.map((item) => item.category))];
const TIME_LIMIT = 15;
const WARNING_AT = 5;
const MAX_QUESTIONS = 10;
const HISTORY_LIMIT = 20;
const HIGH_SCORE_KEY = "quizup-high-score-pct";
const HISTORY_KEY = "quizup-history";

const $ = (selector) => document.querySelector(selector);
const screens = {
  start: $("#start-screen"),
  quiz: $("#quiz-screen"),
  result: $("#result-screen"),
  history: $("#history-screen")
};
const answersContainer = $("#answers");
const nextButton = $("#next-btn");
const feedback = $("#feedback");
const explanation = $("#explanation");
const progressBar = $("#progress-bar");
const timerBox = $("#timer");
const timerValue = $("#timer-value");
const timerBar = $("#timer-bar");

const selection = { category: ALL, level: "mudah" };
let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let timeLeft = TIME_LIMIT;
let timerId = null;
let answered = false;

// ---------- Utilitas ----------
const storage = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch { /* penyimpanan tidak tersedia */ }
  }
};

// Fisher–Yates: mengacak urutan soal tanpa mengubah isi/jawaban benar.
const shuffle = (list) => {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const unique = (list) => [...new Map(list.map((item) => [item.question, item])).values()];
const getPool = () => questions.filter((item) =>
  item.level === selection.level && (selection.category === ALL || item.category === selection.category));
const getHighScore = () => Number(storage.get(HIGH_SCORE_KEY, 0)) || 0;
const getHistory = () => {
  const data = storage.get(HISTORY_KEY, []);
  return Array.isArray(data) ? data : [];
};

// ---------- Layar & pengaturan awal ----------
function showScreen(name) {
  stopTimer();
  Object.values(screens).forEach((item) => item.classList.add("hidden"));
  screens[name].classList.remove("hidden");
}

function updateHighScoreDisplay() {
  const text = `${getHighScore()}%`;
  $("#start-high-score").textContent = text;
  $("#final-high-score").textContent = text;
}

function renderChoices(containerId, items) {
  const container = $(containerId);
  container.replaceChildren();
  items.forEach(([value, label]) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "choice-chip";
    chip.dataset.value = value;
    chip.textContent = label;
    chip.setAttribute("role", "radio");
    container.appendChild(chip);
  });
}

function syncChoices() {
  [["#category-options", "category"], ["#level-options", "level"]].forEach(([id, key]) => {
    $(id).querySelectorAll(".choice-chip").forEach((chip) => {
      chip.setAttribute("aria-checked", String(chip.dataset.value === selection[key]));
    });
  });
  $("#pool-count").textContent = Math.min(getPool().length, MAX_QUESTIONS);
}

function bindChoices(containerId, key) {
  $(containerId).addEventListener("click", (event) => {
    const chip = event.target.closest(".choice-chip");
    if (!chip) return;
    selection[key] = chip.dataset.value;
    syncChoices();
  });
}

// ---------- Timer ----------
function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

function updateTimer() {
  timerValue.textContent = timeLeft;
  timerBar.style.width = `${(timeLeft / TIME_LIMIT) * 100}%`;
  timerBox.classList.toggle("warning", !answered && timeLeft <= WARNING_AT);
}

function startTimer() {
  stopTimer();
  timeLeft = TIME_LIMIT;
  updateTimer();
  timerId = setInterval(() => {
    timeLeft -= 1;
    updateTimer();
    if (timeLeft <= 0) {
      stopTimer();
      selectAnswer(null);
    }
  }, 1000);
}

// ---------- Kuis ----------
function startQuiz() {
  quizQuestions = shuffle(unique(getPool())).slice(0, MAX_QUESTIONS);
  if (!quizQuestions.length) return;
  currentIndex = 0;
  score = 0;
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  feedback.textContent = "";
  feedback.className = "feedback";
  explanation.classList.add("hidden");
  nextButton.classList.add("hidden");

  const item = quizQuestions[currentIndex];
  $("#current-number").textContent = String(currentIndex + 1).padStart(2, "0");
  $("#total-number").textContent = String(quizQuestions.length).padStart(2, "0");
  $("#category-label").textContent = `${item.category} · ${LEVELS[item.level]}`;
  $("#question-text").textContent = item.question;
  progressBar.style.width = `${((currentIndex + 1) / quizQuestions.length) * 100}%`;

  answersContainer.replaceChildren();
  item.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.dataset.index = index;

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = String.fromCharCode(65 + index);
    const label = document.createElement("span");
    label.textContent = answer;

    button.append(letter, label);
    answersContainer.appendChild(button);
  });
  startTimer();
}

// Event delegation: satu listener menangani semua tombol jawaban.
answersContainer.addEventListener("click", (event) => {
  const option = event.target.closest(".answer-option");
  if (!option || answered) return;
  selectAnswer(Number(option.dataset.index));
});

function selectAnswer(selectedIndex) {
  if (answered) return;
  answered = true;
  stopTimer();
  updateTimer();

  const item = quizQuestions[currentIndex];
  answersContainer.querySelectorAll(".answer-option").forEach((option, index) => {
    option.disabled = true;
    if (index === item.correct) option.classList.add("correct");
    if (selectedIndex === index && selectedIndex !== item.correct) option.classList.add("wrong");
  });

  if (selectedIndex === item.correct) {
    score += 1;
    feedback.textContent = "✓ Tepat sekali! Jawabanmu benar.";
    feedback.className = "feedback";
  } else if (selectedIndex === null) {
    feedback.textContent = `Waktu habis! Jawaban: ${item.answers[item.correct]}`;
    feedback.className = "feedback wrong";
  } else {
    feedback.textContent = "Belum tepat. Perhatikan jawaban yang berwarna hijau.";
    feedback.className = "feedback wrong";
  }

  $("#explanation-text").textContent = item.explanation;
  explanation.classList.remove("hidden");
  nextButton.textContent = currentIndex === quizQuestions.length - 1 ? "Lihat hasil →" : "Soal berikutnya →";
  nextButton.classList.remove("hidden");
}

// ---------- Hasil & riwayat ----------
function saveResult(percent) {
  const categoryLabel = selection.category === ALL ? "Semua kategori" : selection.category;
  const history = [
    { date: new Date().toISOString(), category: categoryLabel, level: LEVELS[selection.level], correct: score, total: quizQuestions.length, percent },
    ...getHistory()
  ].slice(0, HISTORY_LIMIT);
  storage.set(HISTORY_KEY, history);
}

function showResult() {
  const total = quizQuestions.length;
  const percent = Math.round((score / total) * 100);
  const isNewRecord = percent > getHighScore();
  if (isNewRecord) storage.set(HIGH_SCORE_KEY, percent);
  saveResult(percent);

  $("#final-score").textContent = score;
  $("#final-total").textContent = `/ ${total}`;
  $("#score-circle").style.setProperty("--pct", percent);
  $("#correct-count").textContent = score;
  $("#wrong-count").textContent = total - score;
  $("#percent").textContent = `${percent}%`;
  $("#result-title").textContent = percent === 100 ? "Luar biasa!" : percent >= 60 ? "Kerja bagus!" : "Tetap semangat!";
  $("#result-message").textContent = percent === 100
    ? "Sempurna! Kamu menjawab semua pertanyaan dengan benar."
    : isNewRecord ? "Rekor baru! Skor tertinggimu diperbarui." : "Terus berlatih dan coba pecahkan skor tertinggimu.";
  updateHighScoreDisplay();
  showScreen("result");
}

function renderHistory() {
  const history = getHistory();
  const list = $("#history-list");
  list.replaceChildren();
  $("#history-empty").classList.toggle("hidden", history.length > 0);
  $("#clear-history-btn").disabled = history.length === 0;

  history.forEach((entry) => {
    const date = new Date(entry.date);
    const item = document.createElement("li");
    item.className = "history-item";

    const info = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = `${entry.category} · ${entry.level}`;
    const when = document.createElement("small");
    when.textContent = Number.isNaN(date.getTime())
      ? "-" : date.toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" });
    info.append(title, when);

    const result = document.createElement("div");
    result.className = "history-score";
    const points = document.createElement("strong");
    points.textContent = `${entry.correct}/${entry.total}`;
    const percent = document.createElement("small");
    percent.textContent = `${entry.percent}%`;
    result.append(points, percent);

    item.append(info, result);
    list.appendChild(item);
  });
}

function openHistory() {
  renderHistory();
  showScreen("history");
}

// ---------- Event ----------
// Pintasan keyboard: 1-4 / A-D memilih jawaban, Enter lanjut.
document.addEventListener("keydown", (event) => {
  if (screens.quiz.classList.contains("hidden") || event.ctrlKey || event.metaKey || event.altKey) return;
  const key = event.key.toLowerCase();
  const index = "1234".includes(key) ? Number(key) - 1 : "abcd".indexOf(key);
  if (key.length === 1 && index >= 0 && !answered) {
    answersContainer.querySelectorAll(".answer-option")[index]?.click();
  } else if (key === "enter" && answered && document.activeElement !== nextButton) {
    nextButton.click();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < quizQuestions.length - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    showResult();
  }
});

$("#start-btn").addEventListener("click", startQuiz);
$("#restart-btn").addEventListener("click", startQuiz);
$("#history-btn").addEventListener("click", openHistory);
$("#result-history-btn").addEventListener("click", openHistory);
$("#history-back-btn").addEventListener("click", () => {
  updateHighScoreDisplay();
  showScreen("start");
});
$("#clear-history-btn").addEventListener("click", () => {
  if (!window.confirm("Hapus seluruh riwayat kuis?")) return;
  storage.remove(HISTORY_KEY);
  renderHistory();
});
$("#home-btn").addEventListener("click", () => {
  updateHighScoreDisplay();
  showScreen("start");
});
$("#theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  $("#theme-toggle").textContent = document.body.classList.contains("dark") ? "☀" : "☾";
});

renderChoices("#category-options", [[ALL, "Semua kategori"], ...CATEGORIES.map((name) => [name, name])]);
renderChoices("#level-options", Object.entries(LEVELS));
bindChoices("#category-options", "category");
bindChoices("#level-options", "level");
syncChoices();
updateHighScoreDisplay();