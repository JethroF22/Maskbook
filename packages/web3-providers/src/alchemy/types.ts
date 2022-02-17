export interface AlchemyNFTItemDetailedResponse {
    contract: {
        name: string
        address: string
        externalDomain: string
    }
    id: {
        tokenId: string
    }
    title: string
    description: string
    media: {
        uri: string
        mimeType: string
    }
}

export interface AlchemyNFTItemMetadataResponse {
    contract: {
        address: string
    }
    id: {
        tokenId: string
    }
    title: string
    description: string
    externalDomainViewUrl: string
    media: {
        uri: string
    }[]
    alternateMedia: { uri: string }[]
    metadata: {
        name: string
        image: string
        attributes: { trait_type: string; value: string }[]
    }
    timeLastUpdated: string
}

export interface AlchemyNFTItemResponse {
    contract: {
        address: string
    }
    id: {
        tokenId: string
    }
}