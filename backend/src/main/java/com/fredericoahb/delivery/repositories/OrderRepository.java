package com.fredericoahb.delivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fredericoahb.delivery.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}