package org.punkmap.blockinfomicroservice.service.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.punkmap.blockinfomicroservice.model.BlockEntity;
import org.punkmap.blockinfomicroservice.model.BlockResponse;
import org.punkmap.blockinfomicroservice.model.BusinessEntity;
import org.punkmap.blockinfomicroservice.model.BusinessResponse;
import org.springframework.stereotype.Component;

@Component
public class BusinessMapper {

    public BusinessResponse getBusinessResponseFromBusinessEntity(BusinessEntity businessEntity) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.convertValue(businessEntity, BusinessResponse.class);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    public BusinessEntity getBusinessEntityFromBusinessResponse(BusinessResponse businessResponse) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.convertValue(businessResponse, BusinessEntity.class);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

}
