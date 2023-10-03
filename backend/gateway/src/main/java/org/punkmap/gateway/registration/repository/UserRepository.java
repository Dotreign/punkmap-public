package org.punkmap.gateway.registration.repository;

import org.punkmap.gateway.registration.model.UserEntityDAO;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserEntityDAO, Long> {

    boolean existsByEmail(String email);
    boolean existsByConfirmationCode(String confirmationCode);
    UserEntityDAO findFirstByConfirmationCode(String confirmationCode);

}
