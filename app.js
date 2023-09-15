
const app = Vue.createApp({
    data() {
        return {
            coffeeShops: [
                { id: 1, name: 'โต๊ะ A',image: 'https://static.thairath.co.th/media/PZnhTOtr5D3rd9odACgcddNkDJcv0fZztnUfPM2GNiGQEXD.webp' },
                { id: 2, name: 'โต๊ะ B',image: 'https://ak-d.tripcdn.com/images/1i66m22349ayapotd3979_W_400_0_R5_Q90.jpg?proc=source/trip'},
                { id: 3, name: 'โต๊ะ C',image: 'https://www.mylifemytravels.com/wp-content/uploads/2021/09/DSC09993-1300x867.jpg'},
                { id: 4, name: 'โต๊ะ D',image: 'https://p16-sign-sg.lemon8cdn.com/tos-alisg-v-a3e477-sg/60924439ed0241f493386dd3f8e8d5b0~tplv-sdweummd6v-shrink:1080:0:q50.webp?source=seo_feed_list&x-expires=1724803200&x-signature=yN9R9DPRTSiuJeaUcFnjJjEVwc8%3D'},
                { id: 5, name: 'โต๊ะ E',image: 'https://img.wongnai.com/p/400x0/2021/06/09/4af8635be42b4b77aa11275c9fc93a6b.jpg'},
                { id: 6, name: 'โต๊ะ F',image: 'https://www.tripgether.com/wp-content/uploads/tripgetter/CM_26.jpg'},
                // ... ร้านอื่นๆ
            ],
            currentShop: {},
            booking: {
                name: '',
                phone: '',
                date: '',
                time: '',
                tables: 1
            },
            bookings: []
        };
    },
    methods: {
        deleteBooking(bookingId) {
            this.bookings = this.bookings.filter(book => book.id !== bookingId)
        },
        bookTable() {
            this.bookings.push({
                id: Date.now(),  // ใช้ timestamp เป็น id ของการจอง (ไม่น่าจะมีซ้ำกัน)
                shopName: this.currentShop.name,
                name: this.booking.name,
                phone: this.booking.phone,
                date: this.booking.date,
                time: this.booking.time,
                tables: this.booking.tables
            });
            this.clearBookingForm();
            // ปิด modal หลังจากส่งข้อมูลการจอง
            var bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));
            bookingModal.hide();
        },
        clearBookingForm() {
            this.booking.name = '';
            this.booking.phone = '';
            this.booking.date = '';
            this.booking.time = '';
            this.booking.tables = 1;
        }
    },
});

app.mount("#app");
