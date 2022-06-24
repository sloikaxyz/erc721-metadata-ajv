import * as ERC721MetadataAjv from './index';

describe('ERC721MetadataAjv', function () {
  it('exports ERC721_TOKEN_METADATA_SCHEMA', function () {
    expect(ERC721MetadataAjv).toBeDefined();
    expect(ERC721MetadataAjv.ERC721_TOKEN_METADATA_SCHEMA).toBeDefined();
  });
});
