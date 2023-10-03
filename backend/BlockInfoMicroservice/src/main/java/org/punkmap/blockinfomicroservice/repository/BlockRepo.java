package org.punkmap.blockinfomicroservice.repository;

import org.punkmap.blockinfomicroservice.model.BlockEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BlockRepo extends CrudRepository<BlockEntity, Long> {

    Optional<BlockEntity> findByDormNumberAndBlockNumber(Integer dormNumber, Integer blockNumber);

    boolean existsByDormNumberAndBlockNumber(Integer dormNumber, Integer blockNumber);

    List<BlockEntity> findAllByBlockNumberStartingWith(Integer blockNumber);

    List<BlockEntity> findAllByBlockNameStartingWithIgnoreCase(String blockName);
}
