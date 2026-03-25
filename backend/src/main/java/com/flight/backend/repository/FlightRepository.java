package com.flight.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.flight.backend.model.Flight;

// FlightRepository interface extending JpaRepository to provide CRUD operations for Flight entity
public interface FlightRepository extends JpaRepository<Flight, Long> {
}