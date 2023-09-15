<template>
  <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Coffee Shop Booking</title>
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

        <!-- Link to your custom stylesheet -->
        <link rel="stylesheet" href="custom.css">
    </head>
    
    
<body>

    <div id="app" class="container mt-5">
        <h2>Coffee Shops</h2>
        <div class="row">
            <div v-for="shop in coffeeShops" :key="shop.id" class="col-md-4">
                <div class="card mb-4">
                    <div class="card-body">
                        <h4>{{ shop.name }}</h4>
                        <img :src="shop.image" alt="Coffee Shop Image" class="card-img-top img-fluid">
                        <button @click="currentShop = shop" data-bs-toggle="modal" data-bs-target="#bookingModal" class="btn btn-primary">Book a table</button>
                    </div>
                </div>
            </div>
        </div> <!-- ปิดแท็ก .row ที่นี่ -->
    <!-- Booking Modal -->
    <div class="modal fade" id="bookingModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Book a table at {{ currentShop.name }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="bookTable">
                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input type="text" v-model="booking.name" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Phone</label>
                            <input type="text" v-model="booking.phone" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Date</label>
                            <input type="date" v-model="booking.date" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Time</label>
                            <input type="time" v-model="booking.time" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Number of tables</label>
                            <input type="number" v-model="booking.tables" class="form-control">
                        </div>
                        <button type="submit" class="btn btn-primary">Book</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <h3 class="mt-5">Bookings</h3>
    <ul>
        <li v-for="book in bookings" :key="book.id">
            {{ book.name }} จอง {{ book.shopName }} วันที่ {{ book.date }} เวลา {{ book.time }} สำหรับ {{ book.tables }} table(s).
            <button @click="deleteBooking(book.id)" class="btn btn-danger btn-sm">Delete</button>
        </li>        
    </ul>
</div>

<!-- VueJS 3 and Bootstrap JS -->
<script src="https://unpkg.com/vue@3.2.6/dist/vue.global.prod.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="app.js"></script>
</body>
</html>

</template>

<script>
export default {
    data() {
        return {
            coffeeShops: [
                //... (ข้อมูลร้าน)
            ],
            currentShop: {},
            booking: {
                //... (ข้อมูลการจอง)
            },
            bookings: []
        };
    },
    methods: {
        deleteBooking(bookingId) {
            //... (ลบการจอง)
        },
        bookTable() {
            //... (จองโต๊ะ)
        },
        clearBookingForm() {
            //... (ล้างฟอร์ม)
        }
    }
}
</script>

<style scoped>
@import './custom.css';
</style>

  