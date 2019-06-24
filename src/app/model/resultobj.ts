

    export class AuditList {
        oldDeliveryDock: string;
        oldDeliveryDate: string;
        oldDeliveryTime: string;
        changedBy: string;
        changedOn: string;
        reasonCode: string;
    }

    export class ResultList {
        poNo: string;
        deliveryDock: string;
        dcNo: string;
        vendorNo: string;
        orderDate: string;
        deliveryDate: string;
        deliveryTime: string;
        noOfPallets: string;
        source: string;
        status: string;
        auditList: AuditList[];
    }

    export class Result {
        returnCode: number;
        message?: any;
        resultList: ResultList[];
    }

