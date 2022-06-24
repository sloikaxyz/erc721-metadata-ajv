import * as ERC721MetadataAjv from './index';

describe('ERC721MetadataAjv', function () {
  it('exports ERC721 token metadata schema and ajv init', function () {
    expect(ERC721MetadataAjv).toBeDefined();
    expect(ERC721MetadataAjv.ERC721_TOKEN_METADATA_SCHEMA).toBeDefined();
    expect(ERC721MetadataAjv.createERC721TokenMetadataValidator).toBeDefined();
  });

  it('exports ERC721 contract metadata schema and ajv init', function () {
    expect(ERC721MetadataAjv).toBeDefined();
    expect(ERC721MetadataAjv.ERC721_CONTRACT_METADATA_SCHEMA).toBeDefined();
    expect(
      ERC721MetadataAjv.createERC721ContractMetadataValidator,
    ).toBeDefined();
  });
});
