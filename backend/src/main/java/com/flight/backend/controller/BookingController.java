package com.flight.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.flight.backend.model.Booking;
import com.flight.backend.model.Flight;
import com.flight.backend.repository.BookingRepository;
import com.flight.backend.repository.FlightRepository;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private FlightRepository flightRepository;

    @PostMapping
    public Booking createBooking(@RequestParam String passengerName, @RequestParam Long flightId) {
        Flight flight = flightRepository.findById(flightId).orElseThrow();
        Booking booking = new Booking(passengerName, flight);
        return bookingRepository.save(booking);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
}