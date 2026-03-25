package com.flight.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.flight.backend.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}