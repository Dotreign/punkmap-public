package org.punkmap.blockinfomicroservice.repository;

import org.punkmap.blockinfomicroservice.model.BusinessEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BusinessRepo extends CrudRepository<BusinessEntity, Long> {


    Optional<BusinessEntity> findByDormNumberAndBlockNumber(Integer dormNumber, Integer blockNumber);

    Optional<BusinessEntity> findByUserEmail(String userEmail);

    List<BusinessEntity> findAllByTitleStartingWith(String searchLine);
}
