package org.punkmap.usermicroservice.repository;

import org.punkmap.usermicroservice.model.UserEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, Long> {

    Optional<UserEntity> findUserByUsername(String username);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);

    Optional<UserEntity> findUserByUsernameAndEmail(String username, String email);
}
