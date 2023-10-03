package org.punkmap.blockinfomicroservice.service;

import org.punkmap.blockinfomicroservice.model.BlockEntity;
import org.punkmap.blockinfomicroservice.model.BusinessEntity;
import org.punkmap.blockinfomicroservice.model.BusinessRequest;
import org.punkmap.blockinfomicroservice.model.BusinessResponse;
import org.punkmap.blockinfomicroservice.repository.BlockRepo;
import org.punkmap.blockinfomicroservice.repository.BusinessRepo;
import org.punkmap.blockinfomicroservice.service.util.BusinessMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BusinessService {

    BlockRepo blockRepo;
    BusinessRepo businessRepo;
    BusinessMapper businessMapper;

    @Autowired
    public BusinessService(
            BlockRepo blockRepo,
            BusinessRepo businessRepo,
            BusinessMapper businessMapper
    ) {
        this.blockRepo = blockRepo;
        this.businessRepo = businessRepo;
        this.businessMapper = businessMapper;
    }

    public BusinessResponse getBusiness(BusinessRequest businessRequest) {
        try {
            Optional<BusinessEntity> businessEntity = businessRepo.findByDormNumberAndBlockNumber(
                    businessRequest.getDormNumber(),
                    businessRequest.getBlockNumber()
            );
            if (businessEntity.isPresent()) {
                return businessMapper.getBusinessResponseFromBusinessEntity(businessEntity.get());
            } else {
                throw new RuntimeException("Business does not exist");
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    public BusinessResponse getBusinessByUserEmail(BusinessRequest businessRequest) {
        try {
            Optional<BusinessEntity> businessEntity = businessRepo.findByUserEmail(businessRequest.getUserEmail());
            if (businessEntity.isPresent()) {
                return businessMapper.getBusinessResponseFromBusinessEntity(businessEntity.get());
            } else {
                throw new RuntimeException("Business does not exist");
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    public BusinessResponse createBusiness(BusinessResponse businessResponse) {
        try {
            BusinessEntity businessEntity = businessMapper.getBusinessEntityFromBusinessResponse(businessResponse);
            businessRepo.save(businessEntity);
            return businessResponse;
        }
        catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

}
